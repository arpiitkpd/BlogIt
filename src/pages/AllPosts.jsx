import React, { useEffect, useState } from 'react'
import appWriteService from '../appwrite/congif.js'
import Container from '../components/container/Container.jsx'
import PostCard from '../components/PostCard.jsx'

function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    appWriteService.getPosts([]).then((posts)=>{
      if(posts){
        setPosts(posts.documents)
      }
    })
  },[])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts .map((post)=>(
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts