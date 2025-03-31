
import Title from "./Title"
import FlatItem from "./FlatItem"


const FlatList = ({properties}) => {
    console.log(properties)
    // let dummy = {
    //     slug: "lorem-ipsum-222",
    //     title: "Titel",
    //     squareM: 90,
    //     price: 30000,
    //     bedrooms: 3,
    //     bathrooms: 3,
    //     pool: true,
    //     parking: true
    // }
    const title = {
        text: "Properties",
        description: ""
    }
        return (
            <section className="section-all-re">
                <div className="container">
                    <Title title={title.text} description={title.description} />
                    <div className="row">
                        {properties.map((item, i) => (
                        <FlatItem data={item.fields} key={i} />
                        ))}
                    </div>
                    {/* <div className="row">
                        <FlatItem data= {dummy} />
                        <FlatItem data= {dummy} />
                        <FlatItem data= {dummy} />
                        <FlatItem data= {dummy} />
                        <FlatItem data= {dummy} />
                        <FlatItem data= {dummy} />  
                    </div> */}
                </div>
            </section>
        )
}

export default FlatList;