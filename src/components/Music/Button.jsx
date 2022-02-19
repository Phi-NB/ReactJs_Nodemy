import React from 'react';

class Button extends React.Component {

    // Hàm componentDidMount chạy sau khi hàm render chạy
    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === this.props.keyCode) {
                let music = new Audio(this.props.link)
                let musicPromise = music.play()
                if(musicPromise !== undefined) {
                    musicPromise.then(() => {
                        music.play()
                    })
                    .catch(() => {
                        
                    })
                }
            }
        })
    }
    

    onkey = () => {
        this.props.onPress(this.props.keyCode)
    }

    clickButton = () => {
        this.props.clickButton(this.props.link)
    }

    render() {
        return <button onClick={this.clickButton} onKeyPress={this.onkey} className='key'>{this.props.text}</button>
    }
}

export default Button