import React from 'react'
import {Router, Link} from "@reach/router"
import './App.css'

import NbaCategories from './components/NbaCategories'
import Stats from "./components/Stats"
import Champs from "./components/Champs"

const App = () => {

    return (
        <div>
            <header>
                <nav className="nav">
                    <Link to="statistikk" id="stats">Statistikk</Link>
                    <Link to="championships" id="champ">Championships</Link>
                </nav>
            </header>

            <Router>
                <Stats path="statistikk"/>
                <Champs path="championships"/>
            </Router>

        </div>

    )
}

export default App;
