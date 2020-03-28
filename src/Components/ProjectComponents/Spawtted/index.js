import React from 'react';

import "./style.css";

export default function Spawtted(props) {
    return (
        <div>
            <div id="spawttedCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#spawttedCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#spawttedCarousel" data-slide-to="1"></li>
                    <li data-target="#spawttedCarousel" data-slide-to="2"></li>
                    <li data-target="#spawttedCarousel" data-slide-to="3"></li>
                    <li data-target="#spawttedCarousel" data-slide-to="4"></li>
                    <li data-target="#spawttedCarousel" data-slide-to="5"></li>
                </ol>

                <div className="carousel-inner text-center">

                    <div className="carousel-item active">
                        <img src={require("../../../Images/Spawtted/spawtted_home.png")} alt="artwave login" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Spawtted/listing_one.png")} alt="artwave registration with error" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Spawtted/listing_two.png")} alt="artwave login" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Spawtted/report_lost_pet.png")} alt="artwave registration with error" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Spawtted/report_lost_pet_two.png")} alt="artwave login" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Spawtted/cloudinary.png")} alt="artwave registration with error" />
                    </div>

                    <a className="carousel-control-prev" href="#spawttedCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#spawttedCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </div>

            <hr id="underCarouselRule" />

            <h6 style={{"color": props.themeHex}} >Background</h6>
            <p>
                Spawtted was project #2 in the bootcamp. One of our group members, Monica, was responsible for the idea.
                She wanted to build an application that could help pet owners who had lost their pets to post location based
                information about their pet and that would allow other users to report likely sightings.
            </p>

            <hr />

            <h6 style={{"color": props.themeHex}} >Technologies Used</h6>
            <p>
                For this project we were able to utilize the full stack, employing Node/Express on the backend. We got our first
                taste of HTML templating using Handlebars and used MySQL for our database
            </p>

            <hr />

            <h6 style={{"color": props.themeHex}} >Challenges</h6>
            <p>
                Deployment to Heroku gave us issues - this mostly stemmed from some lagging github merge conflicts
            </p>

            <h6 style={{"color": props.themeHex}} >Lessons Learned</h6>
            <p>
                In the same way that I had some lightbulb moments about JSON during Carpoolify, I'd say my biggest lightbulb moment here
                was getting really comfortable with how data moves between the front and the back end

                The nature of this bootcamp was such that new knowledge and concepts were being introduced at a fairly rapid pace and initially
                the usage of unified data across the full stack had my head spinning slightly - GETS &amp; POSTS &amp; window.reloads &amp; SQL queries &amp; res.json's -
                it was a lot of new information and protocol to be trying to implement into the project without having a confidently concrete
                grasp of it all.

                But there was a moment I distinctly remember when I was working on the new listing JS code where it all kinda just clicked for me and I saw
                what I needed to send to the back from the front, what I needed to send to the database from the back and what I needed to then return to the front
                to display the new information onscreen. It felt as if I was watching the data flow and I could see really clearly what had been a bit murky to me.

            </p>


        </div>
    )
}
