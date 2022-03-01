import "./App.css";
import React from "react";
// import CalculatorComponent from './components/Calculator/Calculator.jsx';
// import CardComponent from './components/Card/Card.jsx';
// import Music from './components/Music/Music.jsx'
// import Search from "./components/Search/Search";
// import Display from "./components/Dislay_content/Dislay.jsx";
// import CountDown from "./components/Countdown/Count-down";
import FFunction from './components/Function-Component/Function.jsx'

  
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      time: new Date(),
    }

    this.process = null

  }
  start = () => {
    this.process = setInterval(() => {
      this.setState(
        {time: new Date ()}
      )
    }, 1000)
  }
//          

  end = () => {
    clearInterval(this.process)
  }
  
  render() {
    return (
      <div>

        {/* <h2>Thời gian hiện tại: {this.state.time.toString()}</h2>
        <button onClick={this.start}>Start</button>
        <button onClick={this.end}>End</button> */}
        

        {/* <CalculatorComponent/>
        <CardComponent/>,
        <Music /> */}
        
        {/* <Search/> */}

        {/* <Display/> */}

        {/* <CountDown /> */}

        <FFunction />
      </div>
      
    );
  }
} 

export default App
