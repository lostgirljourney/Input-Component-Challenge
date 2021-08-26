import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <div>
    <Navbar />
    <App />
    <Footer />
  </div>,
  document.getElementById( 'root' )
);

