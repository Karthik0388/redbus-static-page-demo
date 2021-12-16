import React from 'react'
import {Link} from "react-router-dom"

const LeftMenu = () => {
    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link className="nav-link" to="/bus-tickets">BUS TICKETS</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="">rPool<sup>New</sup></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="">BUS HIRE</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="">redrail</Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu
