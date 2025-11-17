import Banner from "./Banner"
import React from "react"
import Meta from "./Meta/Meta"
const About = () => {
    return (
        <React.Fragment>
             <Meta title={"Casas in the Sun - About Us"} description={'Do not hesitate to contact us.'} absoluteImageUrl = {'https://platsisolen.se/img/solnedgang.webp'} canonicalLink = {'https://platsisolen.se/om-oss'} keywords={'kontakta platsisolen'}/>
            <Banner page={"about"}/>
            <section className="about">
                {/* <div className="page-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-title">Om Oss</h1>
                                
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/img/malaga.webp" alt="malaga" className="w-100" />
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <div className="title">
                                        About us
                                </div>
                                    <div className="about-text">
                                    <p>We on <a href="https://www.casasinthesun.eu/"target="_blank">casasinthesun</a> collaborate with several experienced real estate agents who have extensive knowledge of the market. We are dedicated professionals who are truly passionate about what we do. Having lived and worked on the Costa del Sol for many years, we have developed a deep understanding of both the area and the local community.</p>
                                    <p>We want to give you a professionell service and support you through the whole process – guiding you through the process, from finding the right property to finalizing the purchase.</p>
                                    <p>Your security and satisfaction are our top priorities. We always strive to provide the same level of care and service that we would expect ourselves when buying a home. Our goal is for you to feel so pleased with your experience that you recommend us to friends and family – or choose to return when it’s time for your next property purchase. That’s when we know we’ve done our job well.</p>
                                    <p>Do you have any questions? Don’t hesitate to get in touch – we’re always happy to help.</p>

                                    {/* <p>Vi är ett litet team med många års kunskap om marknaden. Vi har bott och arbetat på Costa del Sol i många år med att erbjuda våra tjänster och har hög kunskap om området och miljön.</p>
                                    <p>Det är viktigt med service som är professionell, heltäckande och kamratlig. Dessa kvaliteter hittar du hos oss. Vi erbjuder en helhets lösning och är med hela vägen från att hitta en lämplig bostad tills köpet är klart.</p>
                                    <p>Du som kund är viktig för oss och vi arbetar efter principen att ge den service som vi själva skulle förvänta oss vid ett köp av bostad. Målet är att kunden känner sig nöjd och tillfreds med vårt arbete och rekommenderar oss vidare till sina vänner och bekanta eller återkommer vid nästa bostadsaffär. Då har vi gjort ett bra jobb!</p>
                                    <p>Om du har några frågor, skriv till oss. Vi kommer att svara på alla frågor.</p> */}
                                </div>
                                    {/* <div className="about-features">
                                        <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum is simply</p>
                                        <p className="about-feature" ><i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum is simply</p>
                                        <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum is simply</p>

                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About