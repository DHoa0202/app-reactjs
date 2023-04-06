import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { storage as st } from '../model/utils/util';
import NavBar from './components/navbar';
import HomePage from './pages/HomePage';
import Content from './pages/Content'
import LoginForm from './pages/LoginForm';


const LOCAL = `http://localhost:8080/api/products-page/0?qty=10`
const products = await axios.get(LOCAL).then(r => r.data).catch(_e => []);
console.log(products);

const Application = () => {

  /**
   * TEST FETCH API
   * +++++++++++++++++++++++++++++++++++++++++ START SERVER
   * B1: clone https://github.com/DHoa0202/bookish-meme.git
   * B2: start server ``` npm start ```
   * B3: connect to http://localhost:8080/api and call api
   */

  const state = useState({ cart: st.get('cart') || [], products });
  const token = useState();

  return <>
    <Router>
      <div className="container-xxl">
        <NavBar state={state} />
        <Routes>
          <Route path='/' exact element={<HomePage state={state} />} />
          <Route path='/login' exact element={<LoginForm token={token}/>} />
          <Route path='/content' exact element={<Content state={state} />} />
        </Routes>
      </div>
    </Router>
  </>
}
export default Application
