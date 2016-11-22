// Video component -- show a youtube iframe
import React from 'react';
import './css/Landing.css'

var SchedulePic = React.createClass({
    render() {
        return(
          <div className="schedulePic">
            <img id="schedule" src={'./imgs/' + this.props.url} />
          </div>
        )
    }
});

export default SchedulePic;
