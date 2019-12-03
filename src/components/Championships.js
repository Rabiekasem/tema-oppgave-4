import React, {useState} from 'react'
import Tittles from '../Data-base/tittles'
import ChampionshipsResualts from './ChampionshipsResualts'
import './NbaCategories.css'

const Championships = () => {
    const [tittle,setNba] = useState(Tittles.trophys)
    const filterNba2 = (e) => {
        setNba(Tittles.trophys.filter(tittle => tittle.team.toLocaleLowerCase().includes(e.target.value)))
    }

    return (
        <div className='main div statistikk'>
            <div className="nba-players">
                <h1 id="heading2">NBA Championships</h1>
                <input type="text" placeholder="Search after championships" onInput={filterNba2}/>

                <div className="videos">
                    {tittle.map(ring =>
                    <ChampionshipsResualts
                    team={ring.team}
                    championships={ring.championships} />)
}
                </div>
            </div>

            <div className="nba">
                <img src={require("../image/nba-2.png")}/>
            </div>
        </div>
    )
}

export default Championships