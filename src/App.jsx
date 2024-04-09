import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Counter from './component/counter';
import './styles/App.css';
import Post from './component/Post';
import PostList from './component/PostList';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/button/input/MyInput';
import { useMemo, useRef } from 'react';
import PostForm from './component/PostForm';
import MySelect from './component/UI/button/select/MySelect';
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'JavaScript', describe: 'JS - is programming lang'},
    {id: 2, title:'JavaScript', describe: 'JS - is programming lang'},
    {id: 3, title:'JavaScript', describe: 'JS - is programming lang'},
  ])

  const[selectedSort, setSelectedSort] = useState('');
  const[searchQuery, setSearchQuery]=useState('')

  console.log(posts)

  const sortedPosts = useMemo(()=>{
    console.log('hook worked')
    if(selectedSort) {
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.includes(searchQuery))
  },[searchQuery, sortedPosts])

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts()
  }

  return (
    <div className='App'> 
      <PostForm create = {createPost}/>
      <hr style={{margin: "15px 0"}}/>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            {value: 'title', name: 'By heading'},
            {value: 'describe', name: 'By describing'}
          ]}
        />
        <MyInput
          value = {searchQuery}
          onChange = {e =>setSearchQuery(e.target.value)}
        />
      <hr style={{margin: "15px 0"}}/>
      {posts.length!==0
        ? <PostList remove = {removePost} posts={posts} title = 'PostList1'/>
        : <h2 style={{textAlign: 'center'}}>Posts not found!</h2>
      }
    </div>
  )
}

export default App;
