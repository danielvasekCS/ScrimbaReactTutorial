import marker from "../assets/marker.png"


export function Entry(props) {

    console.log(props)
    return (
        <>  
            <div className="entry-and-img">
                <img className="photo" src={props.entry.img.src} alt={props.entry.img.alt}/>
                <div className="info">
                    <div className="location-row">
                        <img className="marker" src={marker}/>
                        <p>{props.entry.country?.toUpperCase()}</p>
                        <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                    </div>

                    <div className="desc-row">
                        <h1>{props.entry.title}</h1>
                        <h2>{props.entry.date}</h2>
                        <p>{props.entry.text}</p>
                    </div>
                </div>

            </div>


        
        </>

    )
}