import React from 'react';

import projectJSON from "../projectInfo.js";

const project = projectJSON.artwave;

function Carousel(props) {
    return (
        <div>
            {/* Eventually, this should be props.project.buttonValue */}
            <div id={`${project.buttonValue}Carousel`} class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                    {project.imageLinkArray.map((image, index) => {
                        return <li data-target={`"#${project.buttonValue}Carousel"`} data-slide-to={index} class={index === 0 ? "active" : ""}></li>
                    })}
                </ol>

                <div class="carousel-inner text-center"> 

                    {project.imageLinkArray.map((image, index) => {
                        const imageSrc = require(`${project.imageFilePath}${image.file}`)
                        return (
                            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                {/* This is giving me a 'Module Not Found' error */}
                                <img  src={imageSrc} alt={image.alt}/>
                            </div>
                        );
                    })};

                    <a class="carousel-control-prev" href={`#${project.buttonValue}Carousel`} role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>

                    <a class="carousel-control-next" href={`#${project.buttonValue}Carousel`} role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
            </div>

            <hr id="underCarouselRule" />

        </div>
    )
}

export default Carousel;
