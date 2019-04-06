import React, { Component } from "react";
import stops from "./stops";
import Departure from "./Departure";
const createHafas = require("vbb-hafas");

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.getData(stops[0].id);
  }
  getData(stopid) {
    const hafas = createHafas("my-awesome-program");

    hafas
      .departures(stopid, { duration: 60 })
      .then(departures => this.saveData(departures))
      .catch(console.error);
  }
  handleChange = value => {
    this.getData(value);
  };
  render() {
    const data = this.sortData();
    return (
      <div>
        <select onChange={event => this.handleChange(event.target.value)}>
          {stops.map(stop => (
            <option key={stop.id} value={stop.id}>
              {stop.name}
            </option>
          ))}
        </select>
        <div>
          {data != null ? (
            data.map(dep => {
              const identifier = `${dep.stop.id}:${dep.tripId}`;
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
    console.log(data);
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
          return 0;
        }
      });
  }
}
