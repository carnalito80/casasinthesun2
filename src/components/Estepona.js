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


const Estepona=({version})=>{
    let title = "Estepona"
    let description = "The garden of the coast."
    let canonicalLink = 'https://casasinthesun.eu/estepona'
    if (version === "house") {
        title = "Buy housing in Estepona"
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
            <Meta title={title} description={description} absoluteImageUrl = {'https://casasinthesun.eu/img/solnedgang.webp'} canonicalLink = {canonicalLink} keywords={'apartment estepona, apartment in estepona, house estepona, house in estepona'}/>
            <Banner page={"estepona"}/>
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Estepona"} description={"The garden of Costa del Sol"} size= {2}/>
                            <p>Estepona or the Garden of Costa del Sol, has become very popular in recent years. It is a cozy, genuinely Spanish town located about 80 kilometers from Malaga with approximately 70,000 inhabitants. Estepona is 
                                located approximately 80 kilometers from Malaga and 50 kilometers from Gibraltar, so there are two airports within a reasonable distance.</p> 
                                <p>
                                In the old town, you can stroll the narrow streets with white houses on either side. Flowers hang on the walls along most streets, often in the same type of pot throughout the entire street. Here, you will find many cafés, restaurants, bars and shopping opportunities.
                            </p>
                            <p>La Rada is a long sandy beach and stretches through the entire town. Here you can enjoy the a day in the sun, take a walk or jog, work out at one of the outdoor gyms, or grab something to eat or drink at one 
                                of the many Chiringuitos. Here you can also find chess to play and a big playground for children.</p> 
                            <p>During the summer months it's a lot of activity a long the beach walk with festivals, smaller concerts and every evening it's a market
                                here and various entertainments for children. 
                            </p>
                            <p>You can also find Mirador del Carmen a long the beach walk where you can visit an art exhibition in Sala Mirador del Carmen or you can go up to the 12th floor to enjoy a drink in Cielo Skybar or just watch the views.
                               In the harbor, you can see fishing boats, shop at the fish auction on certain days of the week, or simply sit and enjoy a good drink or meal at one of the restaurants or bars.</p> 
                               <p>
                               There is also a market every Sunday where clothes, jewelry, handbags, toys, etc., are sold. Not far from the harbor you find the beach Playa del Cristo that is perfect for families since it is located in a bay and has shallow water.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <BestFlatList /> */}
            {version === "apartment" && 
            <section className="section-th"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/cascoantigou.webp" fetchpriority="low" alt="street in casco antigou" className="w-75 rounded mx-auto mt-2rounded mx-auto mt-4" />
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/plazaantoniaguerrero.webp" fetchpriority="low" alt="plaza antonia guerrero" className="w-75 rounded mx-auto mt-4" />
                         </div>
                    </div>
                </div>
            </section>
            }
            {version === "apartment" && 
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                             <Title title={"Apartment in Estepona"} size= {3}/>
                            <p>Owning a house or an apartment in Estepona means embracing a wonderful small-town lifestyle with sunshine and warmth almost all year round. Life here feels like an endless holiday – with beaches, restaurants and outdoor activities in both the mountains and the sea.</p> 
                            <p>When work or school is done for the day, there’s still time for a swim, a walk on the promenade or a moment in the sun. It’s a truly beautiful way to live.
                            </p>
                            <p>If you want to live in the center, you can find apartments in the old town or Casco Antigou as you say in Spanish and its surroundings. There are also houses available in the old town for those interested in larger accommodations. The harbor area offers many apartments and a lof of 
                                them offers sea views.
                            </p>
                            <p>A fairly new built area with apartments in Estepona is Las Mesas, located on a hill. Nearby, on Calle Francia opposite Lidl, there is a market every Wednesday selling vegetables, fruits, flowers, clothes, handbags, spices etc.</p> 
                            <p>Las Mesas also features a popular gym and many padel courts. Close to Las Mesas is an area called Seghers, where you can find many large houses with gardens.
                            </p>
                            <p>Estepona is a big municipality and outside the main town are a number of beautifully planned residential communities, often known as urbanisations. These gated areas usually feature shared gardens, swimming pools and a relaxed, family-friendly atmosphere. 
                            </p>  
                            <p>Just a short drive from the center lies Valle Romano, surrounded by greenery and located right next to a golf course. It’s an ideal choice for those who want to live close to town while still enjoying nature and tranquility with the golf course quite literally on your doorstep.</p>
                            <p>Further west, the peaceful areas of Buenas Noches and Bahía Dorada offer a serene coastal lifestyle with both houses and apartments close to the beach and sea.</p>
                            <p>Above Estepona town rise the hills and mountains, where you can find plots and villas with breathtaking views of the coastline. It’s a perfect spot for those who value peace, greenery and a sense of escape from the city and traffic.</p>
                            <p>To the east lies Selwo, an area with newer, modern homes and a calm, natural setting. It’s quiet yet conveniently close to both Estepona and Marbella.</p>
                            <p>Nearby is Cancelada, a charming little village with its own selection of restaurants and shops. It’s small, peaceful and perfect for those who want everything within easy reach but prefer a slower pace of life.</p>
                            <p>Between Cancelada and Marbella stretches the New Golden Mile, famous for its luxurious, contemporary homes and prime seaside location. Many properties here enjoy stunning views of the Mediterranean and unforgettable sunsets.</p>
                        </div>
                    </div>
                </div>    
            </section>
            }
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

export default Estepona;