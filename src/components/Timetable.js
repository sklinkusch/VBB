import React, { Component } from "react";
import createHafas from "vbb-hafas";
import stops from "./stops";

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStop: stops[0].id,
      data: null
    };
    // this.getData();
  }
  getData() {
    const stopid = this.state.currentStop.id;
    //const stopname = this.state.currentStop.name;
    const hafas = createHafas("my-awesome-program");
    hafas
      .departures(stopid, { duration: 60 })
      .then(departures => this.saveData(departures))
      .catch(console.error);
  }
  handleChange = value => {
    this.setState({ currentStop: value });
  };
  render() {
    return (
      <div>
        <select onChange={event => this.handleChange(event.target.value)}>
          {stops.map(stop => (
            <option key={stop.id} value={stop.id}>
              {stop.name}
            </option>
          ))}
        </select>
        <div />
      </div>
    );
  }
  saveData = data => {
    this.setState({ data: data });
  };
}
