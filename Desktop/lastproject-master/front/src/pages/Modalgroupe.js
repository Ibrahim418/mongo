import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Modal from "react-modal";
import { Button } from "./Button";
import './Button.css'
import "../App.css";
import { loadUser } from "../action/authaction";

import {addPost}from "../action/postaction"
import './Posts.css'
import {Input} from "antd";


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };



const Modalgroupe = ({groupeId}) => {


    

const [file, setFile] = useState();



const dispatch = useDispatch();

const auth = useSelector((state) => state.auth);
useEffect(() => {
if (!auth.user) dispatch(loadUser());
}, [dispatch, auth.user]);

const [modalIsOpen, setModalIsOpen] = useState(false);
function openModal() {
setModalIsOpen(true);
}
const closeModal = () => {
setModalIsOpen(false);
};

const [NewPost, setNewPost] = useState({
title: "",
discription: "",
groupe:groupeId,
});
const handlefile=(e)=>{
setFile(e.target.files[0])
}
const handleChange = (e) => {
setNewPost({
  ...NewPost,
  [e.target.name]: e.target.value,
});
};


const handleClose = (e) => {
e.preventDefault();
dispatch(addPost({...NewPost,owner:auth.user._id},file));


closeModal();
};

    return (
        <div>
          <div style={{textAlign:'center'}}>
        <Button variant="outline-info" onClick={openModal} className="btns"
                      >
        ADD
      </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Form>
          <label style={{ marginRight: 10 }}>Title</label>

          <Input type="text" name="title" onChange={handleChange} />

          <br />

          <label style={{ marginRight: 10 }}>Discription</label>

          <Input type="text" name="discription" onChange={handleChange} />
          <br />

          <label style={{ marginRight: 10 }}>picture</label>

          <Input type="file" name="picture"  onChange={handlefile} />
        </Form>

        <Button variant="outline-info" onClick={handleClose}>
          submision
        </Button>
      </Modal>
      
        </div>
    )}

export default Modalgroupe
