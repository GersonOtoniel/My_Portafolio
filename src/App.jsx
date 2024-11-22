import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Para from './components/About';
import Work from './components/Work';
import Website from './components/website';
import Home from './components/Home';
import CompiladoresUno from './Works/Compilador';

const App = () => {
  return (
    <Router>
       <Website Component={RoutesComponent} pageProps={{}} />
    </Router>
  );
};

const RoutesComponent = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/work' element={<Work />}/>
    <Route path='/about' element={<Para />} />
    <Route path='/ProyectoCompiladores1' element={<CompiladoresUno />}/>
  </Routes>
);

export default App;
