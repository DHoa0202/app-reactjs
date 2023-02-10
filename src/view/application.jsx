import { useState } from 'react';
import logo from '../assets/data/logo.svg';
import '../assets/styles/app.scss';
import NavBar from './components/navbar';
import ListProduct from './pages/ListProduct';
import LoginForm from './pages/LoginForm';
import CartOrder from './pages/CartOrder';
import FilterProduct from './pages/FilterProduct';

const Application = () => {

  const state = useState({ cart: [] });

  return <>
    <div className="App">

      <NavBar state={state} />

      {/* Show item ordered */}
      <CartOrder state={state} />

      {/* Content */}
      <div className='container-fluid'>
        <div className='row' style={{ backgroundColor: '#282c34', color: '#ffffff' }}>
          <div className='col-lg-8'>
            <ListProduct state={state}/>
          </div>
          <div className='col-lg-4'>
            <FilterProduct />
          </div>
          <div className='col-lg-12'>
            <hr />
            <LoginForm />
            <hr />
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  </>
}
export default Application
