import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import Title from "./Title"
import Subscribe from "./Form/Subscribe"
import { useState, useEffect } from "react";
import * as contentful from "contentful"
import MalagaGeneral from "./MalagaGeneral"




const Malaga=({version})=>{
    console.log(version)
    let title = "Malaga"
    let description = "The heart of Andalucia"
    if (version === "house") {
        title = "Buy housing in Malaga"
        description = "We'll help you every step of the way."
    }
    else if (version === "apartment") {
        title ="Apartments in Malaga"
        description = "We'll help every step on the way of getting your dream apartment"
    }
    else {
        
    }
    // State to store the fetched data
    const [data, setData] = useState(null);

  // State to track if the data is still loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from API on component mount
        const fetchData = async () => {
          try {
            const client = contentful.createClient({
                space: 'cx70k9zsq5af',
                environment: 'master', // defaults to 'master' if not set
                accessToken: 'F2kMyptLDLJVSZnnmNilbGhjaos8o6eY12pIHBiXlzc'
              })
              
            //   client.getEntry('1D9Vo6dCTArZxuX0e6GVlq')
            //     .then((entry) => console.log(entry))
            //     .catch(console.error)
            
           await client.withoutUnresolvableLinks.getEntries()
                .then(
                    (entries) => {
                        console.log(entries)
                        // Store the data in state
                        setData(entries.items)
                    }
                )
                .catch(console.error)
            setLoading(false); // Set loading to false once data is fetched
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array ensures the effect runs only once

    return (
        <React.Fragment>
            <Banner page={"malaga"}/>
            {version !== "" &&
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {version === "apartment" && 
                                <div>
                                    <Title title={title} description={description} size= {1}/>
                                    <p>Att köpa en lägenhet i Malaga är inte bara en investering i fastigheter, det är en investering i livskvalitet. Malaga, med sitt fantastiska klimat, rika kulturarv och blomstrande internationella gemenskap, erbjuder något för alla – från soldränkta stränder och mysiga tapasbarer till ett pulserande stadsliv och lugna, charmiga bostadsområden.</p>
                                    <p>Som eran mäklare är vårat mål att göra hela processen smidig och trygg. Vi lyssnar noga på dina behov och önskemål – oavsett om du söker en modern lägenhet med havsutsikt, en charmig bostad i gamla stan, eller en investering med hög avkastningspotential.</p>
                                    <p>Med mitt breda kontaktnät, lokalkännedom och erfarenhet av den spanska fastighetsmarknaden kan vårat team guida dig genom varje steg. Från att hitta rätt objekt till att hantera juridiska och administrativa detaljer – vi finns här för att säkerställa att din dröm om att äga en lägenhet i Malaga blir verklighet.</p>
                                </div>
                            }
                            {version === "house" && 
                                <div>
                                    <Title title={title} description={description} size= {1}/>
                                    <p>Att köpa ett hus i Malaga är inte bara en investering i fastigheter, det är en investering i livskvalitet. Malaga, med sitt fantastiska klimat, rika kulturarv och blomstrande internationella gemenskap, erbjuder något för alla – från soldränkta stränder och mysiga tapasbarer till ett pulserande stadsliv och lugna, charmiga bostadsområden.</p>
                                    <p>Som eran mäklare är vårat mål att göra hela processen smidig och trygg. Vi lyssnar noga på dina behov och önskemål – oavsett om du söker ett modernt hus med havsutsikt, en charmig bostad i gamla stan, eller en investering med hög avkastningspotential.</p>
                                    <p>Med mitt breda kontaktnät, lokalkännedom och erfarenhet av den spanska fastighetsmarknaden kan vårat team guida dig genom varje steg. Från att hitta rätt objekt till att hantera juridiska och administrativa detaljer – vi finns här för att säkerställa att ditt husköp i Malaga blir verklighet.</p>
                                </div>
                            }
                          
                        </div>
                    </div>
                </div>
            </section>
            }
            {version === "" &&
                           <MalagaGeneral s={1} />
                           }
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <FlatList properties={data} />
            )}
            <Subscribe/>
            {version !== "" &&
                <MalagaGeneral s={3}/>
            }

        </React.Fragment>
    )
}

export default Malaga;