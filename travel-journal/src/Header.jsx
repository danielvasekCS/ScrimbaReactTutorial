import globe from "./assets/globe.png"


export function Header() {
    return (
        <div className="header-container">
            <img className="globe" src={globe}/>
            <h1>my travel journal.</h1>
        </div>
    )
}