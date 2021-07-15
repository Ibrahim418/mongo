import {
  ADDCOOMENT_FAIL,
  ADDPOST_FAIL,
  GETPOSTS,
  GET_POST,
  ADDLIKE_FAIL,
  MOST_LIKED_POST,
  LIKEPOST_ERROR,
  GETBYDATE,
  GETCOMMENT_FAIL,
  GETCOMMENT_SUCCESS,
  POSTDELETED_SUCCESS,
  POSTDELETED_FAIL,
  POSTUPDATED_SUCCESS,
  POSTUPDATED_FAIL,
  
} from "./type";
import axios from "axios";
import setToken from "../setToken";

//-----------getposts---------------

export const getPosts = () => (dispatch) => {
  axios.get("http://localhost:4000/posts").then((res) => {
    return dispatch({
      type: GETPOSTS,
      payload: res.data,
    });
  });
};
//-------------------getpost-------------

export const getpost = (post_id) => (dispatch) => {
  axios.get(`http://localhost:4000/post/${post_id}`).then((res) => {
    return dispatch({
      type: GET_POST,
      payload: res.data,
    });
  });
};

//-----------getpostbydate------------------

export const getpostbydate = () => (dispatch) => {
  axios.get("http://localhost:4000/post/date").then((res) => {
    dispatch({
      type: GETBYDATE,
      payload: res.data,
    });
  });
};

//-------------------aadpost----------------

export const addPost = (data, file) => (dispatch) => {
  console.log(data, file);
  // const formData= new FormData();
  // formData.append('picture',file);
  // formData.append('data',JSON.stringify(data));
  let formData = new FormData();
  formData.append("picture", file);
  formData.append("data", JSON.stringify(data));
  axios
    .post("http://localhost:4000/post/create", formData)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: ADDPOST_FAIL,
        payload: err.response.data.msg,
      })
    );
};

//------------aadcomment------------------

export const addcomment = (data) => (dispatch) => {
  axios
    .post("http://localhost:4000/api/comment/savecomment", data)
    .then(() => {
      dispatch(getPosts());
    })
    .catch((err) =>
      dispatch({
        type: ADDCOOMENT_FAIL,
        payload: err.response.data.msg,
      })
    );
};

export const getComments = (postId) => (dispatch) => {
  axios
    .get("http://localhost:4000/api/comment/getComments/" + postId)
    .then((res) => {
      dispatch(getpost(postId));
      dispatch({
        type: GETCOMMENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GETCOMMENT_FAIL,
        payload: err.response.data.msg,
      })
    );
};
//----------addliketopost---------------------

export const addliketopost = (postId) => (dispatch) => {
  console.log(postId);
  setToken();
  axios
    .put(`http://localhost:4000/postlike/${postId}`)
    .then((res) => {
      return dispatch(getPosts());
    })
    .catch((err) =>
      dispatch({
        type: ADDLIKE_FAIL,
        payload: err.response.data.msg,
      })
    );
};

//------------postmostiked----------------

export const postmostiked = () => (dispatch) => {
  axios
    .get("http://localhost:4000/post/mostliked")
    .then((res) => {
      dispatch({ type: MOST_LIKED_POST, payload: res.data });
    })

    .catch((err) =>
      dispatch({
        type: LIKEPOST_ERROR,
        payload: err.response.data.msg,
      })
    );
};

//----------deletepost-----

export const deletepost = (postId) => (dispatch) => {
  setToken();
  axios
    .delete(`http://localhost:4000/post/${postId}`)
    .then((res) => {
      dispatch({ type: POSTDELETED_SUCCESS, payload: res.data });
      dispatch(getPosts());
    })

    .catch((err) =>
      dispatch({
        type: POSTDELETED_FAIL,
        payload: err.response.data.msg,
      })
    );
};

//------updatepost------------------------

export const updatepost = (postId,data,file) => (dispatch) => {
  let formData = new FormData();
  formData.append("picture", file);
  formData.append("data", JSON.stringify(data));

  axios.put(`http://localhost:4000/post/${postId}`,formData)
  .then((res) => {
    dispatch({
      type: POSTUPDATED_SUCCESS,
      payload: res.data,
    });
    dispatch(getPosts());
  }).catch((err) => {
    dispatch({
      type: POSTUPDATED_FAIL,
      payload: err.response.data.msg,
    });
  });
};



