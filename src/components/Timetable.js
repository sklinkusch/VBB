import React, { Component } from "react";
import createHafas from "vbb-hafas";
import createCollectDeps from "hafas-collect-departures-at";
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
    const stopid = this.state.currentStop;
    const hafas = createHafas("my-awesome-program");
    const collectDeps = createCollectDeps(hafas.departures);
    const depsAt = collectDeps(stopid, Date.now());

    const fetchDeps = async () => {
      let iterations = 0;
      for await (let deps of depsAt) {
        if (++iterations > 2) break;
        console.log(deps);
      }
    };
    fetchDeps().catch(console.error);
  }
  handleChange = value => {
    this.setState({ currentStop: value });
    this.getData();
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
    console.log(data);
    this.setState({ data: data });
  };
}
