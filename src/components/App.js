import React from "react";
import "../styles/App.scss";
import Header from "./Header";
import Timetable from "./Timetable";
import Legend from "./Legend";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <Header />
      <Legend />
      <Timetable />
      <Footer />
    </div>
  );
}

export default App;
