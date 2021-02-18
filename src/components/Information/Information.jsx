import './Information.css';

import React from 'react'

export default function Information() {
    return (
        <div className="information">
            <h1>PASSENGER INFO</h1>

            <div className="user-name">
            <img className="profile-img" src="/thumbnail_image0 copia.jpg" alt="pic profile" />
            <div className="name">
            <h2>Jose B. Ortiz</h2>
            <p className="grey">4 interactions</p>
            </div>
            </div>

            <div className="user-info">
                
                <div className="email">
                    <h3>EMAIL</h3>
                    <p>joseluisblascoortiz@gmail.com</p>
                </div>

                <div className="phone">
                    <h3>PHONE</h3>
                    <p>+34 66-35-37-159</p>
                </div>

                <div className="location">
                    <h3>LOCATION</h3>
                    <p>Barcelona,BCN</p>
                </div>


            </div>
        </div>
    )
}
