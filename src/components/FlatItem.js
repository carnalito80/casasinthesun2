import { Link } from "react-router-dom";
import Price from './Price'

const FlatItem = ({data}) => {

    let image = { src: "/img/product1.webp", alt: "Bild" }
    const destination = {
        pathname: `/properties/${data.slug}`,
        state: {...data},
      };
   
    if (data && data.featuredImage) {
        //console.log(data.featuredImage)
        image.src = data.featuredImage.fields.file.url + "?fm=webp&w=496"
        if (data.featuredImage.fields.file.title) image.alt = data.featuredImage.fields.file.title
    }
    else if (data && data.photos) {
        image.src = data.photos[0].fields.file.url + "?fm=webp&w=496"
        if (data.photos[0].fields.file.title) image.alt = data.photos[0].fields.file.title
    }
    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <Link to={destination}  className="item-title">
                <div className="item">
                    <div className="item-image">
                        <img className="best-estate-img" src={image.src} alt={image.alt} />
                        {/* <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div> */}
                    </div>
                    <div className="item-description">
                        <div className="d-flex justify-content-between mb-3">
                            <span className="item-title pe-2">{data.title}</span>
                            <span className="item-price"><Price price={data.price}/></span>
                        </div>
                        <div className="item-icon d-flex alig-items-center justify-content-between">
                            <div>
                                <i className="fas fa-ruler"></i> <span>&nbsp; {data.squareM}  m²</span>
                            </div>
                            <div>
                                <i className="fas fa-bed"></i> <span>&nbsp; {data.bedrooms}</span>
                            </div>
                            <div>
                                <i className="fas fa-bath"></i> <span>&nbsp; {data.bathrooms}</span>
                            </div>
                            
                            {data.pool ? (
                                <div>
                                    <i className="fas fa-swimming-pool"></i><span></span>
                                </div>
                            ) : (
                                <span></span>
                            )}
                            {data.parking ? (
                                <div>
                                    <i className="fas fa-parking"></i><span></span>
                                </div>
                            ) : (
                                <span></span>
                            )}                
                            {/* <Link to={destination}  className="item-title">
                                <button className="btn btn-detail">View</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
   
}

export default FlatItem