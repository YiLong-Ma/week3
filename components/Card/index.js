export default function Card({
    number="",
    firstname = "",
    department ="",
    degree = "none",
    year = "",
    colour = "purple",
    font = 0,
    image = "icon/personTwo.png"
}) {
    return(
        <div style = {{backgroundColor: colour, fontSize: font}}>
            {
                colour === "grey" ? <img src={'icon/person.png'} width="50"/>:
                colour === "lightblue" ? <img src={'icon/personThree.png'} width = "50"/> :
                                    <img src={image} width="50"/>
            }<br />
            <p>
                {number}<br />
            {firstname}<br />
            {department}<br />
            {degree}<br />
            {year}
            </p>
        </div>
    )
}
