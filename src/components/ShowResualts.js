import React from 'react'
import './ShowResualts.css'

const ShowResualts = (props) => {

    return(
        <div className='submodule video'>
            <h2>{props.team}</h2>
            <li>{props.player}</li>
            <li>{props.points}</li>
        </div>
    )
}

export default ShowResualts