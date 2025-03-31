const Title = (props) => {
    const {title,description, size=2}=props
    return (
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className="title-area text-center">
                    {
                        (() => {
                            if(size===2) {
                                    return (
                                        <h2 className="title">{title}</h2>
                                    )
                                } else if (size===3) {
                                    return (
                                        <h3 className="title-3">{title}</h3>
                                    )
                                } else if (size===4) {
                                    return (
                                        <h4 className="title-4">{title}</h4>
                                    )
                                }
                                else {
                                    return (
                                        <h2 className="title">{title}</h2>
                                    )
                                }
                        })()  
                    }  
                    {/* <h2 className="title">{title}</h2> */}
                    <p className="title-description">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Title