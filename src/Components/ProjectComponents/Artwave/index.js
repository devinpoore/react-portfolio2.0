import React from "react";

// import Carousel from "../Carousel";

import "./style.css";

export default function Artwave(props) {
    return (
        <div id="artwave">

            <div id="artwaveContent">

                {/* <Carousel /> */}

                <div id="artwaveCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#artwaveCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="1"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="2"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="3"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="4"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="5"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="6"></li>
                    </ol>

                    <div className="carousel-inner text-center">

                        <div className="carousel-item active">
                            <img src={require("../../../Images/Artwave/Artwave_Login.png")} alt="artwave login" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/Artwave_Register_Error.png")} alt="artwave registration with error" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Cinema_Home.png")} alt="artwave login" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Home_w_Rec.png")} alt="artwave registration with error" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Create_List.png")} alt="artwave login" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Add_List.png")} alt="artwave registration with error" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_List_View.png")} alt="artwave registration with error" />
                        </div>

                        <a className="carousel-control-prev" href="#artwaveCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#artwaveCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>

                <hr id="underCarouselRule"/>
                
                <h6 style={{"color": props.themeHex}} >Background</h6>
                <p>
                    In the fall of 2017, I had the idea for a lightweight social media application that would focus, narrowly, upon
                    enabling people to catalogue &amp; interact with their favorite kinds of art - from all mediums - and to recommend certain pieces
                    of this art - movies, books, songs, albums, tv shows, video games, etc - directly to their friends and track that friend's
                    progress experiencing whatever you had recommended to them. Maybe you get an alert when they finish a film you'd been recommending to them
                    for ages so you can react or check in with them and what they thought of it.
                </p>

                <p>
                    I dubbed this idea 'artwave'.
                </p>

                <p>
                    At the time, I lacked sufficient application development knowledge to start building anything in earnest. However, as the final
                    project loomed in the bootcamp I took this past summer, I mentioned the idea to the my partners for the project as we were
                    brainstorming what we wanted to make. They liked it and we agreed to take a stab at building it. And so, the first version of
                    ArtWave was born.
                </p>

                <hr/>

                <h6 style={{"color": props.themeHex}} >Technologies Used</h6>
                <p>
                    Artwave was built with ReactJS, MongoDB, and Node/Express. We also utilized the
                    <a href="https://mdbootstrap.com/" target="_blank" rel="noopener noreferrer"> Material Design for Bootstrap </a>
                    CSS Library (Andrew really preferred this framework over plain Bootstrap)
                </p>

                <hr/>

                <h6 style={{"color": props.themeHex}} >Challenges</h6>
                <p>
                    There were 2 major challenges we faced during the building of Artwave that are worth addressing. The first was simply using React as
                    our main framework for the front end work on the app. At this point, we hadn't spent too much time in class using React and had mostly
                    been introduced to the high level concepts of how to use it.
                </p>
                <p>
                    The second major challenge (and in my opinion, the primary challenge) of the project was the database setup. We knew from the get go
                    that the database schema was going to be fairly complex. We had to track data about user accounts, data about different works of art,
                    and how data about those works of art were related to the lists created by or shared by Artwave users. Our instructor was pretty convinced
                    we needed to use a SQL db (and in retrospect, he was probably right), but it made more sense to my teammates and I at the time to use 
                    MongoDB. We spent about a day and a half designing our schemas before we got going.
                </p>
                
                <hr/>

                <h6 style={{"color": props.themeHex}} >Lessons Learned</h6>
                <p>
                    Prior to this project, I don't think I'd really fancied myself a UX designer - it was a common refrain amongst us: "We're not designers". 
                    However, working with React while using a fairly complicated database schema made me realize that good design is simply good function (a belief solidified by building this portfolio).
                </p>
                <p>
                    In somewhat related fashion, I remember having the salient epiphany that all good projects are good database projects. A good database is like a 
                    good screenplay or blueprint - it is generally the first component required to start meaningfully moving forward on a project, but it also requires a deep consideration
                    of the nature of the final product. Artwave being a relatively complex database project (that needed to be completed relatively quickly), 
                    it became apparent while working on it the ways in which a smartly designed database (and server for that matter) makes project development
                    smoother and front-end prototyping easier as well. I love some good, clean data pipelines. 
                </p>

                <hr/>

                <h6 style={{"color": props.themeHex}} >Going Forward</h6>
                <p>
                    Considering Artwave was an idea I had several years ago and now I've actually helped to build a prototype, I definitely plan to continue tinkering with it
                    and rebuilding certain components and routes and hopefully adding new features to get it more production grade so I can start, at the very least, using it with my
                    friends to track our lists and recommendations to one another.
                </p>

                <p>
                    Artwave was built quite frenetically over a period of 9 days and still lacks some core functionalities, while harboring a number of bugs. 
                </p>

            </div>

        </div>
    );
}
