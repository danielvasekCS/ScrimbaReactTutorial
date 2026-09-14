import './App.css'


import {Header} from "./Components/Header"
import {Entry} from "./Components/Entry"
import data from "../data.js"
// //                src: entry.img.src,
//                 alt: entry.img.alt
//             }}
//             title={entry.title}
//             country={entry.country}
//             googleMapsLink={entry.googleMapsLink}
//             date={entry.date}
//             text={entry.text}
//             />

export function App() {
    const dataElements = data.map((entry) => {
            return (
                <Entry
                    key={entry.id}
                    entry={entry}
                />
            )
    })


    return (
        <div className="main-container">
           <Header 
           />
            {dataElements}
        </div>
    )
}