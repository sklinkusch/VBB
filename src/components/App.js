import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Timetable from "./Timetable";
import Legend from "./Legend";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Legend />
        <Timetable />
        <Footer />
      </div>
    );
  }
}

export default App;
