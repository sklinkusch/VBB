type Dir = string | null
type Mode = "dep" | "arr"

export function getBlankenburg() {
	return "S Blankenburg [Bus Bahnhofstr.]"
}

export function getBornholmerStr() {
	return "S Bornholmer Str. [Tram Bornholmer Str.]"
}

export function getBuch(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	switch (lineName) {
		case "150":
		case "158":
		case "893":
		case "N58":
			return "S Buch [Wiltbergstr. Ost]"
		case "259":
			return "S Buch [Am Sandhaus]"
		case "353":
			if (mode === "dep" && direction !== null) {
				if (direction.includes("Pölnitzweg")) return "S Buch [Am Sandhaus]"
				return "S Buch [Wiltbergstr. Ost]"
			}
			return "S Buch [Bus]"
		default:
			return "S Buch [Bus]"
	}
}

export function getEberswalderStr(product: string, lineName: string) {
	switch (product) {
		case "tram":
			switch (lineName) {
				case "M1":
				case "12":
					return "U Eberswalder Str. [Tram Kastanienallee]"
				case "M10":
					return "U Eberswalder Str. [Tram Eberswalder Str.]"
				default:
					return "U Eberswalder Str. [Tram]"
			}
		case "bus":
			switch (lineName) {
				case "U2":
				case "N2":
					return "U Eberswalder Str. [Bus Schönhauser Allee]"
				default:
					return "U Eberswalder Str. [Bus]"
			}
	}
}

export function getGreifswalderStr(product: string, lineName: string) {
	switch (product) {
		case "tram":
			return "S Greifswalder Str. [Tram Greifswalder Str.]"
		case "bus":
			switch (lineName) {
				case "158":
					return "S Greifswalder Str. [Bus Storkower Str.]"
				default:
					return "S Greifswalder Str. [Bus Greifswalder Str.]"
			}
	}
}

export function getKarow() {
	return "S Karow [Bus Hubertusdamm]"
}

export function getLandsbergerAllee(product: string, lineName: string) {
	switch (product) {
		case "tram":
			return "S Landsberger Allee [Tram Landsberger Allee]"
		case "bus":
			switch (lineName) {
				case "156":
					return "S Landsberger Allee [Bus Storkower Str.]"
				default:
					return "S Landsberger Allee [Bus Landsberger Allee]"
			}
	}
}

export function getPankow(
	id: string,
	mode: Mode,
	product: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000130002":
				switch (product) {
					case "tram":
						switch (lineName) {
							case "M1":
								if (
									provenance.includes("Schillerstr") ||
									provenance.includes("Rosenthal")
								)
									return ["S+U Pankow [Tram Berliner Str.]", 3, 4]
								return ["S+U Pankow [Tram Berliner Str.]", 4, 4]
							case "50":
								if (provenance.includes("Guyotstr"))
									return ["S+U Pankow [Tram Berliner Str.]", 3, 4]
								return ["S+U Pankow [Tram Berliner Str.]", 4, 4]
							default:
								return ["S+U Pankow [Tram Berliner Str.]", null, 4]
						}
					case "bus":
						switch (lineName) {
							case "M27":
								if (provenance.includes("Hadlichstr"))
									return ["S+U Pankow [Bus Florastr.]", 2, 6]
								return ["S+U Pankow [Bus Florastr.]", 1, 6]
							case "X54":
								if (provenance.includes("Masurenstr"))
									return ["S+U Pankow/Granitzstr.", 5, 7]
								return ["S+U Pankow/Granitzstr.", 6, 7]
							case "155":
								if (provenance.includes("Masurenstr"))
									return ["S+U Pankow [Bus Florastr.]", 4, 6]
								return ["S+U Pankow [Bus Berliner Str.]", 1, 5]
							case "250":
							case "255":
							case "N50":
								if (provenance.includes("Buchholz"))
									return ["S+U Pankow [Bus Berliner Str.]", 4, 5]
								if (provenance.includes("Schwarzelfenweg"))
									return ["S+U Pankow [Bus Berliner Str.]", 4, 5]
								if (provenance.includes("Tierpark"))
									return ["S+U Pankow [Bus Berliner Str.]", 4, 5]
								return ["S+U Pankow [Bus Berliner Str.]", 3, 5]
							case "U2":
							case "N2":
								if (provenance.includes("Hadlichstr."))
									return ["S+U Pankow [Bus Berliner Str.]", 3, 5]
								return ["S+U Pankow [Bus Berliner Str.]", 4, 5]
							default:
								return ["S+U Pankow [Bus]", null, 8]
						}
					default:
						return ["S+U Pankow", null, undefined]
				}
			case "900000130500":
				switch (lineName) {
					case "X54":
						if (provenance.includes("Masurenstr"))
							return ["S+U Pankow/Granitzstr.", 5, 7]
						return ["S+U Pankow/Granitzstr.", 6, 7]
					case "155":
						return ["S+U Pankow/Granitzstr.", 6, 7]
					case "250":
					case "255":
					case "N50":
						return ["S+U Pankow/Granitzstr.", 5, 7]
					default:
						return ["S+U Pankow", null, undefined]
				}
			default:
				return ["S+U Pankow", null, undefined]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000130002":
				switch (product) {
					case "tram":
						switch (lineName) {
							case "M1":
								if (
									direction.includes("Schillerstr") ||
									direction.includes("Rosenthal")
								)
									return ["S+U Pankow [Tram Berliner Str.]", 4, 4]
								return ["S+U Pankow [Tram Berliner Str.]", 3, 4]
							case "50":
								if (direction.includes("Guyotstr"))
									return ["S+U Pankow [Tram Berliner Str.]", 4, 4]
								return ["S+U Pankow [Tram Berliner Str.]", 3, 4]
							default:
								return ["S+U Pankow [Tram Berliner Str.]", null, 4]
						}
					case "bus":
						switch (lineName) {
							case "M27":
								if (direction.includes("Hadlichstr"))
									return ["S+U Pankow [Bus Florastr.]", 1, 6]
								return ["S+U Pankow [Bus Florastr.]", 2, 6]
							case "X54":
								if (direction.includes("Masurenstr"))
									return ["S+U Pankow/Granitzstr.", 6, 7]
								return ["S+U Pankow/Granitzstr.", 5, 7]
							case "155":
								if (direction.includes("Masurenstr"))
									return ["S+U Pankow [Bus Florastr.]", 1, 6]
								return ["S+U Pankow [Bus Berliner Str.]", 4, 5]
							case "250":
							case "255":
							case "N50":
								if (direction.includes("Buchholz"))
									return ["S+U Pankow [Bus Berliner Str.]", 3, 5]
								if (direction.includes("Schwarzelfenweg"))
									return ["S+U Pankow [Bus Berliner Str.]", 3, 5]
								if (direction.includes("Tierpark"))
									return ["S+U Pankow [Bus Berliner Str.]", 3, 5]
								return ["S+U Pankow [Bus Berliner Str.]", 4, 5]
							case "U2":
							case "N2":
								if (direction.includes("Hadlichstr."))
									return ["S+U Pankow [Bus Berliner Str.]", 4, 5]
								return ["S+U Pankow [Berliner Str.]", 3, 5]
							default:
								return ["S+U Pankow [Bus]", null, 8]
						}
					default:
						return ["S+U Pankow", null, undefined]
				}
			case "900000130500":
				switch (lineName) {
					case "X54":
						if (direction.includes("Masurenstr"))
							return ["S+U Pankow/Granitzstr.", 6, 7]
						return ["S+U Pankow/Granitzstr.", 5, 7]
					case "155":
						return ["S+U Pankow/Granitzstr.", 6, 7]
					case "250":
					case "255":
					case "N50":
						return ["S+U Pankow/Granitzstr.", 5, 7]
					default:
						return ["S+U Pankow", null, undefined]
				}
			default:
				return ["S+U Pankow", null, undefined]
		}
	}
}

export function getPankowHeinersdorf(product: string) {
	switch (product) {
		case "tram":
			return "S Pankow-Heinersdorf [Tram Pasewalker Str.]"
		case "bus":
			return "S Pankow-Heinersdorf [Bus Pasewalker Str.]"
	}
}

export function getPrenzlauerAllee(product: string, lineName: string) {
	switch (product) {
		case "tram":
			return "S Prenzlauer Allee [Tram Prenzlauer Allee]"
		case "bus":
			switch (lineName) {
				case "156":
					return "S Prenzlauer Allee [Bus Grellstr.]"
				default:
					return "S Prenzlauer Allee [Bus Prenzlauer Allee]"
			}
	}
}

export function getSchönhauserAllee(product: string) {
	switch (product) {
		case "tram":
			return ["S+U Schönhauser Allee [Tram Schönhauser Allee]", 4]
		case "bus":
			return ["S+U Schönhauser Allee [Bus Schönhauser Allee]", 5]
		default:
			return ["S+U Schönhauser Allee", undefined]
	}
}

export function getSenefelderplatz() {
	return "U Senefelderplatz [Bus Schönhauser Allee]"
}

export function getStorkowerStr() {
	return "S Storkower Str. [Bus Storkower Str.]"
}

export function getVinetastr(product: string, lineName: string) {
	switch (product) {
		case "tram":
			return "U vinetastr. [Tram Berliner Str.]"
		case "bus":
			switch (lineName) {
				case "250":
					return "U Vinetastr. [Bus E.-Brändström-Str.]"
				default:
					return "U Vinetastr. [Bus Berliner Str.]"
			}
	}
}

export function getWollankstr(id: string) {
	switch (id) {
		case "900000130523":
			return "Pradelstr."
		case "900000130003":
			return "S Wollankstr. [Bus Wollankstr.]"
		default:
			return "S Wollankstr. [Bus Wollankstr.]"
	}
}
