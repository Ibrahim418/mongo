import React from 'react'
import { useSelector} from 'react-redux'




const Comments = (props) => {


    return (
        <div>
            <br/>
            <p>comment</p>
            <hr/>
              {props.comments &&props.comments.map((comment , index)=>
           
                <h2>{comment.writer.firstname} : {comment.content}</h2>
              )} 

      
        </div>
    )
}

export default Comments
