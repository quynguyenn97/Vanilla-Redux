import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
import store from "./redux/store";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home";

function App(props) {
    const handleIncrease = () => {
        props.increaseCounter1();
    };

    const fetchAllUser = async () => {
        let res = await axios.get("http://localhost:8080/users/all");
        const data = res && res.data ? res.data : [];
        console.log(">>>check data", data);
    };
    useEffect(() => {
        fetchAllUser();
    }, []);
    return (
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <h1>Hello world with React and Hoi Dan IT!</h1>
        //         <div>Count: {props.count}</div>
        //         <button onClick={() => handleIncrease()}>Increase Count</button>
        //         <button onClick={() => props.decreaseCounter()}>
        //             Decrease Count
        //         </button>
        //     </header>
        // </div>
        <Home />
    );
}

export default App;
