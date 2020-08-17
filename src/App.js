import React from 'react';

// import './App.css';
import './app_darkmode.css';

// Import PROJECT Components
import Artwave from "./Components/ProjectComponents/Artwave";
import Artwave2 from "./Components/ProjectComponents/Artwave2";
import Carpoolify from "./Components/ProjectComponents/Carpoolify";
import Spawtted from "./Components/ProjectComponents/Spawtted";
import Chorechat from "./Components/ProjectComponents/Chorechat";
import Portfolio from "./Components/ProjectComponents/Portfolio";
import SpotifyMigrate from "./Components/ProjectComponents/SpotifyMigrate";

// Import BIO Components
// import FullBio from "./Components/FullBio";
import ShortBio from "./Components/ShortBio";

// Other Components
import ContactModal from "./Components/ContactModal";
import TitleLinks from "./Components/ProjectComponents/TitleLinks";

// Files

import pdf from "./files/DevinPooreResume-2.20.20.pdf";

// Project Info object
import projectInfo from "./Components/ProjectComponents/projectInfo.js";

class App extends React.Component {
  state = {
    selected: "spotify_migrate",
    bio: "short",
    projectInfo,
    buttonInfo: []
  }

  // componentDidMount = () => {
  //   const buttonInfo = [];
  //   const projectInfo = require("./Components/ProjectComponents/projectInfo.json");
  //   for (let project in projectInfo) {
  //     buttonInfo.push({
  //       id: project.buttonId,
  //       value: project.buttonValue,
  //       text: project.title
  //     });
  //   }
  //   console.log(buttonInfo);
  //   this.setState({ buttonInfo, projectInfo });
  // }

  projectTabClicked = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({
      selected: event.target.value
    });
  }

  toggleBio = (event) => {
    event.preventDefault();
    this.setState({
      bio: event.target.value
    });
  }

  determineProjectComponent = () => {
    const project = this.state.selected;

    if (project === "artwave") {
      return <Artwave themeHex={this.state.projectInfo[this.state.selected].hexCode}/>
    } else if (project === "artwave2") {
      return <Artwave2 themeHex={this.state.projectInfo[this.state.selected].hexCode}/>
    } else if (project === "carpoolify") {
      return <Carpoolify themeHex={this.state.projectInfo[this.state.selected].hexCode}/>
    } else if (project === "spawtted") {
      return <Spawtted themeHex={this.state.projectInfo[this.state.selected].hexCode}/>
    } else if (project === "chorechat") {
      return <Chorechat themeHex={this.state.projectInfo[this.state.selected].hexCode}/>
    } else if (project === "portfolio") {
      return <Portfolio themeHex={this.state.projectInfo[this.state.selected].hexCode}/>
    } else if (project === "spotify_migrate") {
      return <SpotifyMigrate themeHex={this.state.projectInfo[this.state.selected].hexCode}/>
    }
  }

  render() {
    return (
      <div className="container">
        {/* <hr id="topHr" /> */}
        
        <header>
          <h1>devin poore / portfolio</h1>
        </header>

        {/* <hr /> */}

        <div className="row">

          <div id="projectButtons" className="col-lg-2">
            <h4 id="projectsHeader">projects</h4>
            {/* <hr /> */}

            {/* {this.state.buttonInfo.map(button => {
              return <button id={button.id} className="btn btn-md" onClick={this.projectTabClicked} value={button.value}>{button.text}</button>
            })} */}

            <div id="projectBtnDiv">
              <button id="sm" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="spotify_migrate">spotify_Migrate</button>
              <button id="aw" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="artwave">artwave</button>
              {/* <button id="aw2" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="artwave2">artwave 2.0</button> */}
              <button id="cc" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="chorechat">chorechat</button>
              {/* <button id="pf" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="portfolio">portfolio</button> */}
              <button id="cp" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="carpoolify">carpoolify</button>
              {/* <button id="cp2" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="carpoolify2">carpoolify 2.0</button> */}
              <button id="spawtted" className="btn btn-md btn-block project-btn" onClick={this.projectTabClicked} value="spawtted">spawtted</button>
            </div>


          </div>

          {/* PROJECTS */}
          {/* This should be a ternary depending on whether the sidebar 'about' is showing */}
          <div id="projectDesc" className="col-lg-6" style={{ borderTop: "1px solid " + this.state.projectInfo[this.state.selected].hexCode }}>
            <TitleLinks projectObj={this.state.projectInfo[this.state.selected]} />
            <div id="projectContent">
              {this.determineProjectComponent()}
            </div>
          </div>


          {/* ABOUT */}
          {/* TODO: This portion needs some div refactoring - CSS in general needs to be cleaned up */}
          <div id="about" className="col-lg-4">
            <div id="insideAbout">

              <h4 id="aboutTitle">about me</h4>

              <div id="aboutLinkIcons">
                <a title="View/Download Resume" href={pdf} target="_blank" rel="noopener noreferrer">
                  <i className="personalLink fas fa-file"></i>
                </a>

                <a title="My Github" href="https://github.com/devinpoore" target="_blank" rel="noopener noreferrer">
                  <i className="personalLink fab fa-github"></i>
                </a>

                <a title="My LinkedIn" href="https://www.linkedin.com/in/devinpoore" target="_blank" rel="noopener noreferrer">
                  <i className="personalLink fab fa-linkedin"></i>
                </a>
              </div>

              {/* <hr /> */}

              {/* <div className="row bioButtons">

                <div className="col-md-6">
                  <button className="btn btn-md btn-block bioBtn" value="short" onClick={this.toggleBio}>Elevator Pitch</button>
                </div>

                <div className="col-md-6">
                  <button className="btn btn-md btn-block bioBtn" value="full" onClick={this.toggleBio}>Full Bio</button>
                </div>

              </div> */}

              {/* <hr /> */}

              <div id="insideAbout2">

                <div id="aboutText">
                  {/* {this.state.bio === "short" ? <ShortBio /> : <FullBio />} */}
                  <ShortBio />
                </div>

              </div>

            </div>
            <button id="contactBtn" className="btn btn-md btn-block" data-toggle="modal" data-target="#contactModal">Contact Me</button>
          </div>

        </div>

        {/* <hr /> */}

        <footer>
            <p id="code-poet-sig">
              Designed, developed, and maintained with
              <span role="img" aria-label="heart emoji"> 💗</span> by
              <span id="cps"> Code Poet Studios</span> (that's me!)
              | Copyright © 2020
            </p>            
          </footer>

        <ContactModal />

      </div>
    );
  }
}

export default App;
