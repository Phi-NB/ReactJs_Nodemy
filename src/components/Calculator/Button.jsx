import React from 'react';

class Button extends React.Component {
    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.props.handButton(this.props.value)
    }

    render() {
        return <button  onClick={this.onClick} className='btn btn-key'>{this.props.value}</button>
    }
}

export default Button