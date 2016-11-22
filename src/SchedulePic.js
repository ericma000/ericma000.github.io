// Video component -- show a youtube iframe
import React from 'react';

var SchedulePic = React.createClass({
    render() {
        return(
          <div className="schedulePic">
            <img src={'./imgs/' + this.props.url} />
          </div>
        )
    }
});

export default SchedulePic;
