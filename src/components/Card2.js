import React from 'react'

const Card2 = (props) => {

  return (
    <div className="card">
        <div className='card_content'>
            <div className="user_info">
              <img src={props.pp} alt="profile picture" />
              <h2 className='name_title'>{props.name}</h2>
            </div>
            {props.conditionRender ? <p>{props.suscribers}</p> : <div className="controls">
              <button className="mas" onClick={() => props.more()}>MAS</button>
              <button className="menos" onClick={() => props.less()}>MENOS</button>
            </div>}
        </div>
    </div>
  )
}

export default Card2