import React from "react";
import axios from 'axios';
import "./App.css";
import {Header,Home,Cart} from "../src/utils/index";
import {Route, Routes} from "react-router-dom";

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(()=> {
        axios.get("http://localhost:3000/db.json")
            .then(({data})=> {
                setPizzas(data.pizzas)
            })
            .catch((err)=> {
                console.log(err)
            })
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home items={pizzas}/>}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </div>
      </div>
    );
}

export default App;
