import React from "react";
import logo from '../../assets/data/logo.svg';

class HomePage extends React.Component {
    render() {
        return <>
            <header className="App-header" id='content'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </>
    }
}


export default HomePage;