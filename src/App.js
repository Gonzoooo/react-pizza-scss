import React from "react";
import axios from 'axios';
import {useDispatch} from "react-redux";
import "./App.css";
import {Header,Home,Cart} from "../src/utils/index";
import {Route, Routes} from "react-router-dom";
import {setPizzas} from "./redux/action/pizzas";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get("http://localhost:3000/db.json")
            .then(({data})=> {
                dispatch(setPizzas(data.pizzas));
            })
            .catch((err)=> {
                console.log(err);
            })
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
