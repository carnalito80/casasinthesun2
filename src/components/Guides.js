import GuideItem from "./GuideItem"
import React from "react";
import { useState, useEffect } from "react";
import * as contentful from "contentful";
import Meta from "./Meta/Meta"
import Banner from "./Banner";

const Guides=()=>{
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
            
           await client.withoutUnresolvableLinks.getEntries({content_type: 'guides'})
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
      }, []); // Empty dependency array ensures the effect runs only onc
   

    return (

    <React.Fragment>
        <Meta title='Guides' description='Guides' absoluteImageUrl = {'https://casasinthesun.eu/img/solnedgang.webp'} canonicalLink = 'https://www.casasinthesun.eu/guides' keywords={'guides to spain, living in spain'}/>
        <Banner page={"guides"}/>

        <section className="blog">
            {/* <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Guides</h1>
                            <h2 className="page-description">Here you will find useful guides like how to get a NIE number in Spain, or where to go for dinner in Estepona.</h2>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="page-content">
                <div className="container">
                     {loading ? (
                <p>Loading data...</p>
            ) : (
                
                    <div className="row">
                        {data.map((item, i) => (
                        <GuideItem link={item.fields.slug}  title={item.fields.title} img={item.fields.img.fields.file} datz={item.sys.updatedAt} summary={item.fields.summary} key={i} />
                        ))}
                    </div>
           
            )}
                  
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}

export default Guides