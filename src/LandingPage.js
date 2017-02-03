// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import SchedulePage from './SchedulePage.js';
import SchedulePageCh from './SchedulePageCh.js';
var LandingPage = React.createClass({
    getInitialState() {
      return {language: 0}
    },
    changeToCh() {
        this.setState({language: 1});
    },
    changeToEng() {
      this.setState({language: 0});
    },
    render() {
      if(this.state.language == 0) {
            return(
                <div id="main">
                    <div className="switchLang">
                        <button type="button" className='btn btn-danger btn-xs' onClick={() => this.changeToCh()}>中文</button>
                    </div>
                    <div>
                        <h1>EricMa</h1>
                          <div id="contact">
                            <a href="mailto:ericma000@gmail.com"><i className="fa fa-envelope-square fa-2x" aria-hidden="true"></i></a>
                            <a href="https://www.facebook.com/eric.ma.3344"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
                            <a href="https://www.instagram.com/beastslayere/"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                          </div>
                        <div>
                            <img id="profilePic" src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/12006451_10207162752654381_4487161508593285604_o.jpg?oh=b441f971ac5e035fbc4487c6496673b8&oe=591697E9"  />
                        </div>
                        <div id="aboutMe">
                            <h2>University of Washington</h2>
                            <h5>Informatics  | Class of	&#39;18</h5>
                        </div>
                    </div>
                    <div id="left" >
                        <div id="schedule">
                          <h3>Welcome</h3>
                          <p>to my tiny little space on the internet. This is where I share things about my life.</p>
                          <h4 id="quotes"><q>Do something today that your future self will thank you for...</q> </h4>
                          <h4 id="quoteLabel">~Unknown</h4>

                        </div>

                    </div>
                    <div id="right">
                        <h4>Schedule</h4>
                        <SchedulePage />
                    </div>
                </div>
            )
        } else {
          return(
            <div id="main">
                <div className="switchLang">
                    <button type="button" className='btn btn-danger btn-xs' onClick={() => this.changeToEng()}>ENG</button>
                </div>
                <div>
                    <h1>馬晨哲</h1>
                      <div id="contact">
                        <a href="mailto:ericma000@gmail.com"><i className="fa fa-envelope-square fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/eric.ma.3344"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/beastslayere/"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                      </div>
                    <div>
                        <img id="profilePic" src="./imgs/profilePic.jpg"  />
                    </div>
                    <div id="aboutMe">
                        <h2>華盛頓大學</h2>
                        <h5>資訊科學  | 2018年畢業 </h5>
                    </div>
                </div>
                <div id="left" >
                    <div id="schedule">
                      <h3>歡迎</h3>
                      <p>來到我的網頁. 我會在這裡分享跟我人生有關的事</p>
                      <h4 id="quotes"><q>今天開始做一些未來的你會很感激的事</q> </h4>
                      <h4 id="quoteLabel">~無名</h4>

                    </div>

                </div>
                <div id="right">
                    <h4>課程表</h4>
                    <SchedulePage />
                </div>
            </div>
          )
        }
    }
});

export default LandingPage;
