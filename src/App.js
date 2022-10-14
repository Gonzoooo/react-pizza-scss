import React from "react";
import axios from 'axios';
import {connect} from "react-redux";
import "./App.css";
import {Header,Home,Cart} from "../src/utils/index";
import {Route, Routes} from "react-router-dom";
import {setPizzas} from "./redux/action/pizzas";

// function App() {
//     const [pizzas, setPizzas] = React.useState([]);
//
//     React.useEffect(()=> {
//         axios.get("http://localhost:3000/db.json")
//             .then(({data})=> {
//                 setPizzas(data.pizzas)
//             })
//             .catch((err)=> {
//                 console.log(err)
//             })
//     }, []);
//
//     return (
//         <div className="wrapper">
//             <Header />
//             <div className="content">
//                 <Routes>
//                     <Route exact path="/" element={<Home items={pizzas}/>}/>
//                     <Route path="/cart" element={<Cart />}/>
//                 </Routes>
//             </div>
//       </div>
//     );
// }

class App extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3000/db.json")
            .then(({data})=> {
                this.props.setPizzas(data.pizzas);
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home items={this.props.items}/>}/>
                        <Route path="/cart" element={<Cart />}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        filters: state.filters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
