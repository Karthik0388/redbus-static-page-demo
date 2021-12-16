import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RightMenu = () => {
    let [state, setState] = useState(false);
    let [dropDown,setDropDown] = useState(false)

    let handlechange = () => {
        setState(!state)
    }
    let dropDownChange = () =>{
        setDropDown(!dropDown)
    }
    return (
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link className="nav-link" to="/">Help</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="" onClick={dropDownChange}>Manage Bookings <i class="fas fa-angle-down"></i></Link>
                    <ul className="dropDownAuth1" style={dropDown === false ? { display: "none" } : { display: "block" }}>
                        <li><Link to="">Cancel</Link></li>
                        <li><Link to="">Change Travel Date</Link></li>
                        <li><Link to="">ShowMy Tickets</Link></li>
                        <li><Link to="">EMAIL/SMS</Link></li>
                    </ul>
                    <div className="triangle"></div>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="" onClick={handlechange}  ><i style={{fontSize:"30px"}} class="fal fa-user-circle"></i>  <i style={{top:"-5px"}} class="fas fa-angle-down"></i></Link>
                    <ul className="dropDownAuth" style={state === false ? { display: "none" } : { display: "block" }}>
                        <li><Link to="/signin">Signin</Link></li>
                        <li><Link to="/sigup">Signup</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default RightMenu
