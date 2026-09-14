import marker from "../assets/marker.png"


export function Entry(prop) {


    return (
        <>  
            <div className="entry-and-img">
                <img className="photo" src={prop.img.src} alt={prop.img.alt}/>
                <div className="info">
                    <div className="location-row">
                        <img className="marker" src={marker}/>
                        <p>{prop.country?.toUpperCase()}</p>
                        <a href={prop.googleMapsLink}>View on Google Maps</a>
                    </div>

                    <div className="desc-row">
                        <h1>{prop.title}</h1>
                        <h2>{prop.date}</h2>
                        <p>{prop.text}</p>
                    </div>
                </div>

            </div>


        
        </>

    )
}