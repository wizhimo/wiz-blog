import React from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import './home.css'

function Home() {
  return (
    <div>
        <Header/>
        <div className="container">
          <Posts/>
          <Sidebar/>
        </div>
    </div>
  )
}

export default Home