import twitterIcon from "../assets/Twitter Icon.png"
import facebookIcon from "../assets/Facebook Icon.png"
import instagramIcon from "../assets/Instagram Icon.png"
import githubIcon from "../assets/GitHub Icon.png"

export default function Footer() {

    return (
        <div className="footer">
            <img src={twitterIcon}/>
            <img src ={facebookIcon}/>
            <img src ={instagramIcon}/>
            <img src ={githubIcon}/>

        </div>
    )
}