import React from 'react';
import Para from './components/Text';
import Website from './components/website';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Route path='/about' element={<Para />} />
  </Routes>
);

export default App;
