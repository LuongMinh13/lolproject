import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List';

import "../styles/Home.css"

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <List />
        </div>
    )
}

export default Home
