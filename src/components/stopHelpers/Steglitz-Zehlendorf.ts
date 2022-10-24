type Dir = string | null

export function getBotanischerGarten() {
	return "S Botanischer Garten [Bus Gardeschützenweg]"
}

export function getBreitenbachplatz(lineName: string) {
	switch (lineName) {
		case "101":
		case "248":
		case "U3":
		case "N3":
			return "U Breitenbachplatz [Bus Südwestkorso]"
		case "282":
			return "U Breitenbachplatz [Bus Breitenbachplatz]"
		default:
			return "U Breitenbachplatz [Bus]"
	}
}

export function getDahlemDorf(mode: string, lineName: string) {
	if (mode === "arr") {
		switch (lineName) {
			case "M11":
				return "U Dahlem-Dorf [Bus Brümmerstr.]"
			default:
				return "U Dahlem-Dorf [Bus Königin-Luise-Str.]"
		}
	} else if (mode === "dep") {
		return "U Dahlem-Dorf [Bus Königin-Luise-Str.]"
	}
}

export function getFeuerbachstr() {
	return "S Feuerbachstr. [Bus Feuerbachstr.]"
}

export function getFreieUniversität(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "110":
				if (provenance.includes("Hertzallee"))
					return "U Freie Universität (Thielplatz) [Bus Löhleinstr.]"
				return "U Freie Universität (Thielplatz) [Bus Brümmerstr.]"
			case "U3":
			case "N3":
				if (provenance.includes("Mexikoplatz"))
					return "U Freie Universität (Thielplatz) [Bus Brümmerstr.]"
				return "U Freie Universität (Thielplatz) [Bus Löhleinstr.]"
			default:
				return "U Freie Universität (Thielplatz) [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "110":
				if (direction.includes("Zoo"))
					return "U Freie Universität (Thielplatz) [Bus Brümmerstr.]"
				return "U Freie Universität (Thielplatz) [Bus Löhleinstr.]"
			case "U3":
			case "N3":
				if (direction.includes("Wittenbergplatz"))
					return "U Freie Universität (Thielplatz) [Bus Brümmerstr.]"
				return "U Freie Universität (Thielplatz) [Bus Löhleinstr.]"
			default:
				return "U Freie Universität (Thielplatz) [Bus]"
		}
	}
}

export function getLankwitz() {
	return "S Lankwitz [Bus Leonorenstr.]"
}

export function getLichterfeldeWest() {
	return "S Lichterfelde West [Bus Drakestr.]"
}

export function getLichterfeldeOst() {
	return "S Lichterfelde Ost [Bus Lankwitzer Str.]"
}

export function getMexikoplatz() {
	return "S Mexikoplatz [Bus Lindenthaler Allee]"
}

export function getNikolassee(lineName: string) {
	switch (lineName) {
		case "112":
			return "S Nikolassee [Bus Hohenzollernplatz]"
		case "312":
		case "N16":
		case "N18":
			return "S Nikolassee [Bus Borussenstr.]"
		default:
			return "S Nikolassee [Bus]"
	}
}

export function getOsdorferStr(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "112":
				if (provenance.includes("Nikolassee"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 9]"
				if (provenance.includes("Zehlendorf"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 9]"
				return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
			case "186":
				if (provenance.includes("Grunewald"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 17]"
				if (provenance.includes("Roseneck"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 17]"
				return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
			case "N88":
				if (provenance.includes("Steglitz"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 17]"
				return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
			default:
				return "S Osdorfer Str. [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "112":
				if (direction.includes("Nikolassee"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
				if (direction.includes("Zehlendorf"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
				return "S Osdorfer Str. [Bus Osdorfer Str. 9]"
			case "186":
				if (direction.includes("Grunewald"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
				if (direction.includes("Roseneck"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
				return "S Osdorfer Str. [Bus Osdorfer Str. 17]"
			case "N88":
				if (direction.includes("Steglitz"))
					return "S Osdorfer Str. [Bus Osdorfer Str. 121]"
				return "S Osdorfer Str. [Bus Osdorfer Str. 17]"
			default:
				return "S Osdorfer Str. [Bus]"
		}
	}
}

export function getSteglitz(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000062282":
				if (["285", "N88"].includes(lineName))
					return ["S+U Rathaus Steglitz [Busbahnhof]", 6]
				if (["170", "283"].includes(lineName))
					return ["S+U Rathaus Steglitz [Busbahnhof]", 7]
				if (["188"].includes(lineName))
					return ["S+U Rathaus Steglitz [Busbahnhof]", 8]
				return ["S+U Rathaus Steglitz [Busbahnhof]", null]
			case "900000062784":
				if (lineName === "X83" && provenance.includes("Clayallee"))
					return ["S+U Rathaus Steglitz [Albrechtstr.]", 5]
				if (lineName === "282" && provenance.includes("Breitenbachplatz"))
					return ["S+U Rathaus Steglitz [Albrechtstr.]", 5]
				if (["M82", "X83", "282", "284", "380"].includes(lineName))
					return ["S+U Rathaus Steglitz [Albrechtstr.]", 4]
				if (["170"].includes(lineName))
					return ["S+U Rathaus Steglitz [Kuhligkshofstr.]", 11]
				return ["S+U Rathaus Steglitz [Albrechtstr.]", null]
			case "900000062782":
				if (lineName === "M48" && provenance.includes("Mohrenstr"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
				if (lineName === "M48") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
				if (
					["M85", "N88"].includes(lineName) &&
					provenance.includes("Lichterfelde")
				)
					return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
				if (lineName === "M85") return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
				if (lineName === "186" && provenance.includes("Lichterfelde"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
				if (lineName === "186") return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
				if (lineName === "283" && !provenance.includes("Fahrt"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 10]
				if (lineName === "285" && provenance.includes("Dahlem"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 10]
				if (["188", "283", "285"].includes(lineName))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
				if (lineName === "N9")
					return ["S+U Rathaus Steglitz [Schloßstr.]", null]
				return ["S+U Rathaus Steglitz [Schloßstr.]", null]
			default:
				return ["S+U Rathaus Steglitz", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000062282":
				if (["285", "N88"].includes(lineName))
					return ["S+U Rathaus Steglitz [Busbahnhof]", 6]
				if (["170", "283"].includes(lineName))
					return ["S+U Rathaus Steglitz [Busbahnhof]", 7]
				if (["188"].includes(lineName))
					return ["S+U Rathaus Steglitz [Busbahnhof]", 8]
				return ["S+U Rathaus Steglitz [Busbahnhof]", null]
			case "900000062784":
				if (lineName === "X83" && direction.includes("Clayallee"))
					return ["S+U Rathaus Steglitz [Albrechtstr.]", 4]
				if (lineName === "282" && direction.includes("Breitenbachplatz"))
					return ["S+U Rathaus Steglitz [Albrechtstr.]", 4]
				if (["M82", "X83", "282", "284", "380"].includes(lineName))
					return ["S+U Rathaus Steglitz [Albrechtstr.]", 5]
				if (["170"].includes(lineName))
					return ["S+U Rathaus Steglitz [Kuhligkshofstr.]", 9]
				return ["S+U Rathaus Steglitz [Albrechtstr.]", null]
			case "900000062782":
				if (lineName === "M48" && direction.includes("Mohrenstr"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
				if (lineName === "M48") return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
				if (
					["M85", "N88"].includes(lineName) &&
					direction.includes("Lichterfelde")
				)
					return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
				if (lineName === "M85") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
				if (lineName === "186" && direction.includes("Lichterfelde"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 2]
				if (lineName === "186") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
				if (lineName === "283" && !direction.includes("Fahrt"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
				if (lineName === "285" && direction.includes("Dahlem"))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 1]
				if (["188", "283", "285"].includes(lineName))
					return ["S+U Rathaus Steglitz [Schloßstr.]", 10]
				if (lineName === "N9") return ["S+U Rathaus Steglitz [Schloßstr.]", 3]
				return ["S+U Rathaus Steglitz [Schloßstr.]", null]
			default:
				return ["S+U Rathaus Steglitz", null]
		}
	}
}

export function getSüdende() {
	return "S Südende [Bus Steglitzer Damm]"
}

export function getSundgauerStr() {
	return "S Sundgauer Str. [Bus Sundgauer Str.]"
}

export function getWannsee(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "114":
			case "316":
			case "318":
			case "620":
				return ["S Wannsee [Bus]", 4]
			case "118":
				if (provenance.includes("Krumme Lanke")) return ["S Wannsee [Bus]", 2]
				if (provenance.includes("Rathaus Zehlendorf"))
					return ["S Wannsee [Bus]", 2]
				return ["S Wannsee [Bus]", 1]
			case "218":
				if (provenance.includes("Pfaueninsel")) return ["S Wannsee [Bus]", 3]
				return ["S Wannsee [Bus]", 2]
			case "F10":
				return ["S Wannsee [Fähre]", null]
			case "N16":
				if (provenance.includes("Nikolassee")) return ["S Wannsee [Bus]", 2]
				return ["S Wannsee [Bus]", 5]
			default:
				return ["S Wannsee [Bus]", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "114":
				return ["S Wannsee [Bus]", 2]
			case "118":
				if (direction.includes("Krumme Lanke")) return ["S Wannsee [Bus]", 1]
				if (direction.includes("Rathaus Zehlendorf"))
					return ["S Wannsee [Bus]", 1]
				return ["S Wannsee [Bus]", 2]
			case "218":
				if (direction.includes("Pfaueninsel")) return ["S Wannsee [Bus]", 2]
				return ["S Wannsee [Bus]", 3]
			case "316":
			case "318":
			case "620":
				return ["S Wannsee [Bus]", 2]
			case "F10":
				return ["S Wannsee [Fähre]", null]
			case "N16":
				if (direction.includes("Potsdam")) return ["S Wannsee [Bus]", 2]
				return ["S Wannsee [Bus]", 5]
			default:
				return ["S Wannsee [Bus]", null]
		}
	}
}

export function getZehlendorf(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "X10":
				if (provenance.includes("Teltow"))
					return ["S Zehlendorf [Bus Teltower Damm]", 3]
				if (provenance.includes("Andréezeile"))
					return ["S Zehlendorf [Bus Teltower Damm]", 3]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "101":
				if (provenance.includes("Sachtlebenstr"))
					return ["S Zehlendorf [Bus Teltower Damm]", 2]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "112":
				if (provenance.includes("Nikolassee"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				if (provenance.includes("Zehlendorf Eiche"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 3]
			case "115":
				if (provenance.includes("Lissabonallee"))
					return ["S Zehlendorf [Bus Teltower Damm]", 2]
				if (provenance.includes("Neuruppiner Str"))
					return ["S Zehlendorf [Bus Teltower Damm]", 2]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "285":
				if (provenance.includes("Waldfriedhof"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				if (provenance.includes("Oskar-Helene-Heim"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 3]
			case "623":
				if (provenance.includes("Kleinmachnow"))
					return ["S Zehlendorf [Bus Teltower Damm]", 2]
				if (provenance.includes("Stahnsdorf"))
					return ["S Zehlendorf [Bus Teltower Damm]", 2]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "N10":
				if (provenance.includes("Hertzallee"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 2]
			case "N12":
				if (provenance.includes("Zehlendorf Eiche"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 2]
			case "N84":
				if (provenance.includes("Zehlendorf Eiche"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 3]
			default:
				return ["S Zehlendorf [Bus]", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "X10":
				if (direction.includes("Teltow"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				if (direction.includes("Andréezeile"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 3]
			case "101":
				if (direction.includes("Sachtlebenstr"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 2]
			case "112":
				if (direction.includes("Nikolassee"))
					return ["S Zehlendorf [Bus Teltower Damm]", 3]
				if (direction.includes("Zehlendorf Eiche"))
					return ["S Zehlendorf [Bus Teltower Damm]", 3]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "115":
				if (direction.includes("Lissabonallee"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				if (direction.includes("Neuruppiner Str"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 2]
			case "285":
				if (direction.includes("Waldfriedhof"))
					return ["S Zehlendorf [Bus Teltower Damm]", 3]
				if (direction.includes("Oskar-Helene-Heim"))
					return ["S Zehlendorf [Bus Teltower Damm]", 3]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "623":
				if (direction.includes("Kleinmachnow"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				if (direction.includes("Stahnsdorf"))
					return ["S Zehlendorf [Bus Teltower Damm]", 1]
				return ["S Zehlendorf [Bus Teltower Damm]", 2]
			case "N10":
				if (direction.includes("Zoo"))
					return ["S Zehlendorf [Bus Teltower Damm]", 2]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "N12":
				if (direction.includes("Zehlendorf Eiche"))
					return ["S Zehlendorf [Bus Teltower Damm]", 2]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			case "N84":
				if (direction.includes("Zehlendorf Eiche"))
					return ["S Zehlendorf [Bus Teltower Damm]", 3]
				return ["S Zehlendorf [Bus Teltower Damm]", 1]
			default:
				return ["S Zehlendorf [Bus]", null]
		}
	}
}
