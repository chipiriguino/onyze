import './Pay.css';

import React from 'react'

export default function Pay() {
    return (
        <div className="pay">

            <div className="hidden">
                <h2>Hide information</h2>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="pay-cards-container">
             <div className="payment-cards saved">
        <i className="icon-close"></i>
        <img className="card-image" src="/PayPal.png" alt="paypal" />
  </div>

  <div className="payment-cards saved">
        <i className="icon-close"></i>
        <img className="card-image" src="/VISA.png" alt="Visa" />
  </div>
</div>

<div className="pay-cards-container">
             <div className="payment-cards saved">
        <i className="icon-close"></i>
        <img className="card-image" src="/MC.png" width="100" height="100" alt="MC" />
  </div>

  <div className="payment-cards saved">
        <i className="icon-close"></i>
        <img className="card-image" src="/apple.png" alt="Apple pay" />
  </div>
</div>
        </div>
    )
}
