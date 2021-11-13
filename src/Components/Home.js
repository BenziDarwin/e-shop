import React from 'react'
import { Row ,Col } from 'react-bootstrap'
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
