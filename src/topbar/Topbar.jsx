import React from 'react'
import './topbar.css'

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarLeft">
            <i class="topbarIcon fa-brands fa-facebook-square"></i>
            <i class="topbarIcon fa-brands fa-twitter-square"></i>
            <i class="topbarIcon fa-brands fa-instagram-square"></i>
            <i class="topbarIcon fa-brands fa-pinterest-square"></i>
        </div>
        <div className="topbarCenter">
            <ul className="topbarList">
                <li className="topbarListItem">HOME</li>
                <li className="topbarListItem">ABOUT</li>
                <li className="topbarListItem">CONTACT</li>
                <li className="topbarListItem">WRITE</li>
                <li className="topbarListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topbarRight">
            <img className='topbarImg' src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            <i class="topbarSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar