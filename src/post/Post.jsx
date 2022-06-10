import React from 'react'
import './post.css'

function Post() {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1654767619105-a623468e04dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="postImg" />
        <div className="postCates">
            <span className="postCate">Music</span>
            <span className="postCate">Life</span>
        </div>
        <div className="postTitle">Lorem ipsum dolor sit amet</div>
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem nulla voluptates qui consectetur debitis quia cupiditate illo, doloribus accusamus molestias? Eveniet beatae praesentium porro dolorem vel veniam, culpa modi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem nulla voluptates qui consectetur debitis quia cupiditate illo, doloribus accusamus molestias? Eveniet beatae praesentium porro dolorem vel veniam, culpa modi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem nulla voluptates qui consectetur debitis quia cupiditate illo, doloribus accusamus molestias? Eveniet beatae praesentium porro dolorem vel veniam, culpa modi.
        </p>
    </div>
  )
}

export default Post