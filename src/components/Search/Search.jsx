/**
 * BTVN: 
 * Tạo 1 ô search, sau đấy cho phép nhập vào để tìm kiếm tên các nhân vật trong api: https://swapi.dev/api/people
 * B1: trong didMount phải gọi api load data vào trong state.
 * // gọi api dùng async/await
 * B2: tạo 1 ô search, khi search cập nhật lại trong state 1 biến searchKey và dùng searchKey để lọc ra các kết quả đúng trong API trả về
 * search thì dùng hàm .filter của Array.
 */

import React from "react";

class Search extends React.PureComponent {

   

    state = {
        characters: []
    }

    componentDidMount() {
        async function convert(){
            try{
                let data = await fetch('https://swapi.dev/api/people')
                let dataConvert = await data.json()
                return dataConvert
            }
            catch(err){
                return err
            }
        }
        convert()
            .then(data => {
                // console.log(data);
                this.setState({
                    characters: data.results
                })
            })
            .catch(err => {
                this.setState({
                    characters: err
                })
            })
    }

    handleChange = (e) => {
        // this.state.characters.forEach((character) => {
        //     let position = character.name.indexOf(e.target.value)
        //     console.log(character.name , e.target.value);
        //     if (position !== -1) {
        //         this.setState({
        //             characters: [character.name]
        //         })
        //     }
        //     else{
        //         this.setState({
        //             characters: []
        //         })  
        //     }
        // })


        let result = this.state.characters.filter((character) => {
            return character.name === e.target.value
        })
        console.log(result, e.target.value);
        
        if(result.length > 0){
            this.setState({ characters: result })
        }
        else{
            this.setState({ characters: [] })
        }
    }

    // handleChange = (e) => {
    //     // eslint-disable-next-line react/no-direct-mutation-state
    //     this.setState({ 
    //         value: e.target.value
    //     })
    // }

    // search = () => {
    //     let result = this.state.characters.filter((character) => {
    //         return character.name === this.state.value
    //     })
    //     console.log(result, this.state.value);
        
    //     if(result.length > 0){
    //         this.setState({ characters: result })
    //     }
    //     else{
    //         this.setState({ characters: [] })
    //     }
    // }



    render() {
        return (
            <div>
                <input onChange={this.handleChange} className="input_search" type="search" />                                     
                {this.state.characters.map((character, index) => {
                    return (
                        <p key={index}>{character.name}</p>
                    )
                })}
            </div>
        )
    }
}

export default Search;