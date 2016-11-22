// Page of quotes to show
import React from 'react';
import ProjectUrl from './ProjectUrl';
import $ from 'jquery';
import './css/Project.css';
// PageOne Component
var ProjectPageCh = React.createClass({
	getInitialState() {
		return{project: []}
	},
	componentDidMount() {
		$.getJSON('./data/projectCh.json', function(data) {
			console.log(data.sites);
			this.setState({project: data.sites})
		}.bind(this))
	},
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div>
				{this.state.project.map(function(d, i) {
					return(
						<div>
							<ProjectUrl key={'project-' + i}
								title={d.name}
								description={d.description}
								url={d.url}
							/>
						</div>
					)
				}.bind(this))}
			</div>
		);
	}
});

export default ProjectPageCh;
