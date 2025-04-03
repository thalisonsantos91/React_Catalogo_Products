import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <>    
      <Navbar/>
      <div>
        <h1>Olá, Bem-vindo!</h1>
        <hr />
        <p>Esse é o nosso ecommerce.</p>
      </div>
      <Footer/>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);
