import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

function App(props) {
    const handleIncrease = () => {
        props.increaseCounter1();
    };

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
