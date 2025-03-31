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
                                <img src="/img/product1.jpeg" alt="product" className="w-100" />
                            </div>
                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="title">
                                        Om Oss
                                </div>
                                    <div className="about-text">
                                    <p>Vi är ett erfaret och engagerat team med många års kunskap om marknaden. Efter att ha bott och arbetat på Costa del Sol under lång tid, har vi en djup förståelse för både området och den lokala miljön.</p>
                                    <p>Vår service präglas av professionalism, helhetstänk och vänlighet. Vi erbjuder en komplett lösning, där vi stöder dig genom hela processen – från att hitta rätt bostad till att avsluta köpet.</p>
                                    <p>Din trygghet och tillfredsställelse är viktig för oss. Vi strävar efter att ge den service vi själva skulle önska vid ett bostadsköp. Vårt mål är att du ska känna dig nöjd och att du gärna rekommenderar oss vidare till vänner och bekanta – eller återvänder vid ditt nästa bostadsköp.</p>
                                    <p>Då vet vi att vi har gjort ett bra jobb! Har du några frågor? Tveka inte att höra av dig, vi svarar gärna på alla dina funderingar.</p>

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