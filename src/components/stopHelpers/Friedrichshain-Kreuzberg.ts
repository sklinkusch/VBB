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
			return ["S+U Frankfurter Allee [Tram Möllendorffstr.]", 4]
		case "bus":
			switch (lineName) {
				case "U5":
				case "N5":
					return ["S+U Frankfurter Allee [Bus Frankfurter Allee]", 5]
				case "M13":
				case "16":
					return ["S+U Frankfurter Allee [Bus Möllendorffstr.]", 6]
				default:
					return ["S+U Frankfurter Allee [Bus]", 7]
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

export function getHalleschesTor(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M41":
				if (/(Hauptbahnhof|Philharmonie)/.test(provenance))
					return "U Hallesches Tor [Bus Waterloo-Ufer]"
				return "U Hallesches Tor [Bus Hallesches Ufer]"
			case "248":
				return "U Hallesches Tor [Hallesche-Tor-Brücke]"
			case "U1":
			case "N1":
				if (provenance.includes("Helsingforser Platz"))
					return "U Hallesches Tor [Bus Hallesches Ufer]"
				return "U Hallesches Tor [Bus Waterloo-Ufer]"
			case "N42":
				if (provenance.includes("Alexanderpl"))
					return "U Hallesches Tor [Bus Hallesches Ufer]"
				return "U Hallesches Tor [Bus Waterloo-Ufer]"
			default:
				return "U Hallesches Tor [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M41":
				if (/(Hauptbahnhof|Philharmonie)/.test(direction))
					return "U Hallesches Tor [Bus Hallesches Ufer]"
				return "U Hallesches Tor [Bus Waterloo-Ufer]"
			case "248":
				return "U Hallesches Tor [Hallesche-Tor-Brücke]"
			case "U1":
			case "N1":
				if (direction.includes("Warschauer Str"))
					return "U Hallesches Tor [Bus Waterloo-Ufer]"
				return "U Hallesches Tor [Bus Hallesches Ufer]"
			case "N42":
				if (direction.includes("Alexanderpl"))
					return "U Hallesches Tor [Bus Waterloo-Ufer]"
				return "U Hallesches Tor [Bus Hallesches Ufer]"
			default:
				return "U Hallesches Tor [Bus]"
		}
	}
}

export function getMöckernbrücke(
	mode: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		if (provenance.includes("Helsingforser Platz"))
			return "U Möckernbrücke [Bus Hallesches Ufer]"
		return "U Möckernbrücke [Bus Tempelhofer Ufer]"
	} else if (mode === "dep" && direction !== null) {
		if (direction.includes("Warschauer Str"))
			return "U Möckernbrücke [Bus Tempelhofer Ufer]"
		return "U Möckernbrücke [Bus Hallesches Ufer]"
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

export function getPrinzenstr(lineName: string) {
	switch (lineName) {
		case "U1":
		case "N1":
			return "U Prinzenstr. [Bus Gitschiner Str.]"
		default:
			return "U Prinzenstr. [Bus Prinzenstr.]"
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

export function getStrausbergerPlatz(lineName: string) {
	switch (lineName) {
		case "142":
			return "U Strausberger Platz [Bus Lebuser Str.]"
		case "U5":
		case "N5":
			return "U Strausberger Platz [Bus K.-Marx-Str.]"
		default:
			return "U Strausberger Platz [Bus]"
	}
}

export function getWarschauerStr(
	mode: string,
	product: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (product) {
			case "tram":
				switch (lineName) {
					case "M10":
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 4, 3]
					default:
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 4, 3]
				}
			case "bus":
				switch (lineName) {
					case "300":
						return ["S+U Warschauer Str. [Bus T.-Danz-Str.]", 8, 5]
					case "347":
						if (provenance.includes("Tunnelstr"))
							return ["S+U Warschauer Str. [Bus Warschauer Str.]", 6, 4]
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", 3, 4]
					default:
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", null, 4]
				}
			default:
				return ["S+U Warschauer Str.", null, 6]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (product) {
			case "tram":
				switch (lineName) {
					case "M10":
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 5, 3]
					default:
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 5, 3]
				}
			case "bus":
				switch (lineName) {
					case "300":
						return ["S+U Warschauer Str. [Bus T.-Danz-Str.]", 7, 5]
					case "347":
						if (direction.includes("Tunnelstr"))
							return ["S+U Warschauer Str. [Bus Warschauer Str.]", 3, 4]
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", 6, 4]
					default:
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", null, 4]
				}
			default:
				return ["S+U Warschauer Str.", null, 6]
		}
	}
}

export function getWeberwiese(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "347":
				if (provenance.includes("Ostbahnhof"))
					return "U Weberwiese [Bus H.-Jadamowitz-Str.]"
				return "U Weberwiese [Bus Marchlewskistr.]"
			case "U5":
			case "N5":
				return "U Weberwiese [Bus K.-Marx-Str.]"
			default:
				return "U Weberwiese [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "347":
				if (direction.includes("Ostbahnhof"))
					return "U Weberwiese [Bus Marchlewskistr.]"
				return "U Weberwiese [Bus H.-Jadamowitz-Str.]"
			case "U5":
			case "N5":
				return "U Weberwiese [Bus K.-Marx-Str.]"
			default:
				return "U Weberwiese [Bus]"
		}
	}
}
