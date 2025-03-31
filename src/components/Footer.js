import React from "react"
import categories from '../helpers/categories'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <section className="footer">

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <i className="fas fa-home"></i>
                        <span className="footer-other-text d-block mt-3 mb-3">
                            Check us out on social media
                        </span>
                        <div className="footer-social">
                        <a href="https://www.facebook.com/profile.php?id=61573983804682" rel="nofollow noreferrer" target="_blank"><div className="footer-social-item"><i className="fab fa-facebook"></i></div></a>
                            {/* <div className="footer-social-item"><i className="fab fa-twitter"></i></div> */}
                            <a href="https://www.facebook.com/profile.php?id=61573983804682" rel="nofollow noreferrer" target="_blank"><div className="footer-social-item"><i className="fab fa-instagram"></i></div></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Menu</p>
                        <ul className="footer-ul">
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/blog">Blog</Link></li> */}
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div>
                            <p className="footer-title">Categories</p>
                            <ul className="footer-ul">
                            {categories.map((cat) => (
                               
                            <li key={cat.url}> <Link to={cat.url}> {cat.name} </Link></li>
                            ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Contact</p>
                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-clock"></i></div> <span>10:00-17:00</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item" ><i className="fas fa-envelope"></i></div> <span><a href="mailto:info@casainthesun.eu">info@casainthesun.eu</a></span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fab fa-whatsapp"></i></div> <span><a href="https://wa.me/46706189324">WhatsApp</a></span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-phone-alt"></i></div> <span><a href="tel:+34 635 43 43 06">+34 635 43 43 06</a></span>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="col-lg-3 col-md-6">
                        <p className="footer-title">Subscribe</p>
                        <span className="footer-other-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                        </span>
                        <div className="subscribe-area mb-2 mt-2">
                            <input type="text" placeholder="Email" className="inp-footer w-100" />
                        </div>
                        <button className="btn-subscribe">Subscribe</button>
                    </div>*/}

                </div>
            </div>
        </section>
    )
}

export default Footer