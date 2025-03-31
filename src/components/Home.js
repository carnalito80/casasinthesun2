import FlatList from "./FlatList"
import Banner from "./Banner"
// import Info from "./Info"
import References from "./References"
import Subscribe from "./Form/Subscribe"
// import BestFlatList from "./BestFlatList"
import React, { useState, useEffect } from "react"
import * as contentful from "contentful"
import Title from "./Title"
import Meta from "./Meta/Meta"


const Home=()=>{
    // State to store the fetched data

    let title = 'casasinthesun.eu'
    let canonicalLink = 'https://casasinthesun.eu/'

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
            <Banner/>
            <Meta title={"Welcome to the sun in Costa del Sol"} description={'Welcome to Casas in the Sun, your real estate agent on Costa del Sol'} absoluteImageUrl = {canonicalLink + '/img/solnedgang.webp'} canonicalLink = {canonicalLink} />
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Welcome to Casas in the sun"} description={"your real estate agent on Costa del Sol" }size= {2}/>
                            <p>
                            For many people it's a dream to live in Spain, especially on the Costa del Sol. While some seek to make it their permanent residence, others are in search of a holiday retreat. 
                            With around 320 sunny days annually, easy access to the sea and beaches, a pleasant climate, mountains ideal for hiking, and healthy food, it's easy to see why so many people 
                            dream of owning a home on the Costa del Sol. During the winter months, you can even enjoy skiing in nearby locations! Most cities on the Costa del Sol have an airport nearby since you
                            have both Malaga airport and Gibraltar, ensuring convenient travel to your property upon arrival. At Casas in the sun, we are dedicated to helping you discover your ideal home.</p>
                            <p>
                            We provide a diverse selection of property types, including apartments, houses, townhouses, and new developments on the Costa del Sol. We focus on your preferences and needs, 
                            aiming to find the perfect residence just for you. When selecting a property, think about what amenities you want nearby, such as schools, beaches, shops, restaurants and golf courses. 
                            Our agents possess in-depth knowledge of these areas and will guide you in finding the perfect match. We support you throughout the entire process of locating your dream home!
                             </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {loading ? (
                    <p>Loading data...</p>
                ) : (
                    <FlatList properties={data} />
                )}
                {/* <BestFlatList/> */}
            </section>
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Why Costa del Sol and Spain?"} />
                            <p>
                            Spain is an amazing place to call home, and the sun-drenched Costa del Sol makes it even more enchanting. The people are warm and welcoming, frequently exchanging greetings on the streets. 
                            Waking up to the sight of the bright blue sky, sunshine, sea, and mountains instantly boosts your mood and energy. </p>
                            <p>
                            Mastering the language can be a bit challenging, but locals are generally pleased when you make an effort to speak some Spanish. With a little patience, communication usually becomes smoother. 
                            Another challenge is navigating the bureaucracy. Establishing permanent residency requires visits to various offices like the town hall, police station, and social services. Although some 
                            services are available online, they can be difficult to locate and comprehend without good Spanish. Hiring assistance is an option, but you'll still need to have all the necessary 
                            paperwork and information ready for your specific needs which we can help you with.
                             </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-th">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/lionsalhambra.webp" alt="lions at alhambra" className="w-100 rounded mx-auto mt-4" />
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/flowerscordoba.webp" alt="flowers in cordoba" className="w-100 rounded mx-auto mt-4" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Culture and food"} />
                            <p>
                            Andalusia is a treasure of cultural riches. In Seville, you can experience the passion of flamenco dancing. Cordoba is home to the breathtaking Mezquita, renowned for its stunning 
                            architecture featuring red and white patterned arches and columns, along with a serene courtyard filled with orange trees and fountains. Granada captivates with the lush gardens and 
                            palaces of the Alhambra. Around Cadiz, you'll discover gorgeous sandy beaches, and during specific seasons, you can savor freshly caught tuna. Malaga offers a diverse range of museums, 
                            including the Picasso Museum, and a thriving theater scene. For those eager to visit Madrid, high-speed trains from Malaga can take you to the vibrant Spanish capital in approximately 3 hours.
                            </p>
                            <p>
                            The variety of food in Spain is amazing. You can find a wide selection of fresh fish, seafood and meat. Spanish cuisine and various types of tapas are available almost everywhere, but there's also 
                            a broad range of international dishes to enjoy. Additionally, the vegetables and fruits are incredibly delicious.
                             </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-th">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/sunset.webp" alt="sunset at the beach" fetchpriority="low" className="w-100 rounded mx-auto mt-4" />
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/jacaranda1.webp" alt="jacaranda trees" fetchpriority="low" className="w-100 rounded mx-auto mt-4" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={"Activities outside"} />
                            <p>
                            The Costa del Sol is home to a variety of beaches that cater to every taste along its stunning coastline. Whether you're looking for family-friendly spots or locations perfect for young adults 
                            and water sports enthusiasts, you'll find it here. For those in search of luxury and glamour there are several beach clubs in Marbella like Ocean Beach, NOSSO, LUUMA, Nikki Beach and in Estepona
                            you have the newly opened Sublim Beach Club and close by the Alcazaba Lagoon. If you're after a more relaxed and budget-friendly experience, the area offers an abundance of Chiringuitos and beachside restaurants 
                            to enjoy. Additionally, the Atlantic coast is just a short drive away, offering beautiful beaches around Cadiz, Tarifa, El Palmar, Bolonia and Zahar de los Atunes for a perfect day trip.
                            </p>
                            <p>
                            When you're not soaking up the sun, the Costa del Sol offers a wealth of activities, including golf, kitesurfing, padel and hiking through mountains or rivers. If you're visiting in winter, you can hit the 
                            slopes at Sierra Nevada, just an hour's drive from Malaga, where the ski season lasts from December to April. Imagine going to the beach and skii on the same day!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
          
            <Subscribe/>
            {/* <Info/> */}
            <References/>
        </React.Fragment>
    )
}

export default Home;