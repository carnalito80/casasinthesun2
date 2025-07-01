import Sidebar from "./Sidebar";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';
import CategoryList from './CategoryList';

const GuideDetail = (dt) => {
        console.log(dt)
        let data = dt.data.fields
        let sys = dt.data.sys
        
        let html = ""
        if (data.content) html = documentToHtmlString(data.content)
       
        else html = "<p>Property data not found</p>"
    return (
        <div className="container mt-4 mb-4">
           
                
            <div className="blog-detail">
                <img className="w-100" src={data.img.fields.file.url} alt="product" />
                
                    <div className="row">
                    <div className="col-lg-8">
                        <div className="fd-item">
                            <span className="blog-detail-category">GUIDE</span>
                <h1 className="blog-detail-title">{data.title}</h1>
                <span className="blog-detail-date">{sys.updatedAt}</span>
                            <div id="rich-text-body">{parse(html)}</div>
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
                    </div>
                </div>
            </div>
                
           
        </div>
    )
}
export default GuideDetail;