import Post from "./Post";
// import "./posts.scss";
import {useQuery} from 'react-query'
import { makeRequest } from "../../axios";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const Posts = () => {

  const [data2, setData] = useState([])
  
  const {isLoading, error, data}=useQuery(['posts'], ()=>
  makeRequest.get("/posts").then((res)=>{
    return res.data
  })
  )

  useEffect(() => {
    fetch(`${API_URL}/api/posts`).then(res => res.json()).then(data => {
        setData(data);
    });
}, [])


  return <div className="posts">
    {error ? "Something went wrong!" : (isLoading? "loading" : data.map(post=>(
      <Post post={post} key={post.id}/>
    )))}
  </div>;
};

export default Posts;
