// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css'
import SchedulePage from './SchedulePage.js'
var LandingPage = React.createClass({
    render() {
        return(
            <div>
                <div className="container" id="header">
                    <h1>THIS IS THE BANNER</h1>
                </div>
                <div className="container" id="profilePic">
                    <img src="./imgs/profilePic.jpg"  />
                </div>
                <div className="container" id="about Me">
                    <h2>About Me</h2>
                    <p>
                      Welcome to my personal website. I am currently a senior at University of Washington,
                      studying Informatics. I have a huge passion for education and web-development because
                      I enjoy making a difference in people's lives by developing interactive websites. Some of my
                      other passion include tennis, traveling, and video games. Feel free to look around this website if you want
                      to know more about me!
                    </p>
                </div>
                <div className="container">
                  <h2>Schedule</h2>
                  <SchedulePage />

                </div>



            </div>
        )
    }
});

export default LandingPage;
