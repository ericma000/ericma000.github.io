// Page of quotes to show
import React from 'react';
import ProjectPage from './ProjectPage';
import ProjectPageCh from './ProjectPageCh';
import './css/Project.css';

// PageOne Component
var Project = React.createClass({
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
				<div>
					<div className="switchLang">
							<button type="button" className='btn btn-primary btn-xs' onClick={() => this.changeToCh()}>中文</button>
					</div>
					<ProjectPage />
				</div>
			);
		} else {
			return (
				<div>
					<div className="switchLang">
						<button type="button" className='btn btn-danger btn-xs' onClick={() => this.changeToEng()}>EN</button>					</div>
					<ProjectPageCh />
				</div>
			);
		}
	}
});

export default Project;
