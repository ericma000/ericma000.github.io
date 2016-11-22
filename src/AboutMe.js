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
							<div>
								<h5>This page is still under construction! More coming soon!</h5>
								<div className="container">
									<h4><span className="info">Name:</span> Chen-Che (Eric) Ma</h4>
									<h4><span className="info">Age:</span> 21</h4>
									<h4><span className="info">School:</span> University of Washington</h4>
									<h4><span className="info">Major:</span> Informatics</h4>
									<h4><span className="info">languages:</span> English, Chinese, Japanese (basic)</h4>
								</div>
							</div>
						</div>
					);
		} else {
				return (
					<div id="main" className="container">
						<div className="switchLang">
							<button type="button" className='btn btn-danger btn-xs' onClick={() => this.changeToEng()}>EN</button>
						</div>
						<div>
							<h5>這個網頁還在創造當中.清稍後在環來看</h5>
							<div className="container">
								<h4><span className="info">名子:</span> 馬晨哲</h4>
								<h4><span className="info">年齡:</span> 21</h4>
								<h4><span className="info">學校:</span> 華盛頓大學n</h4>
								<h4><span className="info">系:</span> 資訊科學</h4>
								<h4><span className="info">語言:</span> 英文,　中文,　日文（基本）</h4>
							</div>
						</div>
					</div>
				);
		}
		}
});

export default AboutMe;
