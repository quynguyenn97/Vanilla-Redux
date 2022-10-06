import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello world with React and Hoi Dan IT!</h1>
            </header>
            <div>Count: {props.count}</div>

            <button onClick={() => props.increaseCounter()}>
                Increase Count
            </button>

            <button onClick={() => props.decreaseCounter()}>
                Decrease Count
            </button>
        </div>
    );
}

export default App;
