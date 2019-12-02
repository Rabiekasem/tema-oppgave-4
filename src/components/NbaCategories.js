import React, {useState} from 'react'
import Nba from '../Data-base/data-base'
import ShowResualts from './ShowResualts'
import './NbaCategories.css'

const NbaCategories = () => {
    const [nba, setNba] = useState(Nba.players)
    const filterNba = (e) => {
        setNba(
            Nba.players.filter( 
                nba => nba.team.toLocaleLowerCase().includes(e.target.value) )
        )
    }
    return(
        <div className='submodule local-json statistikk'>
            <div className="nba-players">
               <h1 id="heading">NBA statistikk of all time</h1>
               <input type="text" placeholder="Search after Team" onInput={filterNba} />
               
               <div className="videos">
                  {
                      nba.map(
                      eachObject => <ShowResualts 
                              team={eachObject.team}
                              player={eachObject.player}
                              points={eachObject.points}
                      />
                      )
                  }
                </div>
            </div>
            
            <div className="nba">
              <img src={require("../image/nba-2.png")} />
            </div>
        </div>
    )
}

export default NbaCategories