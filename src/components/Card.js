import React from 'react'
import NumberFormat from "react-number-format";

const Card = (props) => {

  return (
    <div className={`card ${props.cardActive ? "move" : ""}`}>
      <div className='card_content'>
            <div className="user_info">
              {/* <img src={props.pp} alt="profile picture" /> */}
              <div className="bg_pp" 
                style={{ 
                  backgroundImage: `url(${props.pp})` 
                }}>
              </div>
              <h2 className='name_title'>{props.name}</h2>
              <span>Tiene</span>
              {/* {<p>{props.suscribers}</p>} */}
              <NumberFormat className="number_format" thousandsGroupStyle="thousand"
                value={props.suscribers}
                prefix=""
                decimalSeparator="."
                displayType="text"
                type="text"
                thousandSeparator={true}
                allowNegative={false}
                decimalScale={0}
                isNumericString={false} />
              <span>Suscriptores</span>
            </div>
        </div>
    </div>
  )
}

export default Card