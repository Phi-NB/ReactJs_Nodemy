import React from 'react';
import '../../App.css'
import Button from './Button.js'
class calculator extends React.Component {

    constructor(props) {
        super(props)
        this.textValue = React.createRef()
    }


    showData = () => {
    }

    
    row = (value1, value2, value3, value4) => {
        return (
            <div className='row'>
                <Button value={value1}></Button>
                <Button value={value2}></Button>
                <Button value={value3}></Button>
                <Button value={value4}></Button>
            </div>
        )
        
        
    }

    render(){

        return (
            <div className="calculator">
                <h1 className="title">CALCULATOR</h1>
                <input className='value' ref={this.textValue} placeholder='Phép tính'></input>
                <input className='result' disabled placeholder='Kết quả'></input>
                <button className='reset btn'>AC</button>
                {this.row(7, 8, 9, '+')}
                {this.row(4, 5, 6, '-')}
                {this.row(1, 2, 3, '*')}
                {this.row(7, 8 , 9, '+')}
                {this.row(0, '.', '=', '/')}
            </div>
        )
        
        
    }
}

export default calculator