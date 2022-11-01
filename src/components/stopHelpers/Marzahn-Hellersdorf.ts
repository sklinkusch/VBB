type Dir = string | null

export function getAhrensfelde() {
	return "S Ahrensfelde [Bus Märkische Allee]"
}

export function getBiesdorf(id: string) {
	switch (id) {
		case "900000171001":
			return "S Biesdorf [Bus Wuhlgartenweg]"
		case "900000171531":
			return "Oberfeldstr."
	}
}

export function getFriedrichsfeldeOst(
	mode: string,
	product: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M17":
			case "27":
			case "37":
				if (
					/(Falkenberg|Gehrenseestr|Pasedagplatz|Lichtenberg)/.test(provenance)
				)
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 1]
				return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
			case "192":
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 3]
			case "194":
				if (provenance.includes("Helene-Weigel-Platz"))
					return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 4]
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 5]
			default:
				if (product === "tram")
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", null]
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M17":
			case "27":
			case "37":
				if (
					/(Falkenberg|Gehrenseestr|Pasedagplatz|Lichtenberg)/.test(direction)
				)
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
				return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 1]
			case "192":
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 3]
			case "194":
				if (direction.includes("Helene-Weigel-Platz"))
					return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 5]
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 4]
			default:
				if (product === "tram")
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", null]
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", null]
		}
	}
}

export function getKaulsdorf() {
	return "S Kaulsdorf [Bus H.-Grüber-Str.]"
}

export function getMahlsdorf(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "62":
				return ["S Mahlsdorf [Tram Bus Treskowstr.]", 5]
			case "195":
			case "395":
			case "398":
				if (id === "900000176007") return ["Wodanstr./S Mahlsdorf", 2]
				if (provenance.includes("S Marzahn"))
					return ["S Mahlsdorf [Bus Hönower Str.]", 3]
				if (provenance.includes("S Mahlsdorf"))
					return ["S Mahlsdorf [Bus Hönower Str.]", 3]
				return ["S Mahlsdorf [Bus Hönower Str.]", 4]
			case "197":
				if (id === "900000176702")
					return ["S Mahlsdorf [Tram Bus Treskowstr.]", 6]
				return ["S Mahlsdorf [Bus Hönower Str.]", 4]
			case "N90":
				if (provenance.includes("S+U Wuhletal"))
					return ["S Mahlsdorf [Bus Hönower Str.]", 3]
				return ["S Mahlsdorf [Bus Hönower Str.]", 4]
			case "N95":
				return ["S Mahlsdorf [Bus Hönower Str.]", 4]
			default:
				return ["S Mahlsdorf", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "62":
				return ["S Mahlsdorf [Tram Bus Treskowstr.]", 6]
			case "195":
			case "395":
			case "398":
				if (direction.includes("S Marzahn"))
					return ["S Mahlsdorf [Bus Hönower Str.]", 4]
				if (direction.includes("S Mahlsdorf"))
					return ["S Mahlsdorf [Bus Hönower Str.]", 4]
				return ["S Mahlsdorf [Bus Hönower Str.]", 3]
			case "197":
				if (id === "900000176702")
					return ["S Mahlsdorf [Tram Bus Treskowstr.]", 6]
				return ["S Mahlsdorf [Bus Hönower Str.]", 4]
			case "N90":
				if (direction.includes("S+U Wuhletal"))
					return ["S Mahlsdorf [Bus Hönower Str.]", 4]
				return ["S Mahlsdorf [Bus Hönower Str.]", 3]
			case "N95":
				return ["S Mahlsdorf [Bus Hönower Str.]", 4]
			default:
				return ["S Mahlsdorf", null]
		}
	}
}

export function getMarzahn(
	mode: string,
	product: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M6":
			case "16":
				if (/(Riesaer Str|Betriebshof Marzahn|Ahrensfelde)/.test(provenance))
					return ["S Marzahn [Tram Marzahner Promenade]", 6]
				return ["S Marzahn [Tram Marzahner Promenade]", 7]
			case "X54":
				if (provenance.includes("Nossener Str"))
					return ["S Marzahn [Bus Marzahner Promenade]", 4]
				return ["S Marzahn [Bus Marzahner Promenade]", 5]
			case "191":
			case "192":
			case "195":
				return ["S Marzahn [Bushafen]", 2]
			case "291":
				return ["S Marzahn [Bushafen]", 3]
			default:
				if (product === "tram") {
					if (/(Riesaer Str|Betriebshof Marzahn|Ahrensfelde)/.test(provenance))
						return ["S Marzahn [Tram Marzahner Promenade]", 6]
					return ["S Marzahn [Tram Marzahner Promenade]", 7]
				}
				return ["S Marzahn [Bus]", null]
		}
	}
	if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M6":
			case "16":
				if (/(Riesaer Str|Betriebshof Marzahn|Ahrensfelde)/.test(direction))
					return ["S Marzahn [Tram Marzahner Promenade]", 7]
				return ["S Marzahn [Tram Marzahner Promenade]", 6]
			case "X54":
				if (direction.includes("Hellersdorf"))
					return ["S Marzahn [Bus Marzahner Promenade]", 5]
				return ["S Marzahn [Bus Marzahner Promenade]", 4]
			case "191":
			case "192":
			case "195":
				return ["S Marzahn [Bushafen]", 2]
			case "291":
				return ["S Marzahn [Bushafen]", 3]
			default:
				if (product === "tram") {
					if (/(Riesaer Str|Betriebshof Marzahn|Ahrensfelde)/.test(direction))
						return ["S Marzahn [Tram Marzahner Promenade]", 7]
					return ["S Marzahn [Tram Marzahner Promenade]", 6]
				}
				return ["S Marzahn [Bus]", null]
		}
	}
}

export function getMehrowerAllee() {
	return "S Mehrower Allee [Bus Mehrower Allee]"
}

export function getPoelchaustr() {
	return "S Poelchaustr. [Bus Poelchaustr.]"
}

export function getRaoulWallenbergStr(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "X54":
				return "S Raoul-Wallenberg-Str. [Bus Märkische Allee]"
			case "154":
				if (provenance.includes("Elsterwerdaer Platz"))
					return "S Raoul-Wallenberg-Str. [Bus Märkische Allee]"
				return "S Raoul-Wallenberg-Str. [Bus R.-Wallenberg-Str.]"
			default:
				return "S Raoul-Wallenberg-Str. [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "X54":
				return "S Raoul-Wallenberg-Str. [Bus Märkische Allee]"
			case "154":
				if (direction.includes("Elsterwerdaer Platz"))
					return "S Raoul-Wallenberg-Str. [Bus R.-Wallenberg-Str.]"
				return "S Raoul-Wallenberg-Str. [Bus Märkische Allee]"
			default:
				return "S Raoul-Wallenberg-Str. [Bus]"
		}
	}
}

export function getSpringpfuhl(product: string) {
	switch (product) {
		case "tram":
			return "S Springpfuhl [Tram Allee der Kosmonauten]"
		case "bus":
			return "S Springpfuhl [Bus Allee der Kosmonauten]"
	}
}

export function getWuhletal() {
	return ["S+U Wuhletal [Bus Altentreptower Str.]", 4]
}
