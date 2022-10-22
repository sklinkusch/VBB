type Dir = string | null

export function getAnhalterBahnhof(lineName: string) {
	switch (lineName) {
		case "M29":
			return "S Anhalter Bahnhof [Bus Schöneberger Str.]"
		case "M41":
			return "S Anhalter Bahnhof [Bus Stresemannstr.]"
		default:
			return "S Anhalter Bahnhof [Bus]"
	}
}

export function getFrankfurterAllee(product: string, lineName: string) {
	switch (product) {
		case "tram":
			return "S+U Frankfurter Allee [Tram Möllendorffstr.]"
		case "bus":
			switch (lineName) {
				case "U5":
				case "N5":
					return "S+U Frankfurter Allee [Bus Frankfurter Allee]"
				case "M13":
				case "16":
					return "S+U Frankfurter Allee [Bus Möllendorffstr.]"
				default:
					return "S+U Frankfurter Allee [Bus]"
			}
	}
}

export function getGörlitzerBf(lineName: string) {
	switch (lineName) {
		case "U1":
		case "N1":
			return "U Görlitzer Bahnhof [Bus Skalitzer Str.]"
		default:
			return "U Görlitzer Bahnhof [Bus Wiener Str.]"
	}
}

export function getOstbahnhof() {
	return "S Ostbahnhof [Bus Am Ostbahnhof]"
}

export function getOstkreuz(lineName: string) {
	switch (lineName) {
		case "M43":
		case "194":
		case "347":
		case "N94":
			return "S Ostkreuz [Bus Hauptstr.]"
		default:
			return "S Ostkreuz [Bus]"
	}
}

export function getSchlesischesTor(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "U1":
			case "N1":
				if (provenance.includes("Helsingforser Platz"))
					return "U Schlesisches Tor [Bus Skalitzer Str.]"
				return "U Schlesisches Tor [Bus Oppelner Str.]"
			default:
				return "U Schlesisches Tor [Bus Köpenicker Str.]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "U1":
			case "N1":
				if (direction.includes("Warschauer Str."))
					return "U Schlesisches Tor [Bus Oppelner Str.]"
				return "U Schlesisches Tor [Bus Skalitzer Str.]"
			default:
				return "U Schlesisches Tor [Bus Köpenicker Str.]"
		}
	}
}

export function getWarschauerStr(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M10":
				return ["S+U Warschauer Str. [Warschauer Str.]", 4]
			case "300":
				return ["S+U Warschauer Str. [Tamara-Danz-Str.]", 8]
			case "347":
				if (provenance.includes("Tunnelstr"))
					return ["S+U Warschauer Str. [Warschauer Str.]", 6]
				return ["S+U Warschauer Str. [Warschauer Str.]", 3]
			default:
				return ["S+U Warschauer Str.", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M10":
				return ["S+U Warschauer Str. [Warschauer Str.]", 5]
			case "300":
				return ["S+U Warschauer Str. [Tamara-Danz-Str.]", 7]
			case "347":
				if (direction.includes("Tunnelstr"))
					return ["S+U Warschauer Str. [Warschauer Str.]", 3]
				return ["S+U Warschauer Str. [Warschauer Str.]", 6]
			default:
				return ["S+U Warschauer Str.", null]
		}
	}
}
