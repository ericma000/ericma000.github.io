// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css';
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
                        <button type="button" className='btn btn-primary btn-xs' onClick={() => this.changeToCh()}>中文</button>
                    </div>
                    <div className="container">
                        <img id="profilePic" src="./imgs/profilePic.jpg"  />
                    </div>
                    <div className="container" id="about Me">
                        <h3>About Me</h3>
                        <p>
                          Welcome to my personal website. I am currently a senior at University of Washington,
                          studying Informatics. I have a huge passion for education and web-development because
                          I enjoy making a difference in people's lives by developing interactive websites. Some of my
                          other passion include tennis, traveling, and video games. Feel free to look around this website if you want
                          to know more about me!
                        </p>
                    </div>
                    <div className="container">
                      <h3>Schedule</h3>
                      <SchedulePage />
                    </div>
                </div>
            )
        } else {
          return(
              <div id="main">
                  <div className="switchLang">
                      <button type="button" className='btn btn-danger btn-xs' onClick={() => this.changeToEng()}>EN</button>
                  </div>
                  <div className="container">
                      <img id="profilePic" src="./imgs/profilePic.jpg"  />
                  </div>
                  <div className="container" id="about Me">
                      <h3>自我介紹</h3>
                      <p>
                        歡迎來到我的網頁! 我現在是大學四年級在美國華盛頓大學讀資訊科學. 我對教育還有網頁設計很有興趣. 以後
                        希望可以創造一些網頁可以影響到很多人的人生讓大家的生活可以過的好一點點. 我其他興去有包括打網球, 到處旅遊,
                        還有玩線上遊戲.
                      </p>
                  </div>
                  <div className="container">
                    <h3>課程表</h3>
                    <SchedulePageCh />
                  </div>
              </div>
          )
        }
    }
});

export default LandingPage;
