import GuideItem from "./GuideItem"

const Blog = () => {
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Guides</h1>
                            <h2 className="page-description">Here you will find useful guides like how to get a NIE number in Spain, or where to go for dinner in Estepona.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row"> 
                        <GuideItem link="blog-1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <GuideItem link="blog-2" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <GuideItem link="blog-3" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        {/* <GuideItem link="blog-4" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <GuideItem link="blog-5" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <GuideItem link="blog-6" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <GuideItem link="blog-7" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <GuideItem link="blog-8" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <GuideItem link="blog-9" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog