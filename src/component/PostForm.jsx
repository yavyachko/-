import { useState } from "react";
import React from "react";
import MyInput from "./UI/button/input/MyInput";
import MyButton from "./UI/button/MyButton";


 function PostForm({create}){

    const [post, setPost] =  useState({title: '', describe: ''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {...post, id:Date.now()}
        create(newPost)
        setPost({title: '', describe: ''})
      }

    return(
        <form action="">
        <MyInput 
          value={post.title} 
          type="text" 
          placeholder='post name'
          onChange = {e=>setPost({...post,  title: e.target.value})}/>
        <MyInput 
            value={post.describe}
            type="text"
            placeholder='post describe'
            onChange = {e=>setPost({...post, describe: e.target.value})}/>
        <MyButton onClick = {addNewPost}>Create post</MyButton>
      </form>
    )
 }
 export default PostForm