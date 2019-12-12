import React from 'react'


const ShowResualts = (props) => {

    return (
        <div className='main video'>
            <h2>{props.team}</h2>
            <li>{props.player}</li>
            <li>{props.points}</li>
        </div>
    )
}

export default ShowResualts