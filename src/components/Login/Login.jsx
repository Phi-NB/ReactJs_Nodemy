import React from "react";
// import {Button, Form, } from 'react-bootstrap'
import { useNavigate } from "react-router";
import { Form, Input, Button } from "antd";
import login from "../../services/user.js";
import { useDispatch } from "react-redux";
import actionCreator from "../../redux/action";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (value) => {
    const result = await login(value.username, value.password);
    console.log(result);
    dispatch(actionCreator.loginAction(result.token))
    if (result.status === 404) {
      navigate("/register");
    }
    else {
        navigate("/home")
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
