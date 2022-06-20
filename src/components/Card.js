import React from 'react'
import NumberFormat from "react-number-format";

const Card = (props) => {

  console.log(typeof(props.suscribers));

  return (
    <div className="card">
      <div className='card_content'>
            <div className="user_info">
              <img src={props.pp} alt="profile picture" />
              <h2 className='name_title'>{props.name}</h2>
              <span>Tiene</span>
              {/* {<p>{props.suscribers}</p>} */}
              <NumberFormat thousandsGroupStyle="thousand"
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