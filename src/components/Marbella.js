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


const Marbella=({version})=>{
    let title = "Marbella"
    let description = "Luxury, glamour, nature and family life in Marbella"
    let canonicalLink = 'https://casasinthesun.eu/marbella'
    if (version === "house") {
        title = "Buy property in Marbella"
        description = "We'll help you out, every step of the way."
    }
    else if (version === "apartment") {
        title ="Casas in the sun - apartments in Marbella"
        description = "Welcome to Marbella!"
        canonicalLink = 'https://casasinthesun.eu/apartments-marbella'
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
            <Meta title={title} description={description} absoluteImageUrl = {'https://casasinthesun.eu//img/solnedgang.webp'} canonicalLink = {canonicalLink} keywords={'apartment Marbella, apartments Marbella, house Marbella, flats Marbella'}/>
            <Banner page={"marbella"}/>
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Marbella"} description={"Luxury, glamour, nature and family life in Marbella"} size= {2}/>
                            <p>Marbella located next to the Mediterranean Sea, boasts a pleasent microclimate throughout the year, making it an ideal destination at any time. The city offers a good combination of attractions and activities to suit various interests.
                                In the city center of Marbella you will find the old town or Casco antiguo that is a lovely area where you can walk through narrow streets lined with white houses. There are many shops to visit with local crafts and fashion. You'll find 
                                many restaurants serving both local and international cuisine. Sit down for a while at Plaza de los Naranjos, this charmning square is perfect for people-watching and admiring the beautiful orange trees. Marbella also has many beautiful beaches, 
                                which provide both relaxation and water activities. Luxurious beach clubs offers a glamorous setting for enjoying the sun, sea, and excellent service. The city is home to a various range of restaurants, for all tastes and budgets. 
                                If you are a gourmet you can find four restaurants that have received a Michelin star!
                                Marbella is perfect for outdoor activities since it's good weather almost every day. For example there are numerous hiking trails around Marbella with stunning views of the coast and surrounding landscape. Marbella is also a paradise for 
                                golfer's with several great golf courses. Paddle sports are very popular, with many facilities available for both beginners and experienced players. 
                                The shopping center "La Cañada" offers a comprehensive shopping experience and it's easy to access by bus or car. The center have a variety of shops, restaurants, cafés, a cinema and a bowling alley, you can find entertainment for all ages.
                                </p>
                            <p>Puerto Banus is a part of Marbella that offers a blend of luxuary, relaxation, entertainment, and high-end shopping. Start your day at one of the cafés, where you can enjoy the stunning view of the harbour while enjoying your morning coffee. 
                               In Puerto Banus you find a wide selection of restaurants, offering a variety of cuisines. For those who enjoy a lively nightlife, there are bars and nightclubs where you can dance the night away and enjoy the atmosphere. During the day you can shop 
                               in one of the many designer stores such as Luis Vuitton, Michael Kors, Gucci, Dolce & Gabbana or visit the large department store El Corte Inglés. 
                              </p>
                            <p>The village of Benahavis located about 20 kilometers from Marbella, is a charming and tranquil mountain village between the mountains and lush greenery. Benahavis is famous for its exceptional traditional Andalusian cuisine. The restaurants offers 
                                a wide range of high-quality dishes made with locally grown ingredients. Golfer's find several great golf courses in and around Benahavis, offering stunning views. The village is surrounded by beautiful hiking trails in the mountains perfect for exploring 
                                the natural landscape and enjoying the fresh air. Benahavis is perfect if you want tranquility mixed  with excellent food, scenic views, and plenty of outdoor activities. 
                            </p>
                            <p>Marbella has something for everyone Whether you're looking for a relaxing beaches, an active outdoor adventure, a shopping or dining experience!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            { (version === "apartment" || version === "house") && 
            <section className="section-th"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/apelsintrad.webp" fetchpriority="low" alt="orange tree" className="w-75 rounded mx-auto mt-2rounded mx-auto mt-4" />
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/palmer och hus.webp" fetchpriority="low" alt="palms and houses" className="w-75 rounded mx-auto mt-4" />
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
                             <Title title={"Apartments in Marbella"} size= {3}/>
                            <p>A property in Marbella is a good investment. If you want to have walking distance to a lot of restaurants, shops etc an apartment in the city center is a good option. But it's other good areas too that offers
                            plenty and with a car you can easy reach everything and have more to choose from. You can find a wonderful apartment in Marbella in areas as the cosy town of San Pedro de Alcántara or areas as Nueva Andalucia, Elviria, Puerto Banus
                            or Monte Paraiso. </p>
                           
                           
                        </div>
                    </div>
                </div>    
            </section>
            }
              {version === "house" && 
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                             <Title title={"Houses in Marbella"} size= {3}/>
                            <p>The Marbella area offers a wide variety of properties to suit every taste and lifestyle. Here you can find everything from charming townhouses to modern villas and exclusive luxury estates. 
                                When buying a property in Marbella, it’s worth considering what matters most in your everyday life perhaps proximity to the sea, a golf course, or your children’s school. For families, Marbella 
                                offers a wide selection of both Spanish and international schools. </p>
                            <p>Just a few minutes from Puerto Banús lies Nueva Andalucía a lush, tranquil oasis. This area mixes beautiful golf courses with elegant villas with views of both the sea and the mountains. It has long been a favorite for families 
                                looking for a relaxed yet exclusive lifestyle. In the hills above is La Quinta, an exclusive residential area known for its renowned golf course and peaceful, natural surroundings. From here, you can enjoy breathtaking views of 
                                the Mediterranean and the valley below, the perfect retreat for those looking for serenity and harmony.</p>
                            <p>To the west you find Guadalmina, divided into Alta (upper) and Baja (lower), you’ll find a mix of houses and apartments. Guadalmina Baja is close to the beach and features large villas surrounded 
                                by lush greenery, while Guadalmina Alta offers golf courses, restaurants, and a more laid-back atmosphere. Above Marbella town lies Sierra Blanca, offering panoramic views over both the city and the sea, with the majestic La Concha mountain 
                                as a backdrop. This is one of Marbella’s most prestigious areas, home to villas of the highest standard and exceptional privacy. Nearby Marbella lies Los Monteros, an exclusive and peaceful area where luxury villas and boutique hotels are 
                                tucked among palm trees along the shoreline. This is also where you’ll find the legendary Los Monteros Hotel, an icon of Marbella’s golden era.</p>
                            <p>To the east of Marbella are several popular neighborhoods. Elviria stands out for its natural beauty, pine forests, and golden beaches. It’s home to the famous Nikki Beach Club and offers a wonderful balance between holiday vibes and 
                                comfortable everyday living, ideal for both permanent residents and second-home owners. Further east, Cabopino charms with its small marina, cozy restaurants, and relaxed, almost bohemian atmosphere. The beach at Cabopino is considered one 
                                of the most beautiful along the entire Costa del Sol, with soft sand, natural dunes, and crystal-clear water.</p>
                            <p>Marbella truly offers something for everyone from vibrant city life to peaceful beachside retreats and scenic mountain views. No matter which area you choose, a lifestyle filled with sunshine, culture, and the best of the Mediterranean awaits.</p>
                                
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

export default Marbella;