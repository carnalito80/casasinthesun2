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


const Casares=({version})=>{
    let title = "Casares"
    let description = "Relaxing, historical and amazing views"
    let canonicalLink = 'https://casasinthesun.eu/casares'
    
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
                'fields.city[in]': 'estepona'
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
            <Meta title={title} description={description} absoluteImageUrl = {'https://casasinthesun.eu/img/casares.webp'} canonicalLink = {canonicalLink} keywords={'apartment casares, apartment in casares, house casares, house in casares'}/>
            <Banner page={"casares"}/>
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Casares"} description={"Relaxing, historical and amazing views"} size= {2}/>
                            <p>West of Estepona, about a 20-minute drive away, lies the charming village of Casares – one of Andalusia’s famous pueblos blancos, or white villages. Home to around 4,000 residents, Casares sits about 15 kilometres inland from the coast. 
                                The scenic road up to the village winds through beautiful landscapes, with several small restaurants along the way offering delicious food and stunning views.
                            </p>
                            <p>This picturesque village, with its whitewashed houses and maze of narrow streets, is best explored on foot. In the heart of the village, you’ll find Plaza de España and the lovely San Sebastián Church, dating back to the 17th century. At 
                                the very top of Casares stands Castillo de Casares, a 13th-century fortress that offers breathtaking panoramic views over the mountains and the Mediterranean
                            </p>
                            </div>
                    </div>
                </div>
            </section>
            <section className="section-th"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/casaresstreet.webp" fetchpriority="low" alt="street in casares" className="w-75 rounded mx-auto mt-2rounded mx-auto mt-4" />
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/casaresvillage.webp" fetchpriority="low" alt="casares" className="w-75 rounded mx-auto mt-4" />
                        </div>
                    </div>
                </div>
            </section>
             <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>On Friday mornings, a lively market takes place along Calle Copera, attracting both locals and visitors. The municipality of Casares covers a large area and is a popular destination for hiking, with numerous trails surrounding the village. 
                                The surrounding mountains form the Sierra Crestellina Nature Reserve, home to a wide variety of birds including the impressive Griffon vulture that soars majestically above the hills.
                            </p>
                            <p>Down by the coast, Casares Costa stretches along a long and peaceful shoreline. Here you can enjoy a walk, jog, or bike ride along the promenade, relax on the beach, or visit one of the many seaside chiringuitos for great food and drinks. 
                                The area also offers plenty of opportunities for water sports and boasts several excellent golf courses.</p>
                            <p>Not far from Casares lies another of the white villages, Gaucín known for its charming art galleries and the Michelin-starred restaurant Platero & Co. Continuing further west along the coast, you’ll come across Duquesa, Manilva, and Sotogrande, 
                                before eventually reaching Gibraltar.</p>
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

export default Casares;