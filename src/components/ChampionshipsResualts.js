import React from 'react'
import './ShowResualts.css'

const ChampionshipsResualts = (props) => {

    return(
        <div className='main video'>
            <h2>{props.team}</h2>
            <li>{props.championships}</li>
        </div>
    )
}

export default ChampionshipsResualts