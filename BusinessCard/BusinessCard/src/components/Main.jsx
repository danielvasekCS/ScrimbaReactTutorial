import Header from "./Header"
import Footer from "./Footer"

export default function Main() {

    return (
        <main className="main">
            <Header/>
            <div className="content">
                <h2>
                    About
                </h2>
                <p>
                    I am an avid Fullstack Engineer who has created projects like Shazam and a File Proxy.
                    Currently I am working at After8 Sydney which is a tech startup and server as a Control Systems
                    Engineer for AtomCraft.
                </p>

                <h2>
                    Interests
                </h2>
                <p>
                    I love programming cool backend apps, and play video games, going to the gym. I also practice Brazillian Jiu Jitsu and love the occasional beer!
                </p>
            </div>
            <Footer/>
        </main>


    )
}