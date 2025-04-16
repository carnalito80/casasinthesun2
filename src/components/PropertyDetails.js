import Price from './Price';
import ImageGallery from 'react-image-gallery';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';
import CategoryList from './CategoryList';
import FormSimpleAjax from './Form/FormSimpleAjax'
import Meta from './Meta/Meta';
// import ReactDOM from 'react-dom';

const PropertyDetails = (dt) => {
  
    let data = dt.data
    let html = ""
    if (data.datadescription) html = documentToHtmlString(data.datadescription)
    else if (data.scrapedString) html = data.scrapedString
    else html = "<p>Property data not found</p>"
       
    let images = imgArray(data);
    let city = ""
    if (data.city && data.city.length) { city = data.city[0].toString();
    city = city[0].toUpperCase() + city.slice(1);
    }

    return (
        <div className="flat-detail">
            <Meta title={data.title} absoluteImageUrl = {images[0].original} canonicalLink = {`https://casainthesun.eu/properties/${data.slug}`} />
                      
            {/* <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">DETALJER</h1>
                            <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* {loading ? (
                          <div id="loader-wrapper">
                            <div className="loader" id="loader"></div>
                          </div>
                        ) : (
                            <span></span>
                        )}                
             */}
            
            <div className="container mt-3 mb-3">
                <div className="row ">
                    {/* <div className="col-lg-12"> */}
                        {/* <div className="fd-top flat-detail-content"> */}
                            <div className="col-lg-8 pb-1">
                                <h3 className="flat-detail-title">{data.title}</h3>
                                {city ===! 'Unknown' &&
                                <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                                {city}</p>
                                }
                            </div>
                        <div className="col-lg-4 pb-2">
                            <span className="fd-price">
                                { data.available === true ?
                                <Price price={data.price}/> :
                                <span>
                                <Price price={data.price}/> (Sold)</span>
                            }
                                </span>
                        </div>
                        {/* </div> */}
                        <ImageGallery flickThreshold={0.50} originalHeight={831} slideDuration={500} items={images} showNav={true} showFullscreenButton={false} showPlayButton={false} loading='lazy' lazyLoad={true} onErrorImageURL='/img/banner.jpg'/>
                    {/* </div>  */}
                </div>
                <div className="row">
                            <div className="col-lg-8">
                                <div className="fd-item">
                                    <h4>Description</h4>
                                   <div id="rich-text-body">{parse(html)}</div>
                                   { data.available === false && <h4> This property has been sold</h4>}
                                </div>
                                <div className="fd-item fd-property-detail">
                                    <h4>Details</h4>
                                   
                                    <div className="row">
                                        <div className="col-lg-4">
                                            {city && city !== "Unknown" ? (
                                             <div>
                                                <span>Area:&nbsp; {city}</span>
                                            </div>
                                            ) : (
                                                <span></span>
                                            )}                
                                        </div>
                                        <div className="col-lg-4">
                                            {data.squareM > 0 ? (
                                             <div>
                                                <span>Size:&nbsp; {data.squareM}&nbsp;m²</span>
                                            </div>
                                            ) : (
                                                <span></span>
                                            )}                
                                        </div>
                                        <div className="col-lg-4">
                                           
                                        {data.type ? (
                                            <div>
                                                <span>Type:&nbsp; {data.type}</span>
                                            </div>
                                            ) : (
                                                <span></span>
                                            )}  
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                       
                                        <div className="col-lg-4">
                                           
                                        {data.bedrooms > 0 ? (
                                            <div>
                                                <span>Bedrooms:&nbsp; {data.bedrooms}</span>
                                            </div>
                                            ) : (
                                                <span></span>
                                            )}  
                                        </div>
                                        <div className="col-lg-4">
                                        {data.bathrooms > 0 ? (
                                            <div>
                                                <span>Bathrooms:&nbsp; {data.bathrooms}</span>
                                            </div>
                                            ) : (
                                                <span></span>
                                            )}  
                                        </div>
                                        <div className="col-lg-4">
                                            {data.parking ? (
                                             <div>
                                                <span>Parking:&nbsp; <span className="check">&#x2714;</span></span>
                                            </div>
                                            ) : (
                                                <span></span>
                                            )}                
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                        {data.pool ? (
                                             <div>
                                                <span>Pool:&nbsp; <span className="check">&#x2714;</span></span>
                                            </div>
                                            ) : (
                                                <span></span>
                                            )}       
                                        </div>
                                        <div className="col-lg-4">
                                           
                                        </div>
                                        <div className="col-lg-4">
                                          
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="fd-item fd-features">
                                    <h4>Features</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check"></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check"></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="fd-item">
                                    <h4>Maps</h4>
                                    <iframe title="This is a unique title"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str" width="100%" height="450" loading="lazy"></iframe>
                                </div> */}
                                <div className="fd-item">
                                    <h4>Interested?</h4>
                                    <FormSimpleAjax mode={"flat"} flat={data.title} formMessage={"...why not send us a message, and we'll contact you shortly."} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                            {!dt.loadingTopThree && dt.top3 ? (
                                <div className="fd-sidebar-item">
                                    <h4>Latest additions</h4>
                                    {dt.top3.map((item, i) => (
                                        <div key={i} id={i} className="recently-item">
                                            <a href={item.url}>
                                                <img src={item.img} alt="detail" width="50px" />
                                                <span>{item.title} </span>
                                            </a>  
                                        </div>
                                    ))}
                                </div>
                                ) : (
                                <div className="fd-sidebar-item">
                                    <h4>Loading..</h4>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Loading..</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Loading..</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Loading..</span>
                                    </div>
                                </div>
                                )}                

                              
                                <CategoryList />
                                {/* <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </div>
        //     </div>
        // </div>
    )
    function imgArray(d) {
        let r = [];
        if (d.featuredImage && d.featuredImage.fields.file.url) r.push({original: d.featuredImage.fields.file.url + "?fm=webp&h=831", thumbnail: d.featuredImage.fields.file.url+ "?fm=webp&w=92"})
        if (d.photos) {
            
            for (let x=0; x < d.photos.length; x++) {
                r.push({original: d.photos[x].fields.file.url + "?fm=webp&h=831", thumbnail: d.photos[x].fields.file.url+ "?fm=webp&w=92"})

            }
        }
        return r
    }
}

export default PropertyDetails;