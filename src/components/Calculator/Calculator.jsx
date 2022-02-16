import React from 'react';
import '../../App.css'
import Button from './Button.jsx'
class Calculator extends React.Component {
    

    state = {
        input: '',
        output: '',
    }
    
    lisItem = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, ',', '=', '/']

    clickButton = (valueButton) => {
        if(valueButton === '='){
            
        } else {
            this.setState({
                input: this.state.input += valueButton
            })
        }
    }

    cal = this.lisItem.map((item) => {
        return (
            <Button key={item} value={item} handButton={this.clickButton}></Button>
            )
        })
        
    render(){

        return (
            <div className="calculator">
                <h1 className="title">CALCULATOR</h1>
                <input value={this.state.input} className='value' disabled placeholder='Phép tính'></input>
                <input className='result' disabled placeholder='Kết quả'></input>
                <button className='reset btn'>AC</button>
                
                <div className='row'>
                    {this.cal}
                </div>
                
            </div>
        )
        
        
    }
}

export default Calculator