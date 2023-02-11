import { useState } from 'react';
import { products } from "../model/utils/data"
import { storage as st } from '../model/utils/util';
import logo from '../assets/data/logo.svg';
import '../assets/styles/app.scss';
import '../assets/styles/effect.scss'
import NavBar from './components/navbar';
import ListProduct from './pages/ListProduct';
import LoginForm from './pages/LoginForm';
import CartOrder from './pages/CartOrder';
import FilterProduct from './pages/FilterProduct';

const Application = () => {

  const state = useState({ cart: st.get('cart') || [], products});

  return <>
    <div className="App">

      <NavBar state={state} />

      {/* Show item ordered */}
      <CartOrder state={state} />

      {/* Content */}
      <div className='container-fluid'>
        <div className='row' style={{ backgroundColor: '#282c34', color: '#ffffff' }}>
          <div className='col-lg-8'>
            <ListProduct state={state} qty={3} />
          </div>
          <div className='col-lg-4'>
            <FilterProduct state={state}/>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#282c34', color: '#ffffff' }}>
        <hr className='m-0'/>
        <LoginForm />
        <hr className='m-0'/>
      </div>

      {/* HEADER */}
      <header className="App-header" id='content'>
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
