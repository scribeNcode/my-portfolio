import "../Components/HeroStyle.css"

function HeroImg(prop){
    return(
        <div className="hero-img">
            <div className="heading">
                <h1>{prop.heading}</h1>
                <p>{prop.text}</p>
            </div>
            
        </div>
     )
}

export default HeroImg;