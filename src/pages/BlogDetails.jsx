import React from 'react'
import {useParams} from 'react-router-dom'
const BlogDetails = () => {
    const params=useParams()
    const id=params.id
  return (
    <div className='blogdetails'>
      <h4>Blog id:{id}</h4>
    </div>
  )
}

export default BlogDetails
