import React from 'react';

import "./style.css";

export default function Chorechat(props) {
    return (
        <div>

            <div id="chorechatCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#chorechatCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#chorechatCarousel" data-slide-to="1"></li>
                </ol>

                <div className="carousel-inner text-center">

                    <div className="carousel-item active">
                        <img src={require("../../../Images/Chorechat/cc_alert.png")} alt="artwave login" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Chorechat/cc_response.png")} alt="artwave registration with error" />
                    </div>

                    <a className="carousel-control-prev" href="#chorechatCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#chorechatCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </div>

            <hr id="underCarouselRule"/>

            <h6 style={{"color": props.themeHex}} >Background</h6>
            <p>
                I currently live in a house with 3 other roommates and while we are all generally tidy and keep our
                house pretty clean, we've never instituted an official chore duty roster and so there are certainly
                things that have been neglected - grime around the bathroom sink that's allowed to build up a
                bit beyond what's acceptable before someone has the good grace to clean it, crumbs littering the counter around our toaster, etc.
            </p>
            <p>
                I consulted with my roommates and asked them if they'd be interested in an automated chore scheduler with weekly duty
                alerts sent to each person's phone.
            </p>
            <p>
                They said yes. So I built one.
            </p>

            <hr />

            <h6 style={{"color": props.themeHex}} >Project Description</h6>
            <p>
                Compared to the other projects documented here on my portfolio, Chorechat is relatively simple and straightforward.
                It's a purely server based application with no need for a front end. I made use of the Twilio API and found a helpful
                NPM package called 'node-schedule' for scheduling recurring actions (I initally planned on leveraging Moment JS for the
                scheduling stuff, but why not use the tool that's already been built and does exactly what I need it to do??).
            </p>
            <p>
                Information about each chore is just stored in a JSON file in the repo as it's static information that won't change. I
                opted to store roommate info in a simple MongoDB collection (using Mongoose) as there is information associated with each
                roommate that will be frequently changing (their current chore, whether they've completed it or not, potentially
                some kind of points system) and it seemed cleaner to store that info in a database rather than instantiating an object in the
                code itself since all data would be lost if the server ever stopped running and, upon rebooting, it would revert back to the static values
                specified in the object instantiation.
            </p>

            <hr />

            <h6 style={{"color": props.themeHex}} >Lessons Learned</h6>
            <p>
                Reading through the Twilio documentation, I discovered their recommendation to make use of <a href="https://https://ngrok.com/">ngrok.com</a> to help
                with local testing as it redirects Twilio's webhook from a live ngrok URL to your machine's local server.
                A really cool and super helpful tool for testing out your messaging protocols.
            </p>

        </div>
    )
}
