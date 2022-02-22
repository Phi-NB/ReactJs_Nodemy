import React from 'react';

class Button extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            class: 'key'
        }
        this.onkey = this.onkey.bind(this)
    }

    // Hàm componentDidMount chạy sau khi hàm render chạy
    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.charCode === this.props.keyCode) {
                let music = new Audio(this.props.link)
                let musicPromise = music.play()
                if(musicPromise !== undefined) {
                    musicPromise.then(() => {
                        music.play()
                        this.setBackground()
                    })
                    .catch(() => {
                        
                    })
                }
            }
        })
    }
    
    setBackground = () => {
        this.setState({
            class: 'key active'
        })

        let setBackground = setInterval(() => {
            this.setState({
                class: 'key'
            })
            clearInterval(setBackground)
        }, 100)

    }

    onkey ()  {
        this.props.onPress(this.props.title);
    }

    clickButton = () => {
        this.props.clickButton(this.props.link, this.props.title)

        this.setBackground()
        
    }

    render() {
        return <button onClick={this.clickButton} onKeyPress={this.onkey} className={this.state.class}>{this.props.text}</button>
    }
}

export default Button