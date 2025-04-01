import Slider from "react-slick";
import Title from "./Title"
import ReferenceItem from "./ReferenceItem"

const References = () => {
    const title = {
        text: "Finally...",
        description: "..some inspiring photos from Andalucia!"
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
                            <ReferenceItem pic={"/img/plazaortiz.webp"} alt={"Plaza Ortiz in Estepona"} />
                            <ReferenceItem pic={"/img/vegetables.webp"} alt={"Vegetables"} />
                            <ReferenceItem pic={"/img/flowerpots.webp"} alt={"Flower pots on the wall"} />
                            <ReferenceItem pic={"/img/cordobaromanbridge.webp"} alt={"The Roman Bridge in Cordoba"} />
                            <ReferenceItem pic={"/img/cadizbeach.webp"} alt={"Beach in Cadiz"} />
                            <ReferenceItem pic={"/img/malaga.webp"} alt={"Malaga"} />   
                            <ReferenceItem pic={"/img/alhambra.webp"} alt={"Alhambra"} />    
                            <ReferenceItem pic={"/img/beachcostadelluz.webp"} alt={"Beach in Costa del Luz"} />
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default References;