import React from 'react';
import {Button, Form, } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router'


function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {        
        fetch('https://todo-nodemy.herokuapp.com/user/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "uername": username,
                "password": password
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            if (data.error === 'Bad Request') {
                navigate('/register')
            }
        })
        .catch((err) => {
            console.log(err);
        })

    }

    return (
        <div className="login">
            <h1>Login</h1>
            <Form onSubmit={e => {e.preventDefault()}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button className="btn__login" variant="primary" type="submit" onClick={handleSubmit}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login