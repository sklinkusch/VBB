import React, { Component } from "react";
import Product from "./Product";
import "../styles/Departure.css";
import Barrier from "./Barrier";
import Bike from "./Bike";
import Warning from "./Warning";
import Status from "./Status";
import Warntext from "./Warntext";
import Stattext from "./Stattext";

export default class Departure extends Component {
  getDelay(delay, cancelled) {
    if (delay != null) {
      return Math.floor(delay / 60);
    } else if (cancelled) {
      return "X";
    } else {
      return "?";
    }
  }
  getPlanTime(realtime, delay) {
    let hours = Number(realtime.substr(0, 2));
    let minutes = Number(realtime.substr(3, 2));
    minutes -= delay;
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (minutes > 59) {
      minutes -= 60;
      hours += 1;
    }
    if (hours < 0) {
      hours += 24;
    }
    if (hours > 23) {
      hours -= 24;
    }
    let hourString = hours < 10 ? `0${hours}` : `${hours}`;
    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hourString}:${minuteString}`;
  }
  getTime(timestamp) {
    if (timestamp != null) {
      return timestamp.substr(11, 5);
    } else {
      return "";
    }
  }
  render() {
    let delayMin;
    if (this.props.dep.cancelled) {
      delayMin = this.getDelay(this.props.dep.delay, this.props.dep.cancelled);
    } else {
      delayMin = this.getDelay(this.props.dep.delay, false);
    }
    let realtime = this.getTime(this.props.dep.when);
    let plantime;
    if (this.props.dep.when != null && this.props.dep.delay != null) {
      plantime = this.getPlanTime(realtime, delayMin);
    } else if (this.props.dep.when != null && delayMin === "?") {
      plantime = realtime;
      realtime = "";
    } else {
      plantime = this.getTime(this.props.dep.formerScheduledWhen);
    }
    const product = this.props.dep.line.product;
    const line = this.props.dep.line.name;
    const direction = this.props.dep.direction;
    const stop = this.props.dep.stop.name;
    const remarks = this.props.dep.remarks;
    const platform = this.props.dep.platform;
    return (
      <React.Fragment>
        <div className="row" key={this.props.dep.tripId}>
          <div className="plantime">{plantime}</div>
          <div className="realtime">{realtime}</div>
          <div className="delay">{delayMin}</div>
          <Product product={product} />
          <div className="line">{line}</div>
          <div className="direction">{direction}</div>
          <div className="platform">{platform}</div>
          <div className="stophere">{stop}</div>
          <Barrier remarks={remarks} />
          <Bike remarks={remarks} />
          <Warning remarks={remarks} />
          <Status remarks={remarks} />
        </div>
        <Warntext remarks={remarks} />
        <Stattext remarks={remarks} />
      </React.Fragment>
    );
  }
}
