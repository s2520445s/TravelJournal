import marker from "../assets/marker.png"

export function Entry(props){
    return(
    <article className="entry1">
         <div className="container"><img src={props.img.src} alt={props.img.alt}className="mount"/></div>
        <div className="title">
            <img src={marker} alt="marker" className="pin"/>
            <span>{props.country}</span>
            <a href={props.googleMapsLink} className="view">
            View on Google Maps</a>
            <h2>{props.title}</h2>
        </div>
        
        <div className="description">
            <span>{props.dates}</span>
            <p>
                {props.text}
            </p>
        </div>
    </article>
    )
}