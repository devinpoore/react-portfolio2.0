import React from 'react';

import "./style.css";

export default function Carpoolify(props) {
    return (
        <div>
            <div id="carpoolifyCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carpoolifyCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carpoolifyCarousel" data-slide-to="1"></li>
                    <li data-target="#carpoolifyCarousel" data-slide-to="2"></li>
                    <li data-target="#carpoolifyCarousel" data-slide-to="3"></li>
                    <li data-target="#carpoolifyCarousel" data-slide-to="4"></li>
                    <li data-target="#carpoolifyCarousel" data-slide-to="5"></li>
                    <li data-target="#carpoolifyCarousel" data-slide-to="6"></li>
                </ol>

                <div className="carousel-inner text-center">

                    <div className="carousel-item active">
                        <img src={require("../../../Images/Carpoolify/CP_login.png")} alt="artwave login" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Carpoolify/CP_register.png")} alt="artwave registration with error" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Carpoolify/CP_register_w_car.png")} alt="artwave login" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Carpoolify/CP_home.png")} alt="artwave registration with error" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Carpoolify/CP_home_wide.png")} alt="artwave login" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Carpoolify/CP_destination.png")} alt="artwave registration with error" />
                    </div>

                    <div className="carousel-item">
                        <img src={require("../../../Images/Carpoolify/CP_routed.png")} alt="artwave registration with error" />
                    </div>

                    <a className="carousel-control-prev" href="#carpoolifyCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carpoolifyCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </div>

            <hr id="underCarouselRule"/>

            <h6 style={{"color": props.themeHex}} >Background</h6>
            <p>
                Carpoolify is the result of the first group project of the UW bootcamp I attended this past summer.
                I worked with 2 other talented developers in the class, <a href="https://www.linkedin.com/in/andrew-joung-4945b313a/" target="_blank" rel="noopener noreferrer">Andrew Joung</a> and <a href="https://www.linkedin.com/in/scott-willis-1b600a178/" target="_blank" rel="noopener noreferrer">Scott Willis</a>, to build this
                application. Independently of each other, Scott and I had both had the idea to try our hand at building a carpool
                app for Project 1 so that's what we decided to do!
            </p>

            <p>
                This project holds a special place in my heart because the day we had to confirm our project idea with our
                instructor, there was a last minute discussion between me and the guys as to whether we'd bitten off more
                than we could chew, but I managed to convince them to stay the course for exactly that reason - we'd
                picked an ambitious idea and that was going to challenge us to rise to the occasion, get creative, and find
                a way to bring it to the finish line.
            </p>

            <p>
                Ultimately, that's what we were able to do and I'm so proud of this project and what my team and I learned
                in the process.
            </p>

            <hr/>

            <h6 style={{"color": props.themeHex}} >Technologies Used</h6>
            <p>
                As a project, Carpoolify doesn't employ any server side programming as, at this point in the class, we hadn't
                yet jumped in to <span className="bold">Node.js</span> or <span className="bold">Express</span>. The lack of a
                unified backend posed some interesting challenges, but it allowed for us to get creative with the tools we did
                have available to us.
            </p>

            <p>    
                We built this application using <span className="bold">HTML</span>, <span className="bold">CSS/Bootstrap</span>, and <span className="bold">Javascript/jQuery</span> and it leverages the Google Maps API
                as well as fuel price and car model datasets. We also used <span className="bold">Google Firebase</span> to store information about user accounts, 
                active carpools, and active passengers.
            </p>

            <hr/>

            <h6 style={{"color": props.themeHex}} >Challenges</h6>
            <p>
                In the absence of other database solutions such as SQL or MongoDB at our disposal during this project, we opted to use
                Google Firebase's realtime database, which proved a bit cumbersome. Perhaps it was a consequence of a relative inexperience
                using databases at that point in the class, but we all found Firebase to be challenging to use - random keys would be
                generated for new JSON data sent to the database so when we wanted to reference that data later, we had to author some pretty
                funky JSON object traversals (grabbing the unknown key using Object.keys) to get what we needed in a usable way. We also learned
                all about the joys of merge conflicts in GitHub.
            </p>

            <p>
                Specifically I had a lot of trouble with the algorithm to match riders with drivers. This was basically an
                issue with having no server from which to make requests to the Maps API. I needed to be able to calculate the driving distance
                between a driver's departure location and a potential passenger to see if said driver should be added to the passenger's
                list of potential pools. AND we had to check if the final destinations of both the driver and passenger were in an acceptable range of one another
                as well.
            </p>

            <p>
                It seemed a fairly simple task and I even scripted the general logic out in advance so that we could just plug it in when we were
                ready to do so, but what seemed like a simple task turned into 5 hours of me battling CORS errors and async complications. I ended
                up trying 3 different ways to structure this algorithm, but still couldn't get it working within the parameters of the Maps API and the constraints of working purely from the front end. At this point, we only had 3 days left on
                the project and without a matching algorithm, there is no carpool application so it was crucial that we solved the issue.
            </p>

            <p>
                I ended up going in to class 2 hours early the following morning to ask my instructor for advice - he pointed me in the right direction
                and I spent the next hour and a half tweaking things and by the time my partners showed up, I'd gotten it working. For the record, I was
                VERY close with the 3rd solution I'd tried the evening before, which I was quite proud of, but the feeling of finally seeing it working
                that morning after so much frustration and dread that our project may be sunk was so energizing.
            </p>

            <hr/>

            <h6 style={{"color": props.themeHex}} >Lessons Learned</h6>
            <p>
                First things first, I grew markedly more comfortable with JSON and the ways it can be utilized within the infrastructure of web
                development by spending so much time in the Maps API studying sample code from Google. I've always found programming to be an
                exercise in being patient enough for the tumblers of the lock to click whenever you encouter new concepts or paradigms. So my
                recognition and understanding of the utility of JSON really solidified over the course of this project.
            </p>

            <p>
                What is perhaps even more special for me though was the commitment to choosing an ambitious goal and just doing what was necessary
                to get things working no matter what. And I'm happy to have had Andrew and Scott with me as they embraced the challenge in equal
                measure.
            </p>

            <hr/>

            <h6 style={{"color": props.themeHex}} >Going Forward</h6>
            <p>
                I plan on adapting the concept of Carpoolify to a full stack application, partially as extra practice, but also because there are
                some unique features we'd discussed including that I think I could now feasibly manage to implement. As progress is made on that front,
                I'll be sure to document that progress here on my portfolio.
            </p>

            <hr/>

            <p>
                Fun fact: The name "Carpoolify" as well as the color scheme for the application was inspired by Spotify
                as my team members and I all shared a common admiration for its design choices and functionality
            </p>

        </div>
    );
}
