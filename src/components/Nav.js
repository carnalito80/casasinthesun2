import React, { Component } from 'react'
//import { Location } from '@reach/router'
import { Link } from "react-router-dom"
// import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      // { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <div className="Nav--LogoLinks">
            <Link aria-label="Click this to return to the main page" to="/" onClick={this.handleLinkClick}>
              <Link aria-label="Main page"  to="/">
              <Logo />
              </Link>
              </Link>
            <div className="Nav--Links">
              <NavLink to="/estepona">Estepona</NavLink>
              <NavLink to="/marbella">Marbella</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="Nav--Right">
       
            <a className="NavLink" href="https://wa.me/46706189324" rel="noreferrer" target="_blank" aria-label="Contact us on WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          
            <a className="NavLink" href="tel:+34 635 43 43 06"  rel="noreferrer" target="_blank" aria-label="Call us">
              <i className="fas fa-phone-alt"></i>
            </a>
          </div>
          <button
            aria-label="Menu button" className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> 
            : 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            }
          </button>
        </div>
      </nav>
    )
  }
}
export default Navigation
// export default ({ subNav }) => (
//   <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
// )
