import React from 'react';
import {Button, Form } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Register () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e) => {  
        
     }

    return (
        <div className="register">
            <h1>Register</h1>
            <Form onSubmit={e => {e.preventDefault()}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control value={confirmPassword} type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Register 
                </Button>
                <Button className="btn__login" variant="primary" type="submit" onClick={() => {navigate('/login')}}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Register