import globe from "../assets/globe.png"

export function Header(){
    return(
    <>
        <header className="header">
        <img src={globe} alt="globe"className="globe"/>
        <p>
            my travel journal.
        </p>
        </header>
    </>
    )
}