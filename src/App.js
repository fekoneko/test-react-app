import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  const SERVER_URL = 'http://localhost:3500'

  return (
    <div className='App'>
      <Header />
      <Content SERVER_URL={ SERVER_URL } />
      <Footer />
    </div>
  );
}

export default App;
