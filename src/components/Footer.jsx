import React from 'react'

const Footer = () => {
    return (
        <div className="text-center">
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid ">
            <span className="text-center">Maira Berdun - &copy; {new Date().getFullYear()}{""}</span>
            </div>
        </nav>
        </div>
    )
}

export default Footer
