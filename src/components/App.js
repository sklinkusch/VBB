import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Timetable from "./Timetable";
import Legend from "./Legend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Legend />
        <Timetable />
      </div>
    );
  }
}

export default App;
