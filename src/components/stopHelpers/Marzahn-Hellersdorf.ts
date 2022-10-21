type Dir = string | null

export function getBiesdorf(id: string) {
	switch (id) {
		case "900000171001":
			return "S Biesdorf [Bus Wuhlgartenweg]"
		case "900000171531":
			return "Oberfeldstr."
	}
}

export function getFriedrichsfeldeOst(lineName: string, direction: Dir) {
	if (direction !== null) {
		switch (lineName) {
			case "M17":
			case "27":
			case "37":
				if (direction.includes("Falkenberg"))
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
				if (direction.includes("Gehrenseestr"))
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
				if (direction.includes("Pasedagplatz"))
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
				if (direction.includes("Lichtenberg"))
					return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 2]
				return ["S Friedrichsfelde Ost [Tram Rhinstr.]", 1]
			case "192":
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 3]
			case "194":
				if (direction.includes("Helene-Weigel-Platz"))
					return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 5]
				return ["S Friedrichsfelde Ost [Bus Seddiner Str.]", 4]
			default:
				return ["S Friedrichsfelde Ost", null]
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

export function getMarzahn(product: string, lineName: string, direction: Dir) {
	if (direction !== null) {
		switch (lineName) {
			case "M6":
			case "16":
				if (direction.includes("Riesaer Str"))
					return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
				if (direction.includes("Betriebshof Marzahn"))
					return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
				if (direction.includes("Ahrensfelde"))
					return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
				return ["S Marzahn [Tram Bus Marzahner Promenade]", 6]
			case "X54":
				if (direction.includes("Hellersdorf"))
					return ["S Marzahn [Tram Bus Marzahner Promenade]", 5]
				return ["S Marzahn [Tram Bus Marzahner Promenade]", 4]
			case "191":
			case "192":
			case "195":
				return ["S Marzahn [Bushafen]", 2]
			case "291":
				return ["S Marzahn [Bushafen]", 3]
			default:
				if (product === "tram") {
					if (direction.includes("Riesaer Str"))
						return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
					if (direction.includes("Betriebshof Marzahn"))
						return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
					if (direction.includes("Ahrensfelde"))
						return ["S Marzahn [Tram Bus Marzahner Promenade]", 7]
					return ["S Marzahn [Tram Bus Marzahner Promenade]", 6]
				}
				return ["S Marzahn", null]
		}
	}
}

export function getWuhletal() {
	return "S+U Wuhletal [Bus Altentreptower Str.]"
}
