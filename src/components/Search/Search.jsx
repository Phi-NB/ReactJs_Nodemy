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
        characters: [],
        arraySearch: []
    }

    async componentDidMount() {
        
        try{
            let data = await fetch('https://swapi.dev/api/people')
            let dataConvert = await data.json()
            this.setState({
                characters: dataConvert.results,
                arraySearch: dataConvert.results
            })
        }
        catch(err){
            return err
        }
    }
    

    handleChange = (e) => {

        let result = this.state.characters.filter((character) => {
            return character.name.includes(e.target.value)
        })
        this.setState({
            arraySearch: result
        })
    }


    render() {
        return (
            <div>
                <input onChange={this.handleChange} className="input_search" type="search" />                                     
                {this.state.arraySearch.map((character, index) => {
                    return (
                        <p key={index}>{character.name}</p>
                    )
                })}
            </div>
        )
    }
}

export default Search;