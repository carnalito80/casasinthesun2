import banner3 from "../img/banner3.jpg"
import { Link } from "react-router-dom";
const Notfound = () => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner3})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Welcome to Casas in the Sun</p>
                                <h2 className="mt-2 mb-4 banner-title"><strong> Your real-estate agent in Andalucia</strong> </h2>
                               
                                    <h3>The page you're looking for doesn't exist :(</h3>
                                    <p>But you're in luck, we have plenty of interesting pages like <Link to="/estepona">partments in Estepona</Link> or <Link to="/housing-malaga">housing in Malaga</Link> to have a look at. </p>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notfound