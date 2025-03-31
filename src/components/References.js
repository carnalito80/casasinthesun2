import Slider from "react-slick";
import Title from "./Title"
import ReferenceItem from "./ReferenceItem"

const References = () => {
    const title = {
        text: "Till sist...",
        description: "..några bilder från soliga Andalusien att inspireras av. Det ser härligt ut, va?"
    }
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    lazyLoad: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    lazyLoad: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <section className="section-references">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            <ReferenceItem pic={"/img/hibiskus.webp"} alt={"en fin Hibiskus i Estepona"} />
                            <ReferenceItem pic={"/img/sjostjarna.webp"} alt={"sjöstjärna"} />
                            <ReferenceItem pic={"/img/blommor.webp"} alt={"blommor"} />
                            <ReferenceItem pic={"/img/sierranevada.webp"} alt={"sierranevada"} />
                            <ReferenceItem pic={"/img/solnedgang.webp"} alt={"solnedgang"} />
                            <ReferenceItem pic={"/img/castillodesanluis.webp"} alt={"castillodesanluis"} />      
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default References;