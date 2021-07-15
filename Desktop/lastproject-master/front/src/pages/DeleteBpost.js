import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import { deletepost, getPosts } from '../action/postaction';
import { useDispatch, useSelector } from 'react-redux';






const DeleteBpost = ({post}) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const posts=useSelector((state)=>state.posts.posts)
    
    const [Delete, setDelete] = useState(false);




    // useEffect(() => {
    //     if (post.find(delet=>delet == (post.owner._id))) setDelete(true);
    //     else setDelete(false);
    //   }, [post.owner._id, post, Delete]);



    const handledelete=(e)=>{
    if(auth.user._id==post.owner._id)
        dispatch(deletepost(post._id))
        setDelete(true)
      }

  
    return (
        <div>
        <Grid item xs={8}>
        <DeleteIcon onClick={handledelete}  />
       
      </Grid>
        </div>
    )
}

export default DeleteBpost
