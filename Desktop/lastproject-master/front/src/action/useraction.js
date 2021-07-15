import {
  
  UPLOAD_PICTURE,
    UPDATEUSER_SUCCES,
    UPDATEUSER_FAIL,
    GETUSERS_SUCCESS,
    GETUSERS_FAIL,
    FOLLOW_FAIL,
    FOLLOW,
    UNFOLLOW_FAIL,
    UNFOLLOW,
    GETFRIENDS_SUCCESS,
    GETFRIENDS_FAIL
}from './type'
import axios from "axios";

import { loadUser } from './authaction';
//-------------------upoladavatar------------



export const uploadPicture = (data, id) =>(dispatch)=> {
       axios
        .put(`http://localhost:4000/uploadpic/${id}`, data)
        .then((res) => dispatch(loadUser(id)))
          .catch((err) =>
          dispatch({
            type: UPLOAD_PICTURE,
            payload: err.response.data.msg,
          })
        );
        }

export const updateuser=(id,data )=>(dispatch)=>{
  console.log(id)
  console.log(data)

  axios.put(`http://localhost:4000/users/${id}`, data)
  .then((res) => {
    dispatch({
      type: UPDATEUSER_SUCCES,
      payload: { user: "User Updated" },
    });
    dispatch(loadUser())
  })
  .catch((err) =>
    dispatch({
      type: UPDATEUSER_FAIL,
      payload: err,
    })
  );
};

//--------------------

export const getUsersList = () => (dispatch) => {
  axios
    .get(`http://localhost:4000/users`)
    .then((res) => {
      dispatch({
        type: GETUSERS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETUSERS_FAIL,
      });
      // console.log(err);
    });
}


export const follow =(id)=>(dispatch)=>{
  axios.put(`http://localhost:4000/user/follow/${id}`)
  .then((res)=>{
    dispatch({
      type: FOLLOW,
      payload: res.data,
    })
  })
  .catch((err) => {
    dispatch({
      type: FOLLOW_FAIL,
      payload:err
    });
    // console.log(err);
  });
}

export const unfollow =(id)=>(dispatch)=>{
  axios.put(`http://localhost:4000/user/follow/${id}`)
  .then((res)=>{
    dispatch({
      type:UNFOLLOW,
      payload: res.data,
    })
  })
  .catch((err) => {
    dispatch({
      type:UNFOLLOW_FAIL ,
      payload:err
    });
    // console.log(err);
  });
}

//--------------getfriends----------------


export const getfriends=(id)=>(dispatch)=>{
  axios.get(`http://localhost:4000/users/friends/${id}`)
  .then((res)=>{
    dispatch( {
      type:GETFRIENDS_SUCCESS,
      payload:res.data
    })
    .catch((err) => {
      dispatch({
        type:GETFRIENDS_FAIL ,
        payload:err
      });
      
    });
  })
}