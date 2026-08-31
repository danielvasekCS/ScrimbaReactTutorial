import './App.css'


import {Header} from "./Components/Header"
import {Entry} from "./Components/Entry"

export function App() {
    return (
        <div className="main-container">
           <Header/>
           <Entry/>
        </div>
    )
}