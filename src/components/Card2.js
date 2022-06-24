import React from 'react'
import AnimatedNumbers from "react-animated-numbers";


const Card2 = (props) => {

  return (
    <div className={`card ${props.cardActive ? "move" : ""}`}>
        <div className='card_content'>
            <div className="user_info">
              <div className="bg_pp" style={{ 
      backgroundImage: `url(${props.pp})` 
    }}></div>
              {/* <img src={props.pp} alt="profile picture" /> */}
              <h2 className='name_title'>{props.name}</h2>
            </div>
            {props.conditionRender ? <div className='user2'>
              <span>Tiene</span>
              {/* <NumberFormat className="number_format" thousandsGroupStyle="thousand"
                value={props.suscribers}
                prefix=""
                decimalSeparator="."
                displayType="text"
                type="text"
                thousandSeparator={true}
                allowNegative={false}
                decimalScale={0}
                isNumericString={false} 
                /> */}

                  <AnimatedNumbers
                        includeComma
                        animateToNumber={props.suscribers}
                        fontStyle={{ fontSize: 40, fontWeight: 'bold'}}
                        configs={[
                          { mass: 1, tension: 220, friction: 50 },
                          // { mass: 1, tension: 180, friction: 130 },
                          // { mass: 1, tension: 280, friction: 90 },
                          // { mass: 1, tension: 180, friction: 135 },
                          // { mass: 1, tension: 260, friction: 100 },
                          // { mass: 1, tension: 210, friction: 180 },
                        ]}
                  ></AnimatedNumbers>
                <span>Suscriptores</span>
              </div> : <div className="controls">
              <button className="mas" onClick={() => props.more()}>MAS</button>
              <button className="menos" onClick={() => props.less()}>MENOS</button>
            </div>}
        </div>
    </div>
  )
}

export default Card2