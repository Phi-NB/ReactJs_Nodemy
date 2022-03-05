import React from 'react';
import { useState } from 'react'
import { 
    Button, 
    ListGroup,
    InputGroup,
    FormControl
    } from 'react-bootstrap';


function Todo_List () {

    

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJob = JSON.parse(localStorage.getItem('job'))
        return storageJob || []
    })

    const addJob = () => {
        setJobs((prev) => {
            const newJob = [...prev, job]
            const jsonJob = JSON.stringify(newJob)
            localStorage.setItem('job', jsonJob)

            return newJob
        })
        setJob('')
    }

    return (
        <div className='todo-list'>
            <InputGroup className="mb-3" >
                <FormControl
                placeholder="Todo"
                value={job}
                onChange={e => setJob(e.target.value)}
                />
                <Button 
                
                id="button-addon2"
                onClick={addJob}
                >
                Click
                </Button>
            </InputGroup>
            {jobs.map((job, index) => {
                return (
                     <ListGroup key={index}>
                        <ListGroup.Item >{job}</ListGroup.Item>
                    </ListGroup>
                )
            })}
            
        </div>
    )
}

export default Todo_List