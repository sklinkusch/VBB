import React from 'react';
import { HashRouter } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Timetable from './Timetable';
import Legend from './Legend';
import Footer from './Footer';

function App() {
  return (
    <div className="App container">
      <HashRouter hashType="noslash">
        <Header />
        <Legend />
        <Timetable />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
