import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { loadUser } from "../action/authaction";
import GroupesList from "./GroupesList";
import { Modal, Button , Input} from 'antd';
import { creategroupe } from "../action/groupeaction";
import {getgroupes} from '../action/groupeaction'
import { Link } from "react-router-dom";


const Group = () => {
  

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.user) dispatch(loadUser());
  }, [dispatch, auth.user]);

  const [NewGroupe, setNewGroupe] = useState([{
    Name: "",
    theme: "",
    
  }]);
  const handleChange = (e) => {
    setNewGroupe({
      ...NewGroupe,
      [e.target.name]: e.target.value,
    });
  };

  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClose = (e) => {
   
    dispatch(creategroupe({ ...NewGroupe }));
    setIsModalVisible(false);
  };
  const handleShow = () => setIsModalVisible(true);


  const handleOk = () => {
    setIsModalVisible(false);}

    const handleCancel = () => {
      setIsModalVisible(false);}
    
    const [searchgroup,setSearchgroup]=useState("")
    const groupe = useSelector(state => state.groupe.groupes)
    
    useEffect(() => {
      dispatch(getgroupes());
    }, []);

    
    return (
       
           <div style ={{textAlign:'center'}}>
             <input type='text' placeholder='groups search ...' onChange={e=>setSearchgroup(e.target.value)} />
             {groupe.filter((val)=>{
               if (searchgroup==""){
                 
                 
               }else if 
                 (val.Name.toUpperCase().includes(searchgroup.toUpperCase())){
                  return val
                 }
                

             }).map((val ,key)=>{
               return (
               <ul>
                 <li>
                 <Link key={key} to={`/groupe/${val._id}`}>{val.Name}</Link>
                   </li>
                   </ul>
             )})}
             <br/>
             <br/>
             <br/>
        <Button type="primary" onClick={handleShow}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleClose} onCancel={handleCancel}>
      <label style={{ marginRight: 10 }}>name </label>

<Input type="text" name="Name" onChange={handleChange} />

<br />

<label style={{ marginRight: 10 }}>theme </label>

<Input type="text" name="theme" onChange={handleChange} />
      </Modal>
        
      <GroupesList/>
        </div>
    )
}

export default Group
