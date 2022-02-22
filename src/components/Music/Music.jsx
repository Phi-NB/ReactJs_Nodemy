import React from 'react';
import Button from './Button.jsx'

class Music extends React.Component {

    state={
        id : ''
    }

    listKey = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        }, 
        
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        }, 
        
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        }, 
        
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        }, 
        
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        }, 
        
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        }, 
        
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        }, 
        
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        },
    ]

        
    clickButton = (link, id) => {
        let music = new Audio(link)
        let musicPromise = music.play()
        if(musicPromise !== undefined) {
            musicPromise.then(() => {
                music.play()
            })
            .catch(() => {
                
            })
        } 
        this.setState({
            id: id
        })
    }

    
    render() {
        return (
            <div className="list">
                
                {
                    this.listKey.map((key) => {
                        return (
                            <Button key={key.keyCode} clickButton={this.clickButton} keyCode={key.keyCode} text={key.keyTrigger} onPress={this.onKeyPress} link={key.url} title={key.id}></Button>
                        )
                    })
                }

                <h2 className='id'>{this.state.id}</h2>
            </div>
        )
    }
}


export default Music

/**
 * BTVN: 
 * Tạo 1 ô search, sau đấy cho phép nhập vào để tìm kiếm tên các nhân vật trong api: https://swapi.dev/api/people
 * B1: trong didMount phải gọi api load data vào trong state.
 * // gọi api dùng async/await
 * B2: tạo 1 ô search, khi search cập nhật lại trong state 1 biến searchKey và dùng searchKey để lọc ra các kết quả đúng trong API trả về
 * search thì dùng hàm .filter của Array.
 */