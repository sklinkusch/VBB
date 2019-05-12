import React, { Component } from "react";
import "../styles/Timetable.css";
import stops from "../data/stops";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import TableData from "./TableData";
import StopName from "./StopName";
import Error from "./Error";

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.duration = 60;
    this.inputField = React.createRef();
    this.state = {
      data: null,
      value: "900000160541",
      stop: "Josef-Orlopp-Str./Vulkanstr.",
      selection: stops
    };
  }
  filterStops = value => {
    const stopDefault = { id: this.state.value, name: this.state.stop };
    let furtherStops;
    if (value !== "") {
      furtherStops = stops.filter(
        stop =>
          stop.name.toLowerCase().includes(value.toLowerCase()) &&
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
      .then(response => {
        if (!response.ok) {
          let err = new Error(`HTTP status code: ${response.status}`);
          throw err;
        }
        return response.json();
      })
      .then(data => {
        this.setState({ error: null });
        return this.saveData(data);
      })
      .catch(error => {
        this.setState({ error: error });
        this.setState({ data: null });
        this.inputField.current.value = "";
      });
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
    this.filterStops("");
  }
  saveData = data => {
    // console.log(data);
    this.setState({ data: data });
    this.setState({ selection: stops });
    this.inputField.current.value = "";
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
  splitArray(data) {
    let resultArray = [];
    let lowestValue = 0;
    if (data === undefined) {
      return null;
    }
    while (lowestValue < data.length) {
      let lowestResult = data[lowestValue].stop.name;
      let highestValue;
      let filtered;
      for (let i = lowestValue; i < data.length; i++) {
        if (data[i].stop.name !== lowestResult) {
          highestValue = i;
          break;
        }
      }
      filtered = data.slice(lowestValue, highestValue);
      resultArray.push(filtered);
      lowestValue = highestValue;
    }
    return resultArray;
  }
  render() {
    const data = this.sortData();
    const newData = this.splitArray(data);
    return (
      <div>
        <Input filterStops={this.filterStops} inputField={this.inputField} />
        <Select
          handleChange={this.handleChange}
          selection={this.state.selection}
        />
        <Button handleSubmit={this.handleSubmit} />
        <StopName stop={this.state.stop} element="h2" />
        {this.state.error && <Error />}
        {newData !== undefined &&
          newData !== null &&
          newData.map((depset, index) => {
            return (
              <TableData
                stop={depset[0].stop.name}
                data={depset}
                duration={this.state.duration}
                key={index}
              />
            );
          })}
      </div>
    );
  }
}
