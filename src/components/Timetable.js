import React, { useRef, useState, useEffect } from "react";
import "../styles/Timetable.css";
import stops from "../data/stops";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import TableData from "./TableData";
import StopName from "./StopName";
import Error from "./Error";
import Filter from "./Filter";
import { getDuration } from "./helpers";

export default function Timetable() {
    const inputField = useRef(null);
    const filterField = useRef(null);
    const filterSelector = useRef(null);
    const [data, setData] = useState(null);
    const [viewdata, setViewdata] = useState(null);
    const [error, setError] = useState(null);
    const [stop, setStop] = useState({
        id: "900000160541",
        name: "Josef-Orlopp-Str./Vulkanstr.",
        type: "BLN",
        duration: getDuration("BLN")
    });
    const [selection, setSelection] = useState(stops);
    const filterAnd = filterValues => {
        const filteredData = data.filter(departure => {
            let decider = true;
            for (let i = 0; i < filterValues.length; i++) {
                if (
                    departure.line.name
                    .toLowerCase()
                    .includes(filterValues[i].toLowerCase()) ||
                    departure.direction
                    .toLowerCase()
                    .includes(filterValues[i].toLowerCase())
                ) {
                    continue;
                } else {
                    decider = false;
                    break;
                }
            }
            return decider;
        });
        setViewdata(filteredData);
    };
    const filterData = () => {
        if (filterField.current.value === "") {
            setViewdata(data);
        } else {
            const filterValues = filterField.current.value.split(" ");
            const filterMode = filterSelector.current.value;
            if (filterMode === "OR") {
                filterOr(filterValues);
            } else {
                filterAnd(filterValues);
            }
        }
    };
    const filterOr = filterValues => {
        const filteredData = data.filter(departure => {
            let decider = false;
            for (let i = 0; i < filterValues.length; i++) {
                if (
                    departure.line.name
                    .toLowerCase()
                    .includes(filterValues[i].toLowerCase()) ||
                    departure.direction
                    .toLowerCase()
                    .includes(filterValues[i].toLowerCase())
                ) {
                    decider = true;
                    break;
                }
            }
            return decider;
        });
        setViewdata(filteredData);
    };
    const filterStops = value => {
        const stopDefault = stop;
        let furtherStops;
        if (value !== "") {
            furtherStops = stops.filter(
                myStop =>
                myStop.name.toLowerCase().includes(value.toLowerCase()) &&
                myStop.name !== stopDefault.name
            );
        } else {
            furtherStops = stops.filter(myStop => myStop.name !== stopDefault.name);
        }
        const selectedStops = [stopDefault, ...furtherStops];
        setSelection(selectedStops);
    };
    const getData = (stop) => {
        const { id, type = "BBG" } = stop;
        const duration = getDuration(type);
        fetch(
            `https://sklinkusch-vbbmicro.now.sh/?station=${id}&duration=${duration}`
        )
        .then(response => {
            if (!response.ok) {
                let err = new Error(`HTTP status code: ${response.status}`);
                throw err;
            }
            return response.json();
        })
        .then(data => {
            setError(null);
            return saveData(data);
        })
        .catch(myError => {
            setError(myError);
            setData(null);
            setViewdata(null);
            inputField.current.value = "";
        });
    }
    const handleChange = myStop => {
        setStop(myStop);
        getData(myStop);
    };
    const handleSubmit = () => {
        // console.log(stop);
        getData(stop);
    };
    useEffect(() => {
        getData(stop);
        filterStops("");
    });
    const saveData = newData => {
        // console.log(newData);
        setData(newData);
        setViewdata(newData);
        setSelection(stops);
        inputField.current.value = "";
        filterField.current.value = "";
        filterSelector.current.value = "OR";
    };
    const sortData = () => {
        if (
            viewdata !== null &&
            viewdata !== undefined &&
            viewdata.length > 0
        )
            return viewdata.sort((a, b) => {
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
    const splitArray = (myData) => {
        let resultArray = [];
        let lowestValue = 0;
        if (myData === undefined) {
            return null;
        }
        while (lowestValue < myData.length) {
            let lowestResult = myData[lowestValue].stop.name;
            let highestValue;
            let filtered;
            for (let i = lowestValue; i < myData.length; i++) {
                if (myData[i].stop.name !== lowestResult) {
                    highestValue = i;
                    break;
                }
            }
            filtered = myData.slice(lowestValue, highestValue);
            resultArray.push(filtered);
            lowestValue = highestValue;
        }
        return resultArray;
    }
    const sortedData = sortData();
    const newData = splitArray(sortedData);
    const text = `In the next ${
      stop.duration
    } minutes, no departures are planned for the station or stop you have chosen.`;
    return (
      <div>
        <Input filterStops={filterStops} inputField={inputField} />
        <Select
          handleChange={handleChange}
          selection={selection}
        />
        <Button handleSubmit={handleSubmit} />
        <Filter
          filterField={filterField}
          filterSelector={filterSelector}
          filterData={filterData}
        />
        <StopName stop={stop.name} element="h2" />
        {error && <Error />}
        {newData !== undefined && newData !== null && newData.length > 0 ? (
            newData.map((depset, index) => {
                return (
                    <TableData
                    stop={depset[0].stop.name}
                    data={depset}
                    key={index}
                    />
                );
            })
        ) : (
            <div>{text}</div>
        )}
        </div>
    );
}
