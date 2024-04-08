import React, { useEffect, useState } from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import appWriteServices from '../appwrite/congif.js'
import Container from '../components/container/Container.jsx'
import PostFrom from '../components/post-form/PostForm.jsx'

function EditPost() {
  const [post , setPost] = useState(null)
  const {slug} = useParams()
  const navigate =useNavigate()


  useEffect(()=>{
    if(slug){
      appWriteServices.getPost(slug).then((post)=>{
        if(post){
          setPost(post)

        }else{
          navigate("/")
        }
      })
    }
  }, [slug, navigate])
  return (
    <div className='py-6'>
    <Container>
      <PostForm post={post} />
    </Container>
  </div>
  )
}

export default EditPost