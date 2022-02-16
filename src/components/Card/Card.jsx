import React from 'react';
import '../../App.css'
import Item from './Item.jsx'

class card extends React.Component {

    render() {
        return <div className="app">
                    <Item link='aNam.jpg' name='Đình Nam' work='Fullstack Developer'></Item>
                    <Item link='aThai.jpg' name='TháiHM' work='Fullstack Developer'></Item>
                    <Item link='Cuong.jpg' name='CuongNV' work='Fullstack Developer'></Item>
                </div>
    }
}

export default card