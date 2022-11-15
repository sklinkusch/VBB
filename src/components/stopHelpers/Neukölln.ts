type Dir = string | null

export function getBlaschkoallee() {
	return ["U Blaschkoallee [Bus Blaschkoallee]", 2]
}

export function getBritzSüd(id: string) {
	switch (id) {
		case "900000080402":
			return ["U Britz-Süd [Bus Gutschmidtstr.]", 2]
		case "900000080455":
			return ["Grüner Weg/Gutschmidtstr.", 3]
	}
}

export function getGrenzallee(id: string) {
	switch (id) {
		case "900000080202":
			return ["U Grenzallee [Bus K.-Marx-Str.]", 2]
		case "900000080204":
			return ["U Grenzallee/Jahnstr. [Bus Buschkrugallee]", 3]
		default:
			return ["U Grenzallee [Bus]", 4]
	}
}

export function getHermannplatz(id: string) {
	switch (id) {
		case "900000078170":
			return ["U Hermannplatz [Bus Ostseite]", 4]
		case "900000078171":
			return ["U Hermannplatz [Bus Westseite]", 5]
		case "900000078104":
			return ["U Hermannplatz/Urbanstr.", 8]
		case "900000078105":
			return ["U Hermannplatz/Sonnenallee", 6]
		case "900000078106":
			return ["U Hermannplatz/Karl-Marx-Str.", 7]
		default:
			return ["U Hermannplatz", 9]
	}
}

export function getHermannstr(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000079221":
				switch (lineName) {
					case "M44":
						if (provenance.includes("Buckow"))
							return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
						return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
					case "246":
					case "277":
						return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
					case "377":
						if (provenance.includes("Kranoldstr"))
							return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
						return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
					case "U8":
					case "N8":
						return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
					case "N77":
						if (provenance.includes("Mariendorf"))
							return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
						return ["S+U Hermannstr. [Bus Hermannstr.]", 2]
					default:
						return ["S+U Hermannstr. [Bus]", null]
				}
			case "900000079220":
				switch (lineName) {
					case "246":
						if (/(Forsthaus|Grenz)/.test(provenance))
							return [
								"S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]",
								5,
							]
						return ["S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]", 4]
				}
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000079221":
				switch (lineName) {
					case "M44":
						if (direction.includes("Buckow"))
							return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
						return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
					case "246":
					case "277":
						return ["S+U Hermannstr. [Bus Hermannstr.]", 2]
					case "377":
						if (direction.includes("Kranoldstr"))
							return ["S+U Hermannstr. [Bus Hermannstr.]", 1]
						return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
					case "U8":
					case "N8":
						return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
					case "N77":
						if (direction.includes("Mariendorf"))
							return ["S+U Hermannstr. [Bus Hermannstr.]", 2]
						return ["S+U Hermannstr. [Bus Hermannstr.]", 3]
					default:
						return ["S+U Hermannstr. [Bus]", null]
				}
			case "900000079220":
				switch (lineName) {
					case "246":
						if (/(Forsthaus|Grenz)/.test(direction))
							return [
								"S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]",
								4,
							]
						return ["S+U Hermannstr./Silbersteinstr. [Bus Silbersteinstr.]", 5]
				}
		}
	}
}

export function getJohannisthalerChaussee() {
	return ["U Johannisthaler Chaussee [Bus Johannisthaler Ch.]", 2]
}

export function getKarlMarxStr() {
	return ["U Karl-Marx-Str. [Bus K.-Marx-Str.]", 2]
}

export function getKöllnischeHeide() {
	return "S Köllnische Heide [Bus Sonnenallee]"
}

export function getLipschitzallee() {
	return ["U Lipschitzallee [Bus Lipschitzallee]", 2]
}

export function getNeukölln(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000078201":
				switch (lineName) {
					case "171":
						if (provenance.includes("Rudow"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
						if (provenance.includes("Flughafen"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
						return ["S+U Neukölln [Bus Saalestr.]", 1, 5]
					case "U7":
					case "N7":
						if (provenance.includes("Rudow"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
						if (provenance.includes("Flughafen"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
						return ["S+U Neukölln [Bus K.-Marx-Str.]", 2, 4]
					case "N77":
						if (provenance.includes("Mariendorf"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 2, 4]
						return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
					default:
						return ["S+U Neukölln [Bus]", null, 6]
				}
			case "900000078271":
				switch (lineName) {
					case "171":
					case "U7":
					case "N7":
						if (/(Rudow|Flughafen)/.test(provenance))
							return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 6, 7]
						return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 7, 7]
					case "246":
						if (provenance.includes("Forsthausallee"))
							return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4, 8]
						return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5, 8]
					case "377":
						if (provenance.includes("Plänterwald"))
							return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4, 8]
						return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5, 8]
					default:
						return ["Lahnstr./U Neukölln [Bus]", null, 9]
				}
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000078201":
				switch (lineName) {
					case "171":
						if (direction.includes("Rudow"))
							return ["S+U Neukölln [Bus Saalestr.]", 1, 5]
						if (direction.includes("Flughafen"))
							return ["S+U Neukölln [Bus Saalestr.]", 1, 5]
						return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
					case "U7":
					case "N7":
						if (direction.includes("Rudow"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 2, 4]
						if (direction.includes("Flughafen"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 2, 4]
						return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
					case "N77":
						if (direction.includes("Mariendorf"))
							return ["S+U Neukölln [Bus K.-Marx-Str.]", 3, 4]
						return ["S+U Neukölln [Bus K.-Marx-Str.]", 2, 4]
					default:
						return ["S+U Neukölln [Bus]", null, 6]
				}
			case "900000078271":
				switch (lineName) {
					case "171":
					case "U7":
					case "N7":
						if (/(Rudow|Flughafen)/.test(direction))
							return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 7, 7]
						return ["Lahnstr./U Neukölln [Bus K.-Marx-Str.]", 6, 7]
					case "246":
						if (direction.includes("Forsthausallee"))
							return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5, 8]
						return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4, 8]
					case "377":
						if (direction.includes("Plänterwald"))
							return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 5, 8]
						return ["Lahnstr./U Neukölln [Bus Lahnstr.]", 4, 8]
					default:
						return ["Lahnstr./U Neukölln [Bus]", null, 9]
				}
		}
	}
}

export function getParchimerAllee() {
	return ["U Parchimer Allee [Bus Parchimer Allee]", 2]
}

export function getRathausNeukölln(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	switch (id) {
		case "900000078102":
			if (mode === "arr" && provenance !== null) {
				switch (lineName) {
					case "M43":
					case "166":
						if (/(Weisestr|Berliner Str)/.test(provenance))
							return ["U Rathaus Neukölln [Bus K.-Marx-Str.]", 2]
						return ["U Rathaus Neukölln [Bus Erkstr.]", 3]
					case "U7":
					case "N7":
						return ["U Rathaus Neukölln [Bus K.-Marx-Str.]", 2]
					default:
						return ["U Rathaus Neukölln [Bus]", 5]
				}
			} else if (mode === "dep" && direction !== null) {
				switch (lineName) {
					case "M43":
					case "166":
						if (/(Puschkinallee|Tunnelstr|Schöneweide)/.test(direction))
							return ["U Rathaus Neukölln [Bus K.-Marx-Str.]", 2]
						return ["U Rathaus Neukölln [Bus Erkstr.]", 3]
					case "U7":
					case "N7":
						return ["U Rathaus Neukölln [Bus K.-Marx-Str.]", 2]
					default:
						return ["U Rathaus Neukölln [Bus]", 5]
				}
			}
			return ["U Rathaus Neukölln [Bus]", 5]
		case "900000078151":
			return ["U Rathaus Neukölln/Alfred-Scholz-Platz", 4]
		default:
			return ["U Rathaus Neukölln [Bus]", 5]
	}
}

export function getRudow(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "X7":
			case "X71":
			case "171":
			case "N7":
			case "U7":
				if (provenance.includes("BER"))
					return ["U Rudow [Bus Neuköllner Str.]", 5, 2]
				return ["U Rudow [Bus Neuköllner Str.]", 1, 2]
			case "744":
				if (provenance.includes("BER"))
					return ["U Rudow [Bus Gr.-Ziethener Ch.]", 4, 3]
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", null, 3]
			case "260":
				if (provenance.includes("Adlershof"))
					return ["U Rudow [Bus Neuköllner Str.]", 5, 2]
				return ["U Rudow [Bus Neuköllner Str.]", 1, 2]
			case "371":
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", 5, 2]
			case "162":
			case "172":
			case "372":
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", 2, 3]
			case "271":
				if (provenance.includes("Zittauer Str"))
					return ["U Rudow [Bus Gr.-Ziethener Ch.]", 2, 3]
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", 3, 3]
			default:
				return ["U Rudow [Bus]", null, 4]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "X7":
			case "X71":
			case "171":
			case "N7":
			case "U7":
				if (direction.includes("BER"))
					return ["U Rudow [Bus Neuköllner Str.]", 1, 2]
				return ["U Rudow [Bus Neuköllner Str.]", 5, 2]
			case "744":
				if (direction.includes("BER"))
					return ["U Rudow [Bus Gr.-Ziethener Ch.]", null, 3]
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", 4, 3]
			case "260":
				if (direction.includes("Adlershof"))
					return ["U Rudow [Bus Neuköllner Str.]", 1, 2]
				return ["U Rudow [Bus Neuköllner Str.]", 5, 2]
			case "371":
				if (direction.includes("Hanffgraben"))
					return ["U Rudow [Bus Neuköllner Str.]", 5, 2]
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", 2, 3]
			case "162":
			case "172":
			case "372":
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", 3, 3]
			case "271":
				if (direction.includes("Zittauer Str"))
					return ["U Rudow [Bus Gr.-Ziethener Ch.]", 3, 3]
				return ["U Rudow [Bus Gr.-Ziethener Ch.]", 2, 3]
			default:
				return ["U Rudow [Bus]", null, 4]
		}
	}
}

export function getSonnenallee(id: string, lineName: string) {
	switch (id) {
		case "900000077106":
			switch (lineName) {
				case "M41":
				case "171":
					return "S Sonnenallee [Bus Sonnenallee]"
				case "N77":
					return "S Sonnenallee [Bus Saalestr.]"
				default:
					return "S Sonnenallee [Bus]"
			}
		case "900000077110":
			return "S Sonnenallee/Saalestr. [Bus Saalestr.]"
	}
}

export function getZwickauerDamm() {
	return ["U Zwickauer Damm [Bus Zwickauer Damm]", 2]
}
