import React, { Component } from "react";
import Departure from "./Departure";
import Tablehead from "./Tablehead";
import "../styles/Timetable.css";
import Error from "./Error";
const stopObject = require("vbb-stations/full.json");
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
const stopsFilter = stopsUnsorted.filter(
  stop => stop.name.includes("(Berlin)") || stop.name.startsWith("Berlin,")
);
const stops = stopsFilter.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
    return +1;
  } else {
    return 0;
  }
});

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.duration = 60;
    this.state = {
      data: null,
      value: "900000160541",
      stop: "Josef-Orlopp-Str./Vulkanstr.",
      selection: stops
    };
  }
  filterStops = event => {
    const stopDefault = { id: this.state.value, name: this.state.stop };
    let furtherStops;
    if (event.target.value !== "") {
      furtherStops = stops.filter(
        stop =>
          stop.name.toLowerCase().includes(event.target.value.toLowerCase()) &&
          stop.name !== this.state.stop
      );
    } else {
      furtherStops = stops.filter(stop => stop.name !== this.state.stop);
    }
    const selectedStops = [stopDefault, ...furtherStops];
    this.setState({ selection: selectedStops });
  };
  getData(stopid) {
    fetch(`https://sklinkusch-vbbmicro.now.sh/?${stopid}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ error: null });
        return this.saveData(data);
      })
      .catch(error => this.setState({ error: error }));
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
        <input
          type="text"
          onChange={event => this.filterStops(event)}
          id="stopinput"
          placeholder="Insert stop, then choose from list"
        />
        <select
          onChange={event =>
            this.handleChange(
              event.target.value,
              event.target.options[event.target.selectedIndex].text
            )
          }
        >
          {this.state.selection.map(stop => (
            <option key={stop.id} value={stop.id}>
              {stop.name}
            </option>
          ))}
        </select>
        <button onClick={() => this.handleSubmit()}>Refresh</button>
        <div>
          <h2>{this.state.stop}</h2>
          <Error props={this.state.error} />
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
    this.setState({ selection: stops });
    document.getElementById("stopinput").value = "";
  };
  sortData() {
    if (
      this.state.data !== null &&
      this.state.data !== undefined &&
      this.state.data.length > 0
    )
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
