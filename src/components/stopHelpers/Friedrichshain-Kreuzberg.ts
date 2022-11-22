type Dir = string | null
type Mode = "dep" | "arr"

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

export function getGneisenaustr(lineName: string) {
	switch (lineName) {
		case "140":
		case "U7":
		case "N7":
			return ["U Gneisenaustr. [Bus Gneisenaustr.]", 2]
		case "248":
			return ["U Gneisenaustr. [Bus Zossener Str.]", 3]
		default:
			return ["U Gneisenaustr. [Bus]", 4]
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
	mode: Mode,
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

export function getMehringdamm(id: string, lineName: string) {
	switch (id) {
		case "900000017101":
			switch (lineName) {
				case "U6":
				case "N6":
				case "N42":
					return ["U Mehringdamm [Bus Mehringdamm]", 3]
				default:
					return ["U Mehringdamm [Bus Yorckstr.]", 2]
			}
		case "900000017171":
			return ["U Mehringdamm [Bus Gneisenaustr.]", 4]
		default:
			return ["U Mehringdamm [Bus]", 5]
	}
}

export function getMöckernbrücke(mode: Mode, direction: Dir, provenance: Dir) {
	if (mode === "arr" && provenance !== null) {
		if (provenance.includes("Helsingforser Platz"))
			return ["U Möckernbrücke [Bus Hallesches Ufer]", 4]
		return ["U Möckernbrücke [Bus Tempelhofer Ufer]", 5]
	} else if (mode === "dep" && direction !== null) {
		if (direction.includes("Warschauer Str"))
			return ["U Möckernbrücke [Bus Tempelhofer Ufer]", 5]
		return ["U Möckernbrücke [Bus Hallesches Ufer]", 4]
	}
}

export function getMoritzplatz() {
	return ["U Moritzplatz [Bus Oranienstr.]", 2]
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
	mode: Mode,
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

export function getSchönleinstr() {
	return ["U Schönleinstr. [Bus Kottbusser Damm]", 2]
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

export function getSüdstern() {
	return ["U Südstern [Bus Hasenheide]", 2]
}

export function getWarschauerStr(
	mode: Mode,
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
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 4, 4]
					default:
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 4, 4]
				}
			case "bus":
				switch (lineName) {
					case "300":
						return ["S+U Warschauer Str. [Bus T.-Danz-Str.]", 8, 6]
					case "347":
						if (provenance.includes("Tunnelstr"))
							return ["S+U Warschauer Str. [Bus Warschauer Str.]", 6, 5]
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", 3, 5]
					default:
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", null, 5]
				}
			default:
				return ["S+U Warschauer Str.", null, 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (product) {
			case "tram":
				switch (lineName) {
					case "M10":
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 5, 4]
					default:
						return ["S+U Warschauer Str. [Tram Warschauer Str.]", 5, 4]
				}
			case "bus":
				switch (lineName) {
					case "300":
						return ["S+U Warschauer Str. [Bus T.-Danz-Str.]", 7, 6]
					case "347":
						if (direction.includes("Tunnelstr"))
							return ["S+U Warschauer Str. [Bus Warschauer Str.]", 3, 5]
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", 6, 5]
					default:
						return ["S+U Warschauer Str. [Bus Warschauer Str.]", null, 5]
				}
			default:
				return ["S+U Warschauer Str.", null, 7]
		}
	}
}

export function getWeberwiese(
	mode: Mode,
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
