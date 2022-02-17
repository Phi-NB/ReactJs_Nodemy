import React from 'react';
import '../../App.css'
import Button from './Button.jsx'
class Calculator extends React.Component {
    

    state = {
        input: '',
        output: '',
    }
    
    reset = () => {
        this.setState({
            input: '',
            output: ''
        })
    }

    delete =  () => {
        let oldInput = this.state.input
        let newInput = oldInput.slice(0, oldInput.length - 1)
        this.setState({
            input: newInput
        })
    }

    litsButton = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/']

    clickButton = (valueButton) => {
        if (valueButton === '='){
            if (this.state.input !== '') {
                let result = ''
                try {
                    result = eval(this.state.input)
                }
                catch (error){
                    this.setState({
                        output: 'Error',
                    })
                }

                if (result === undefined || result === 'Infinity') {
                    this.setState({
                        output: 'Error',
                    })
                } else {
                    this.setState({
                        input: this.state.input,
                        output: result
                    })
                }
            } else {
                this.setState({
                    input: '',
                    output: ''
                })
            }
        } else {
            this.setState({
                input: this.state.input += valueButton
            })
        }
    }

    cal = this.litsButton.map((item) => {
        return (
            <Button key={item} value={item} handButton={this.clickButton}></Button>
            )
        })
        
    render () {

        return (
            <div className="calculator">
                <h1 className="title">CALCULATOR</h1>
                <input value={this.state.input} className='value' disabled placeholder='Phép tính'></input>
                <input className='result' value={this.state.output} disabled placeholder='Kết quả'></input>
                <button onClick={this.reset} className='reset btn'>AC</button>
                <button onClick={this.delete} className='delete btn'>C</button>
                <div className='row'>
                    {this.cal}
                </div>
                
            </div>
        )
        
        
    }
}

export default Calculator