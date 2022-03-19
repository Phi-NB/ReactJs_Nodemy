import "./App.css";
import React from "react";
import CalculatorComponent from "./components/Calculator/Calculator.jsx";
import CardComponent from "./components/Card/Card.jsx";
import Music from "./components/Music/Music.jsx";
import Search from "./components/Search/Search";
// import Display from "./components/Dislay_content/Dislay.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
// import CountDown from "./components/Countdown/Count-down";
// import Function from './components/Function-Component/Function.jsx'
// import Todo_List from './components/Todo-List/Todo-list.jsx'
import Home from "./view/Home/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { Menu } from 'antd';
import 'antd/dist/antd.css';


const routeConfig = [
  {
    component: <Home />,
    path: "/home",
    label: "Home",
  },
  {
    component: <CalculatorComponent />,
    path: "/caculator",
    label: "Calculator",
  },
  {
    component: <CardComponent />,
    path: "/card",
    label: "CardComponent",
  },
  {
    component: <Music />,
    path: "/music",
    label: "Music",
  },
  {
    component: <Search />,
    path: "/search",
    label: "Search",
  },
  {
    component: <Register />,
    path: "/register",
    label: "Register",
  },
  {
    component: <Login />,
    path: "/login",
    label: "Login",
  },
];

function App() {
  const handleClick = () => {

  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Nav>
            {routeConfig.map((route, index) => {
              return (
                <Nav.Item key={index}>

                  <Link to={route.path}>{route.label}</Link>
                </Nav.Item>
              )
            })}
          </Nav> */}
        <Menu
          onClick={handleClick}
          mode="horizontal"
        >
          {routeConfig.map((route, index) => {
            return (
              <Menu.Item key={index}>
                <Link className="app__link" to={route.path}>{route.label}</Link>
              </Menu.Item>
            )
          })}
          
        </Menu>
        <Routes>
          {routeConfig.map((route, index) => {
            return (
              <Route path={route.path} element={route.component} key={index} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
