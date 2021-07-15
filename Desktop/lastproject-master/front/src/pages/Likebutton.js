import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { addliketopost } from '../action/postaction';
import {HeartOutlined} from "@ant-design/icons"

const Likebutton = ({post}) => {
    const [liked, setLiked] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();




    useEffect(() => {
        if (post.likers.find(like=>like == (user._id))) setLiked(true);
        else setLiked(false);
      }, [user._id, post.likers, liked]);



    
    //   const unlike = () => {
    //     dispatch(unlikePost(post._id, user._id))
    //     setLiked(false);
    //   };


      const like = () => {
        dispatch(addliketopost(post._id, user._id))
        setLiked(true);
      };

    return (
        <div>
        
         
          <HeartOutlined  style={{color:'black' }} onClick={like} alt="like" />
          <span>{post.likers.length}</span>
        </div>
    )
}

export default Likebutton
