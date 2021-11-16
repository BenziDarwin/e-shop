import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div>
            <h1>Hello world</h1>
            <Link to="/shop/additem">Add item</Link>
        </div>
    )
}

export default Home
