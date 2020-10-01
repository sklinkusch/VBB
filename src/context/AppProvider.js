import React, { Component } from "react"
import AppContext from "./AppContext"
import stops from "../data/stops"
import { getDuration } from "../components/helpers"
import axios from "axios"

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allStops: [],
      selection: [],
      stop: {},
      data: [],
      viewdata: [],
      error: null,
      filterOr: (filterValues) => {
        const filteredData = this.state.data.filter((departure) => {
          let decider = false
          for (let i = 0; i < filterValues.length; i++) {
            if (
              departure.line.name
                .toLowerCase()
                .includes(filterValues[i].toLowerCase()) ||
              departure.direction
                .toLowerCase()
                .includes(filterValues[i].toLowerCase())
            ) {
              decider = true
              break
            }
          }
          return decider
        })
        this.setState({ viewdata: filteredData })
      },
      filterAnd: (filterValues) => {
        const filteredData = this.state.data.filter((departure) => {
          let decider = true
          for (let i = 0; i < filterValues.length; i++) {
            if (
              departure.line.name
                .toLowerCase()
                .includes(filterValues[i].toLowerCase()) ||
              departure.direction
                .toLowerCase()
                .includes(filterValues[i].toLowerCase())
            ) {
              continue
            } else {
              decider = false
              break
            }
          }
          return decider
        })
        this.setState({ viewdata: filteredData })
      },
      noFilters: () => {
        this.setState({ viewdata: this.state.data })
      },
      filterStops: (filterValue) => {
        const remainingStops = stops.filter(
          (stop) =>
            stop.id !== this.state.selection.id &&
            stop.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        const newSelection = [this.state.selection, ...remainingStops]
        this.setState({ selection: newSelection })
      },
      setStop: (id) => {
        const currentStopArray = stops.filter((stop) => stop.id === id)
        const [currentStop] = currentStopArray
        this.setState({ stop: currentStop })
      },
      getData: async (id) => {
        const currentStopArray = stops.filter((stop) => stop.id === id)
        const [currentStop] = currentStopArray
        const { type = "BBG" } = currentStop
        const duration = getDuration(type)
        const url = `https://sklinkusch-vbbmicro.now.sh/?station=${id}&duration=${duration}`
        const response = await axios.get(url)
        const { data, status } = await response
        if (status === 500 || status !== 200) {
          this.setState({ error: `HTTP status code: ${status}`, data: [] })
        } else {
          this.setState({ data: data, viewdata: data, error: null })
        }
      },
    }
  }
  componentDidMount() {
    const initialStopArray = stops.filter(
      (stop) => stop.name === "U Stadtmitte"
    )
    const [initialStop] = initialStopArray
    const { id: initialId } = initialStop
    this.setState({ allStops: stops, selection: stops, stop: initialStop })
    this.state.getData(initialId)
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
