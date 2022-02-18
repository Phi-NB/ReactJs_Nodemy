import React from 'react';

class Button extends React.Component {


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

    render() {
        return <button onKeyPress={this.onkey} className='key'>{this.props.text}</button>
    }
}

export default Button