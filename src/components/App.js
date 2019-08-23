import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header";
import Timetable from "./Timetable";
import Legend from "./Legend";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Legend />
        <Timetable />
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
