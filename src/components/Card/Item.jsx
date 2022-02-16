import React from 'react';

class item extends React.Component {
    

    render() {
        return (
            <div className='card'>
                <div className='card__img'>
                    <img alt="avatar" src={this.props.link}/>
                </div>
                <div className="card__name">{this.props.name}</div>
                <div className="card__work">{this.props.work}</div>
                <div className="card__socical">
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-youtube'></i>
                    <i className='bx bxl-tiktok'></i>
                    <i className='bx bxl-github'></i>
                </div>
                <div className="card__contact">
                    <button>Contact me</button>
                </div>
            </div>
        ) 
    }
}

export default item