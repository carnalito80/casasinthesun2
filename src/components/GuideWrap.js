import React from "react";

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as contentful from "contentful";
import GuideDetail from "./GuideDetail"
import Notfound from "./Notfound";


const GuideWrap = (path) => {
    const theslug = path.location.pathname.replace("/guides/","")
    // State to store the fetched data
    const [dt, setData] = useState(null); // the listing
    const [top3, setTop3] = useState(null); // the top3 links

    // State to track if the data is still loading
    const [loading, setLoading] = useState(true);
    const [loading_top3, setLoadingTopThree] = useState(true);

    const location = useLocation();
    const data = location.state;
   
        useEffect(() => {
            console.log(data)
            const fetchTop3Listings = async () => {
              try {
                const client = contentful.createClient({
                    space: 'cx70k9zsq5af',
                    environment: 'master', // defaults to 'master' if not set
                    accessToken: 'F2kMyptLDLJVSZnnmNilbGhjaos8o6eY12pIHBiXlzc'
                  })
                  setLoadingTopThree(true)      
                await client.withoutUnresolvableLinks.getEntries(
                {content_type: 'realEstateProperty',
                limit: 3,}
                )
                .then(
                (entries) => {
                    let thetop3 = []
                    for (let i = 0; i < entries.items.length ; i++) {
                      let d = entries.items[i].fields
                      let img 
                      if (d.featuredImage && d.featuredImage.fields.file.url) img = d.featuredImage.fields.file.url + "?fm=webp&w=92"
                      else if (d.photos) img = d.photos[0].fields.file.url+ "?fm=webp&w=92"
                      else img = "/img/product1.jpeg"
                      thetop3.push( {title : entries.items[i].fields.title, url: "/properties/" + entries.items[i].fields.slug, img : img })
                    }
                    // Store the data in state
                    console.log(thetop3)
                    setTop3(thetop3)
                })
              } catch (error) {
                console.error('Error fetching data:', error);
              }
              setLoadingTopThree(false);
            }
            fetchTop3Listings();
            if (data) {
                setData(data)
                setLoading(false)
            }
            else {
            // Fetch data from API 
            const fetchData = async () => {
              try {
                const client = contentful.createClient({
                    space: 'cx70k9zsq5af',
                    environment: 'master', // defaults to 'master' if not set
                    accessToken: 'F2kMyptLDLJVSZnnmNilbGhjaos8o6eY12pIHBiXlzc'
                  })
                  setLoading(true)      
               await client.withoutUnresolvableLinks.getEntries(
                {content_type: 'guides',
                    'fields.slug[match]': theslug,}
               )
                    .then(
                        (entry) => {
                           
                            if (entry.items.length === 0) {
                              throw new Error({name: "Error", message: "guide not found"});
                            }
                            console.log(entry.items[0]) //should just be one result as slug in unique
                            // Store the data in state
                            setData(entry.items[0])
                            setLoading(false); // Set loading to false once data is fetched
                        }
                    )
                    .catch(console.error)
              } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
              }
            };
            
            fetchData();
           
           
            console.log(loading)
            }
          }, []); // Empty dependency array ensures the effect runs only once

   

    return (
        <main className="property">
          
        {!loading ? dt ? (
          <GuideDetail data = {dt} loadingTopThree = {loading_top3} top3 = {top3}/>
        // <PropertyDetails data = {dt} loadingTopThree = {loading_top3} top3 = {top3}/>
         ) : (
            <Notfound />
        ) : (<div>Loading</div>)}                

        </main>
    )
}

export default GuideWrap