import {Link} from "react-router-dom"
const BestFlatItem = ({flatState}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="//images.ctfassets.net/cx70k9zsq5af/77BhuOco8OirPXr2fg1kX9/6c1887f6e12e71e42c85e005389ec5db/epXEUrVLqfm8KeIGW6Gtyd4X9WtesmbarqgtpYtucc03N0h3qRTdnTxztHxQVElZuCCOTlqof6zHQwFaHTtMax1i1h1ZQRjjrw--.webp?fm=webp&w=496" alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">Lorem Ipsum</Link></h4>
                    <span><Link to="/">Lorem Ipsum</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>3 Beds</span>
                        </div>
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>2 Bathrooms</span>
                        </div>
                    </div>
                    <h5 className="best-estate-price">$650</h5>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem