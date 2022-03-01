import React from "react";
import _ from "lodash";
import TimeControl from "./Time-control";
import Button from 'react-bootstrap/Button';


class CountDown extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      type: 'section',
      isRunning: false,
      currentBreakTime: 5 ,
      currentSectionTime: 10,
      totalBreakTime: 5,
      totalSectionTime: 5,
    };

    this.interval = null
  }
  

  displayTime = () => {
    let time =
        this.state.type === "section"
        ? this.state.currentSectionTime
        : this.state.currentBreakTime;
    let minute = _.padStart(Math.floor(time / 60), 2, "0");
    let second = _.padStart(Math.floor(time % 60), 2, "0");

    return `${minute} : ${second}`;
  };

  handleTimeControlClick = (type, typeChange) => {
    if (type === "section") {
      if (typeChange === "increase") {
        if (this.state.totalSectionTime < 60 * 60){
          this.setState({
            totalSectionTime: this.state.totalSectionTime + 60,
          });
        } 
      } else if (typeChange === "decrease") {
        if (this.state.totalSectionTime > 60 ){
          this.setState({
            totalSectionTime: this.state.totalSectionTime - 60,
          });
        } 
      }
    } else if (type === "break") {
      if (typeChange === "increase") {
        if (this.state.totalBreakTime < 60 * 60){
          this.setState({
            totalBreakTime: this.state.totalBreakTime + 60,
          });
        }
        
      } else if (typeChange === "decrease") {
        if (this.state.totalBreakTime > 60 ){
          this.setState({
            totalBreakTime: this.state.totalBreakTime - 60,
          }); 
        }
        
      }
    }
  };

  start = () => {
    const { isRunning } = this.state
    if (isRunning){
      clearInterval(this.interval)
      this.setState({ isRunning: false })
      return
    }
    

    this.interval = setInterval(() => {
      const { type, currentBreakTime, currentSectionTime, totalBreakTime, totalSectionTime } = this.state

      
      let nextBreakTime = type === 'break' ? currentBreakTime - 1 : currentBreakTime
      let nextSectionTime = type === 'section' ? currentSectionTime - 1 : currentSectionTime
      
      let nextType = type

      
      if (currentBreakTime === 0 && type === 'break'){
        nextType = 'section'
        nextBreakTime = totalBreakTime
      } else if (currentBreakTime === 0 && type === 'section'){
        nextType = 'break'
        nextSectionTime = totalSectionTime
      }
    

      this.setState({
        isRunning: true,
        type: nextType,
        currentBreakTime: nextBreakTime,
        currentSectionTime: nextSectionTime,
      })
    }, 1000)
  }

  render() {
    return (
      <div className='flex'>
        <TimeControl
          displayTime={this.displayTime()}
          handleChange={this.handleTimeControlClick}
          amount={this.state.totalSectionTime}
          type={'section'}
        />
        <h1>{this.displayTime()}</h1>
        
        <TimeControl
          displayTime={this.displayTime()}
          handleChange={this.handleTimeControlClick}
          amount={this.state.totalBreakTime}
          type={'break'}
        />,
        <Button onClick={this.start} className='btn-start'>Start/Stop</Button>
      </div>
    )
  }
}

export default CountDown;
