// Page of quotes to show
import React from 'react';
import SchedulePic from './SchedulePic';
// PageOne Component
var scheduleUrl = [{quarter: '秋天', url: 'fallSchedule.png' },
 									 {quarter: '冬天', url: 'winterSchedule.png'}
								  ];

var SchedulePageCh = React.createClass({
	getInitialState() {
		return {imageUrl: [], currentUrl: 0}
	},

	componentDidMount() {
		this.setState({imageUrl: scheduleUrl})
	},

	chooseUrl(id) {
		this.setState({currentUrl: id});
	},
	// Render a <Quote> element for each element in the state
	render() {
		let selectedUrl = this.state.imageUrl[this.state.currentUrl];
		return (
			<div>
				{this.state.imageUrl.map(function(schedule, i) {
					return(
						<button key={'key-' + i} type="button" className='btn btn-primary'
							id={i}
							onClick={() => this.chooseUrl(i)}>
							{schedule.quarter}
						</button>
					)
				}.bind(this))}
				{selectedUrl &&
					<SchedulePic url={selectedUrl.url} title={selectedUrl.quarter} />
				}

			</div>

		);
	}
});

export default SchedulePageCh;
