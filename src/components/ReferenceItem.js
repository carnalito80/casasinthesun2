const ReferenceItem = (props) => {
    const {pic,alt="alternative"}=props
    return (
        <div>
            <div className="reference">
                <img className="w-100" src={pic} alt={alt} />
            </div>
        </div>
    )
}

export default ReferenceItem;