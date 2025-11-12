import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
// import TeamList from "./TeamList"
import Title from "./Title"
import References from "./References"
import Subscribe from "./Form/Subscribe"
// import BestFlatList from "./BestFlatList"
import { useState, useEffect } from "react";
import * as contentful from "contentful"
import Meta from "./Meta/Meta"


const Sotogrande=({version})=>{
    let title = "Sotogrande"
    let description = "Exclusive, scenic and relaxing"
    let canonicalLink = 'https://casasinthesun.eu/sotogrande'
    if (version === "house") {
        title = "Buy housing in Sotogrande"
        description = "We'll help you out with you new house, and everyting that resolves around it."
    }
    else if (version === "apartment") {
        title ="Casas in the Sun - Apartments in Estepona"
        description = "Welcome to Estepona! Here, you'll find a nice selection of apartments."
        canonicalLink = 'https://casasinthesun.eu/apartments-estepona'
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
            
           await client.withoutUnresolvableLinks.getEntries(
            {
                content_type: 'realEstateProperty',
                'fields.city[in]': 'sotogrande'
             }
           )
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
            <Meta title={title} description={description} absoluteImageUrl = {'https://casasinthesun.eu/img/solnedgang.webp'} canonicalLink = {canonicalLink} keywords={'apartment sotogrande, apartment in sotogrande, house sotogrande, house in sotogrande'}/>
            <Banner page={"sotogrande"}/>
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Sotogrande"} description={"Exclusive, scenic and relaxing"} size= {2}/>
                            <p>Nestled within the municipality of San Roque in the province of Cádiz, Sotogrande is one of Spain’s most prestigious and exclusive residential communities. Surrounded by the natural beauty of Andalusia, this serene coastal 
                                enclave offers a perfect balance of tranquillity, sophistication, and accessibility.
                            </p>
                            <p>With a house in Sotogrande, you can wake up to the Mediterranean on one side and rolling hills on the other – a rare harmony of sea and nature. Despite its peaceful atmosphere, Sotogrande is ideally located: just 15 minutes from Gibraltar, 
                                40 minutes from Marbella, and around an hour from Málaga Airport.
                            </p>
                            <p>Sotogrande is divided into several distinct areas – La Reserva, Sotogrande Alto, Sotogrande Costa, and Marina Sotogrande – each offering its own charm, from hillside villas with panoramic views to waterfront apartments overlooking 
                                the marina.
                            </p>
                            <p>The area is world-renowned for its golf courses, including the legendary Valderrama Golf Club, La Reserva, Real Club Sotogrande, and Almenara Golf. Sports enthusiasts can also enjoy padel, tennis, and polo at the famous Ayala Polo Club.</p>
                        </div>
                    </div>
                </div>
            </section>
             <section className="section-th"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/viewsotogrande.webp" fetchpriority="low" alt="viewoversotogrande" className="w-75 rounded d-block d-md-inline mx-auto mx-md-0 mt-4" />
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/sotograndeport.webp" fetchpriority="low" alt="sotograndeport" className="w-75 rounded d-block d-md-inline mx-auto mx-md-0 mt-4" />
                        </div>
                    </div>
                </div>
            </section>
             <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Along the coast, golden sandy beaches stretch for over two kilometres, offering breathtaking views of the Rock of Gibraltar and the coast of Africa. At Trocadero Beach Club you can indulge in water sports, or have a cocktail as the sun sets over the horizon.
                               For a touch of luxury and leisure, La Reserva Club invites you to spend a day at its stunning lagoon, enjoy fine dining, or simply relax in an exclusive Mediterranean setting.</p>
                            <p>The Sotogrande Marina is the social heart of the area, featuring designer boutiques, interior design stores, art galleries, and a selection of top-rated restaurants.
                               Every Sunday, a lively market fills the marina with local products and artisan goods and during the summer months, a charming evening market with food stalls and children’s activities adds to the area’s vibrant atmosphere. </p>
                            <p>Families will find excellent educational options here, including the Sotogrande International School (ages 3–18), which follows the British International Baccalaureate Curriculum, and the smaller International Montessori School, offering the renowned Montessori approach.</p>
                            <p>Sotogrande truly captures the essence of luxurious coastal living – where elegance, comfort, and nature coexist in perfect harmony.</p>
                        </div>
                    </div>
                </div>
            </section>
        
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <FlatList properties={data} />
            )}
            {/* <BestFlatList/> */}
            <Subscribe/>
            {/* <TeamList/> */}
            <References/>
        </React.Fragment>
    )
}

export default Sotogrande;