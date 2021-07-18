import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { addliketopost } from '../action/postaction';
import {BankTwoTone, BugTwoTone, HeartOutlined} from "@ant-design/icons"
import './Likebutton.css'

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
        setLiked(true);
        dispatch(addliketopost(post._id, user._id))
   
        }
     
        
    return (
      <div>
        <div className='toggle'>
        
         
        <i id='btttn' className={liked? 'fas fa-heart' :'far fa-heart' } onClick={like} ></i>  
          <span>{post.likers.length}</span>
        </div>
       
        </div>
    )
}

export default Likebutton
