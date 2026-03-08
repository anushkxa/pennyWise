function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
    }){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-4 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="div">
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6 p-5">
                    <img src={imageURL}></img>
                </div>
            </div>
        </div>
    )
}

export default RightSection;