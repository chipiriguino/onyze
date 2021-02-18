import './InfoPay.css';

import React from 'react'

export default function InfoPay() {
    return (
        <div>

            <div className="check-body">
                <div className="align-check">
            <img className="border-img" src="/check.png" alt="check" width="30" height="30" />
            <h5>Jackson Heights</h5>
            <h3 className="street">34-27 74th street</h3>
            </div>
            <img className="line" src="/line.png" alt="line" width="370" height="30" />
            <div>
            <img className="border-img-maps" src="/maps.png" alt="maps" width="30" height="30" />
            <h5>Greenpoint</h5>
            <h3 className="street">81 Gate St Brooklyn</h3>
            </div>
            </div>
            <hr></hr>
            <div className="align-km">
                <div>
                <h5>12.3 km</h5>
            <h3 className="street">Distance</h3>
                </div>
                <div>
                <h5>42 min</h5>
            <h3 className="street">Price</h3>
                </div>
                <div>
                <h5>$34.20</h5>
            <h3 className="street">Time</h3>
                </div>
                <div>
                <h5>12.4 kWh</h5>
            <h3 className="street">Energy</h3>
                </div>
            </div>
        </div>
    )
}
