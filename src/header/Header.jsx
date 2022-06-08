import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <div className="headerTitleSm">WIZ</div>
            <div className="headerTitleLg">BLOG</div>
        </div>
        <img className='headerImg' src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
    </div>
  )
}

export default Header