import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" className="sidebarImg" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora deleniti laborum iure culpa placeat in excepturi accusamus vero nemo dolor.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="categoryList">
                <li className="categoryListItem">Life</li>
                <li className="categoryListItem">Music</li>
                <li className="categoryListItem">Style</li>
                <li className="categoryListItem">Cinema</li>
                <li className="categoryListItem">Sport</li>
                <li className="categoryListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarIcons">
                <i class="sidebarIcon fa-brands fa-twitter-square"></i>
                <i class="sidebarIcon fa-brands fa-instagram-square"></i>
                <i class="sidebarIcon fa-brands fa-facebook-square"></i>
                <i class="sidebarIcon fa-brands fa-pinterest-square"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar