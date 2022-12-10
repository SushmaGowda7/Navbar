import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopNav from './component/TopNav';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';
import Other from './pages/Other.jsx';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
     <TopNav/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/service' element = {<Service/>}/>
          <Route path = '/other' element = {<Other/>}/>
        </Routes>
    </Fragment>
  );
};

export default App;