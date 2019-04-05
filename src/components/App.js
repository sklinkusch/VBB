import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Timetable from "./Timetable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timetable />
      </div>
    );
  }
}

export default App;
