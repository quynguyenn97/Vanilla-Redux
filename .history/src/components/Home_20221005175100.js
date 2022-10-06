const Home = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Hello world with React and Hoi Dan IT!</h1>
                    <div>Count: {props.count}</div>
                    <button onClick={() => handleIncrease()}>
                        Increase Count
                    </button>
                    <button onClick={() => props.decreaseCounter()}>
                        Decrease Count
                    </button>
                </header>
            </div>
        </>
    );
};
export default Home;
