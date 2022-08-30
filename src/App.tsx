import React from 'react';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import AppRouter from './navigation/AppRouter';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
