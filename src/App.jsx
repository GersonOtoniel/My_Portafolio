import React from 'react';
import Navbar from './components/Navbar';
import Para from './components/Text';
import Website from './components/website';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Wrapper />
    </Router>
  );
};

const Wrapper = () => {
  return (
    <Website Component={RoutesComponent} pageProps={{}} />
  );
};

const RoutesComponent = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<Para />} />
  </Routes>
);

export default App;
