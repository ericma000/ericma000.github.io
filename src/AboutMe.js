// Page of quotes to show
import React from 'react';
import './css/AboutMe.css';
// PageOne Component
var AboutMe = React.createClass({
	// Render a <Quote> element for each element in the state
	getInitialState() {
		return {language: 0};
	},
	changeToCh() {
		this.setState({language: 1});
	},
	changeToEng() {
		this.setState({language: 0});
	},
	render() {
		if (this.state.language == 0) {
					return (
						<div id="main" className="container">
							<div className="switchLang">
									<button type="button" className='btn btn-primary btn-xs' onClick={() => this.changeToCh()}>中文</button>
							</div>
							<h1>About Me</h1>
							<p>
								Hi, my name is Eric Ma. I am currently a senior at University of Washington studying informatics hoping to
								specialize in front-end development and User experience. Education is very important to me because I believe
								that everyone has a right to education. Thus, I hope to create some type of technology that will spread education
								to various places around the world.
							</p>
						</div>
					);
		} else {
				return (
					<div id="main" className="container">
						<div className="switchLang">
							<button type="button" className='btn btn-danger btn-xs' onClick={() => this.changeToEng()}>EN</button>
						</div>
						<h1>自我介紹</h1>
						<p>
							Hi, 我叫馬晨哲. 現在是大學四年級在美國華盛頓大學讀資訊科學. 教育對我來講很重要因為我覺得每個人一生下就一定有教育的權利. 所以
							我希望以後可以創作一些教育的科技然後分享給全世界!
						</p>
					</div>
				);
		}
		}
});

export default AboutMe;
