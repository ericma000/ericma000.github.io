// Page of quotes to show
import React from 'react';
import './css/Project.css';
// PageOne Component
var ProjectUrl = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div className="container">
				<div className="projectBlock">
					<h3 className="title">{this.props.title}</h3>
					<p>{this.props.description}</p>
					<a href={this.props.url}><p className="link">SEE PROJECT</p></a>
				</div>
			</div>
		);
	}
});

export default ProjectUrl;
