import React from "react";
import {Button} from 'react-bootstrap';

class TimeControl extends React.PureComponent {
  upTime = () => {
    this.props.handleChange(this.props.type, "increase");
  };

  downTime = () => {
    this.props.handleChange(this.props.type, "decrease");
  };

  render() {
    return (
      <div className="control-time-count">
        <h2>{this.props.type} time</h2>
        <Button onClick={this.upTime} className="btn">
          <i className="bx bx-up-arrow-alt"></i>
        </Button>
        <p>{this.props.amount / 60}</p>
        <Button onClick={this.downTime} className="btn">
          <i className="bx bx-down-arrow-alt"></i>
        </Button>
      </div>
    );
  }
}

export default TimeControl
