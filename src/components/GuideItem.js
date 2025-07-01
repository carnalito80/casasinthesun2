import {Link} from "react-router-dom"

const GuideItem = ({title,link,img,datz, summary}) => {
    console.log(img)
     img.src = img.url + "?fm=webp&w=496"
     let date = new Date(datz).toISOString().substring(0, 10);
    return (
        <div className="col-lg-4">
            <div className="blog-item">
                <div className="blog-img">
                    <img src={img.src} alt={title} className="" />
                </div>
                <div className="blog-content">
                    <h2 className="blog-title"><Link to={`/guides/${link}`}>{title}</Link></h2>
                    <div className="blog-info">
                        <div className="blog-info-item"><i className="far fa-calendar-alt "></i><span>{date}</span></div>
                        {/* <div className="blog-info-item"><i className="far fa-comments"></i><span>0 Comments</span></div> */}
                    </div>
                    <div className="blog-text">
                    { summary }
                                </div>
                </div>
            </div>
        </div>
    )
}

export default GuideItem