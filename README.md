# VBB

This website was created by Stefan Klinkusch using React.js. It contains the departures for selected stations and tram/bus stops in and around Berlin.

## Features

It features

- an input field to search for stations
- a dropdown list with all available stations or a selection of them
- a refresh button to get the _current_ data for the selected station
- a list of departures with necessary data, such as
  - the time, as it is stated in the timetable
  - the time when the bus/train will (hopefully) depart in real time
  - the delay in minutes
  - the line or train number
  - the destination of this line
  - the track on which the train is departing (in stations)
  - the stop from which the bus/train will depart (sometimes, nearby stops are included in the list)
  - information about barrier-free means of transport
  - information about the possibilities of bike transport in the trains/buses/ferries
  - warnings concerning detours
  - status information, such as cancellations or additional service

## Acknowledgments

- data: [Verkehrsverbund Berlin-Brandenburg (VBB)](http://www.vbb.de)
- data-management: [hafas-client package of Jannis Redmann](https://github.com/derhuerst/hafas-client)
- background image: [Unsplash](https://unsplash.com)
- Proxy: [Zeit.co](https://zeit.co/)
- Support to set up the proxy: [Leandro Frigerio](https://github.com/leandroDCI)

## Screenshot

<img src="./Screenshot.png">

## Link

[to the page](https://sklinkusch.github.io/VBB/)
