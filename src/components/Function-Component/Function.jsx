import React from 'react'
import { useState, useEffect } from 'react'
import {Card , InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'


function Search () {

    const [data, setData] = useState([])
    const [limitItem, setlimitItem] = useState()
    const [dataSearch, setDataSearch] = useState([])

    useEffect(() => {
        async function F () {
            try{
                let data = await fetch('https://swapi.dev/api/people')
                let dataConvert = await data.json()
                setData(dataConvert.results)
                setDataSearch(dataConvert.results)
            }
            catch(err) {
                return err
            }
        }
        F()

    }, [])

    let select = (e) => {
        if (e === 'all'){
            setlimitItem(dataSearch.length)
        }
        else {
            setlimitItem(e)
        }
        
    }

    const search = (e) => {
        const results = data.filter((card) => {
            return card.name.includes(e.target.value)
        })

        setDataSearch(results)
    }


    return (
        <div className="">
            <div>
                <InputGroup className="mb-3">
                    <FormControl onChange={search} aria-label="Text input with dropdown button" />

                    <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                    align="end"
                    onSelect={select}
                    >
                        <Dropdown.Item eventKey="all" href="#">All</Dropdown.Item>
                        <Dropdown.Item eventKey="5" href="#">5</Dropdown.Item>
                        <Dropdown.Item eventKey="10" href="#">10</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </div>
            
            <div>
                {dataSearch.slice(0, limitItem).map((item, index) => {
                    return(
                        <Card style={{ width: '18rem' }} key={index}>
                            <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.skin_color}
                            </Card.Text>
                            </Card.Body>
                        </Card> 
                    )
                })}
            </div>
            
        </div>
    )
}

export default Search