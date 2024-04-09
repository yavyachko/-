import React from "react";
import MyButton from "./UI/button/MyButton";
const Post = (props) =>{
    return(
        <div className='post'>
        <div className='post__contenet'>
          <strong>{props.number}. {props.post.title}</strong>
          <span>{props.post.describe}</span>
        </div>
        <div className='post__btns'>
          <MyButton onClick={()=> props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    )
}
export default Post