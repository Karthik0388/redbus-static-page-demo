import React from 'react'
import LeftMenu from './NavBar/LeftMenu';
import RightMenu from './NavBar/RightMenu';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img style={{width:"60px"}}src="RedBusLogo.png" alt="Logo" /></Link>
                    <LeftMenu />
                    <RightMenu />
                </div>
            </nav>
        </div>
    )
}

export default NavBar
