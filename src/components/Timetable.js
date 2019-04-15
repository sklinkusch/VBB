import React, { Component } from "react";
import stops from "../data/stops";
import Departure from "./Departure";
import Tablehead from "./Tablehead";
import "../styles/Timetable.css";
const createHafas = require("vbb-hafas");
// const express = require("express");
// const cors = require("cors");

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      value: stops[0].id,
      stop: stops[0].name
    };
    this.getData(stops[0].id);
  }
  getData(stopid) {
    const hafas = createHafas("my-awesome-program");
    // const app = express();
    // app.use(cors());
    // app.get("*", function(req, res, next) {
    //   res.json({ msg: "This is CORS-enabled for all origins!" });
    // });
    // app.listen(80, function() {
    //   console.log("CORS-enabled web server listening on port 80");
    // });
    hafas
      .departures(stopid, { duration: 60 })
      .then(departures => this.saveData(departures))
      .catch(console.error);
  }
  handleChange = (value, name) => {
    this.setState({ value: value, stop: name });
    this.getData(value);
  };
  handleSubmit = () => {
    // console.log(this.state.value);
    this.getData(this.state.value);
  };
  render() {
    const data = this.sortData();
    return (
      <div>
        <select
          onChange={event =>
            this.handleChange(
              event.target.value,
              event.target.options[event.target.selectedIndex].text
            )
          }
        >
          {stops.map(stop => (
            <option key={stop.id} value={stop.id}>
              {stop.name}
            </option>
          ))}
        </select>
        <button onClick={() => this.handleSubmit()}>Refresh</button>
        <div>
          <h2>{this.state.stop}</h2>
          <Tablehead />
          {data != null ? (
            data.map(dep => {
              const identifier = `${dep.stop.id}:${dep.tripId}.${dep.when}`;
              return <Departure dep={dep} key={identifier} />;
            })
          ) : (
            <div>{data}</div>
          )}
        </div>
      </div>
    );
  }
  saveData = data => {
    // console.log(data);
    this.setState({ data: data });
  };
  sortData() {
    if (this.state.data != null)
      return this.state.data.sort((a, b) => {
        if (a.stop.name.toLowerCase() < b.stop.name.toLowerCase()) {
          return -1;
        } else if (b.stop.name.toLowerCase() < a.stop.name.toLowerCase()) {
          return +1;
        } else {
          const sortingArray = [
            "express",
            "regional",
            "suburban",
            "subway",
            "tram",
            "bus",
            "ferry"
          ];
          if (
            sortingArray.indexOf(a.line.product) <
            sortingArray.indexOf(b.line.product)
          ) {
            return -1;
          } else if (
            sortingArray.indexOf(b.line.product) <
            sortingArray.indexOf(a.line.product)
          ) {
            return +1;
          } else {
            return 0;
          }
        }
      });
  }
}
