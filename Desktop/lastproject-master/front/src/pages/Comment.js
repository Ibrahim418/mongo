import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcomment } from '../action/postaction'

const Comment = (props) => {
   
    const [Comment, setComment] = useState("")
 const dispatch = useDispatch()

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addcomment({
            postId:props.postId,
            writer:props.writer,
            content :Comment
        }))
        setTimeout(() => {
            props.refreshComment()
        },1000);
        setComment('')
 
     

        // const variables = { 
        //     content: Comment,
        //     writer: user.userData._id,
        //     postId: props.postId   
        //  }
        //  axios.post('', variables)
        //  .then(response=> {
        //      if(response.data.success) {
        //          setComment("")
        //          props.refreshFunction(response.data.result)
        //      } else {
        //          alert('Failed to save Comment')
        //      }
        //  })
        }
    return (
        <div>
            <form style={{display:'flex'}} onSubmit={onSubmit}>
                <input style={{width:'100%' , borderRadius:'5px'}}
                onChange ={handleChange}
                value ={Comment}
                placeholder="write your comment"/>
                <br/>
                <button style={{width:'20%' , height:'50px'}} type="submit">add comment</button>
            </form>
        </div>
    )
}

export default Comment
