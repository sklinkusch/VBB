import React, { Component } from "react";
import stops from "../data/stops";
import Departure from "./Departure";
import Tablehead from "./Tablehead";
import "../styles/Timetable.css";

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.duration = 60;
    this.state = {
      data: null,
      value: stops[0].id,
      stop: stops[0].name
    };
  }
  getData(stopid) {
    fetch(`https://sklinkusch-vbbmicro.now.sh/?${this.state.value}`)
      .then(response => response.json())
      .then(data => this.saveData(data))
      .catch(console.error);
    // hafas
    //   .departures(stopid, { duration: this.duration })
    //   .then(departures => this.saveData(departures))
    //   .catch(console.error);
  }
  handleChange = (value, name) => {
    this.setState({ value: value, stop: name });
    this.getData(value);
  };
  handleSubmit = () => {
    // console.log(this.state.value);
    this.getData(this.state.value);
  };
  componentDidMount() {
    this.getData(this.state.value);
  }
  render() {
    const data = this.sortData();
    const text = `In the next ${
      this.duration
    } minutes, no departures are planned for the station or stop you have chosen.`;
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
          {data !== undefined && data !== null && data.length > 0 ? (
            data.map(dep => {
              const identifier = `${dep.stop.id}:${dep.tripId}.${dep.when}`;
              return <Departure dep={dep} key={identifier} />;
            })
          ) : (
            <div>{text}</div>
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
