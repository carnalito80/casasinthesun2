import { useEffect, useState, useRef } from "react"


import b1 from "../img/nerja.webp"
import b2 from "../img/laconcha.webp"
import b3 from "../img/moske.webp"
import b4 from "../img/bouganville.webp"
import b5 from "../img/banner3.jpg"
import b6 from "../img/strand.webp"

import bm1 from "../img/nerja_mobile.webp"
import bm2 from "../img/laconcha_mobile.webp"
import bm3 from "../img/moske_mobile.webp"
import bm4 from "../img/bouganville_mobile.webp"
import bm5 from "../img/banner3_mobile.webp"
import bm6 from "../img/strand_mobile.webp"

import Meta from "./Meta/Meta"

// let images = [ // första är images[0] andra är images[1] osv
//     "/img/blommor.webp",
//     "../img/hav3_mobile.webp",
//     "../img/alhambra_mobile.webp",
//     "../img/cordoba_mobile.webp"

// ]

// let mobile_images = [ //första är mobile_images[0] andra är mobile_images[1] osv
//     "../img/nerja_mobile.webp",
//     "../img/hav3_mobile.webp",
//     "../img/alhambra_mobile.webp",
//     "../img/cordoba_mobile.webp"
// ]
const Banner = ({page}) => {
    const [bgImage, setBgImage] = useState(null);
    const bannerRef = useRef(null);

    let banner = b1
    let banner_mobile = bm1
    if (page === "estepona") {
       banner = b6
       banner_mobile = bm6
    }
    else if (page === "marbella") {
        banner = b2
        banner_mobile = bm2
    }
    else if (page === "contact") {
        banner = b3
        banner_mobile = bm3
    }
    else if (page === "about") {
        banner = b4
        banner_mobile = bm4
    }
    else if (page === "malaga") {
        banner = b1
        banner_mobile = bm1
    }
     else if (page === "guides") {
        banner = b1
        banner_mobile = bm1
    }
    else if (page === "notfound") {
        banner = b5
        banner_mobile = bm5
    }
    else {
        banner = b4
        banner_mobile = bm4
    }
    
    useEffect(() => {
    const preloadImage = (src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => setBgImage(src); // Set only after loading
        };
    
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width < 768) { // Mobile
        preloadImage(banner_mobile) 
      } else { // Desktop
        preloadImage(banner); 
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          updateBackground();
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    window.addEventListener("resize", updateBackground);
    updateBackground()
    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
      window.removeEventListener("resize", updateBackground);
    };
  },[banner, banner_mobile]);

    return (
        <div>
            <Meta preloadImage={bgImage} />
            <style>
            {` body::before {
            content: url(${bgImage});
            display: none;
            } `}
            </style>
           
            <div ref={bannerRef} className={`banner h-100 d-flex align-items-center justify-content-center bg-cover bg-center lazy-bg ${bgImage ? "bg-loaded" : ""}`}  style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none", opacity: bgImage ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
                <div className="bg-custom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="banner-area text-center pt-4 pb-4">
                                   {/* <p>Welcome to Casas in the Sun</p>*/}
                                    <h3 className="mt-2 mb-4 banner-title"> Your real estate agent on Costa del sol </h3>
                                    {/* <div className="search-area">
                                        <input value={word} onChange={(e) => findSearch(e)} type="text" className="inp-search" placeholder="Search" />
                                        <button className="btn-search m-2">Search All</button>
                                    </div>
                                    {findResult()} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;