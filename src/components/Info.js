import Title from "./Title"


const Info = () => {
    const title = {
        text: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit ame"
    }
    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    hepp
                    hepp
                </div>
            </div>
        </section>
    )
}

export default Info;