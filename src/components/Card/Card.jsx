import React from 'react';
import '../../App.css'
import Item from './Item.jsx'

class card extends React.Component {

    data = [
        {
            id: 1,
            name: 'Đình Nam',
            avatar: 'aNam.jpg',
            work: 'Fullstack Developer'
        },
        {
            id: 2,
            name: 'TháiHM',
            avatar: 'aThai.jpg',
            work: 'Fullstack Developer'
        },
        {
            id: 3,
            name: 'CườngNV',
            avatar: 'Cuong.jpg',
            work: 'Fullstack Developer'
        }

    ]



    render() {
        return <div className="app">
                    {
                        this.data.map((item) => {
                            return <Item key={item.id} link={item.avatar} name={item.name} work={item.work}></Item>
                        })
                    }
                </div>
    }
}

export default card

