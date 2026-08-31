import vector from "../assets/Vector.png"
import mail from "../assets/Mail.png"
import me from "../assets/image.jpeg"

export default function Header() {

    return (
        <div className="header">
            <img className="My-Photo" src={me}/>
                <h1>Daniel Vasek</h1>
                <h2>FullStack Developer</h2>
            
            <div className="mail-vector-containers">

                <div class="mail-container">
                    <img src={mail}/>
                    <p>Email</p>
                </div>
                
                <div class="vector-container">
                    <img src={vector}/>
                    <p>Linkedin</p>
                </div>

            </div>

        </div>
    )
}