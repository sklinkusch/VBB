import React, { Component } from "react";
import Product from "./Product";
import "../styles/Departure.scss";
import Barrier from "./Barrier";
import Bike from "./Bike";
import Warning from "./Warning";
import Status from "./Status";
import Warntext from "./Warntext";
import Stattext from "./Stattext";
import Time from "./Time";

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
      plantime =
        this.getTime(this.props.dep.formerScheduledWhen) ||
        this.getTime(this.props.dep.scheduledWhen);
    }
    const product = this.props.dep.line.product;
    const line = this.props.dep.line.name;
    const direction = this.props.dep.direction;
    const remarks = this.props.dep.remarks;
    const platform = this.props.dep.platform;
    return (
      <React.Fragment>
        <div className="row" key={this.props.dep.tripId}>
          <Time time={plantime} />
          <Time time={realtime} />
          <div className="delay col-md-2 col-8">{delayMin}</div>
          <Product product={product} line={line} />
          <div className="line col-md-3 col-6">{line}</div>
          <div className="direction col-md-8 col-13">{direction}</div>
          <div className="platform col-md-2 col-3">{platform}</div>
          <Barrier remarks={remarks} />
          <Bike remarks={remarks} />
          <Warning remarks={remarks} />
          <Status remarks={remarks} />
        </div>
        <div className="row row-add" key={`add:${this.props.dep.tripId}`}>
          <Warntext remarks={remarks} />
          <Stattext remarks={remarks} />
        </div>
      </React.Fragment>
    );
  }
}
