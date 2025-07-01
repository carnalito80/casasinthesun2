import React from "react"
import {Link} from "react-router-dom"
import { Collapse } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import "bootstrap/dist/js/bootstrap.bundle.js";

    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('navbarz');
    const bsCollapse = Collapse.getOrCreateInstance(menuToggle, {toggle: false})
    navLinks.forEach((l) => {
        if (menuToggle.classList.contains('show')) {  // only fire on mobile
            l.addEventListener('click', () => { 
                bsCollapse.toggle() 
            })}
        });
const Header = () => {
    
    console.log(menuToggle)
   
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-light navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                            <i className="fas fa-home"></i>
                                <span className="ms-2">
                                    MB
                           </span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarz" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarz">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/guides">Guides</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Category <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to="#">item</Link></li>
                                        <li><Link to="#">item</Link></li>
                                        <li><Link to="#">item</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;