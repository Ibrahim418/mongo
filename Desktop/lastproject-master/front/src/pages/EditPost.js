
import BorderColorIcon from "@material-ui/icons/BorderColor";
import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Modal, Input } from "antd";

import { updatepost } from "../action/postaction";

const EditPost = ({post}) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [file, setFile] = useState(post.picture)
  const [changepost, setChangepost] = useState({
    title: post.title,
    discription:post.discription,
  });
  const showModal = (e) => {
    setChangepost({ ...changepost, [e.target.name]: e.target.value })
    setVisible(true);
  };

  const handleOk = (e) => {
    if(auth.user._id===post.owner._id)

    dispatch(updatepost(post._id,changepost,file))
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };



  const handleChange =(e)=>{
   
    setChangepost({...changepost, [e.target.name]:e.target.value})
    console.log(changepost)
  }

  return (
    <div>
      <BorderColorIcon onClick={showModal} />
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      > 
        <Input placeholder={post.title} value={changepost.title} name="title" onChange={handleChange} />
        <Input placeholder={post.discription} value={changepost.discription} name='discription' onChange={handleChange} />
        <Input type='file' onChange={(e)=> setFile(e.target.files[0])} />
        {/* <Upload {...props} >
          <Button icon={<UploadOutlined />} >Click to Upload</Button>
        </Upload> */}
      </Modal>
    </div>
  );
};

export default EditPost