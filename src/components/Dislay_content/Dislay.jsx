import React from 'react';


class Display extends React.PureComponent {
    colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
    state = {
        contents: [],
        indexColor: 0,
        indexContent: 0,
    }
    async componentDidMount() {
        try {
            const data = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')

            const dataConvert = await data.json()
            
            this.setState({ 
                contents: dataConvert.quotes 
            })
        } 

        catch (error) {

        }
    }

    

    random = () => {
        this.setState({
            indexColor: Math.floor(Math.random() * this.colors.length),
            indexContent: this.state.contents[Math.floor(Math.random() * this.state.contents.length)]
        })
    }


    render() {
        return (

            <div style={{backgroundColor: this.colors[this.state.indexColor]}}>
                <h2>{this.state.indexContent.quote}</h2>
                <p>{this.state.indexContent.author}</p>
                <button onClick={this.random} className="btn"> Click</button>
            </div>
        )
    }

}

export default Display