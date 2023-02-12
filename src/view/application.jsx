import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '../assets/styles/app.scss';
import '../assets/styles/effect.scss'
import { storage as st } from '../model/utils/util';
import { products } from '../model/utils/data';
import dao from '../model/dao/fetchApi'
import NavBar from './components/navbar';
import HomePage from './pages/HomePage';
import Content from './pages/Content'
import LoginForm from './pages/LoginForm';

const Application = () => {

  // test fetch API
  // dao.del('http://localhost:8080/api/categories/4')
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err))

  const state = useState({ cart: st.get('cart') || [], products });

  return <>
    <Router>
      <div className="App">
        <NavBar state={state} />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/login' exact element={<LoginForm />} />
          <Route path='/content' exact element={<Content state={state} />} />
        </Routes>
      </div>
    </Router>
  </>
}
export default Application
