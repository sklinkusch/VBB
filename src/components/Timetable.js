import React, { Component } from "react";
import createHafas from "vbb-hafas";

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stops: [{ id: "900000160541", name: "Josef-Orlopp-Str./Vulkanstr." }],
      currentStop: { id: "900000160541", name: "Josef-Orlopp-Str./Vulkanstr." },
      data: null
    };
    this.getData();
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
  handleChange(e) {
    this.setState({ currentStop: e.target.value });
  }
  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          {this.state.stops.map(stop => (
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
