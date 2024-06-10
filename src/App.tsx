import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Social from './shared/socialnetwork';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './router';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Social/>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
