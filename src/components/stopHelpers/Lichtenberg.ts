type Dir = string | null
type Mode = "dep" | "arr"

export function getGehrenseestr() {
	return "S Gehrenseestr. [Bus Gehrenseestr.]"
}

export function getHohenschönhausen() {
	return "S Hohenschönhausen [Tram Bus Falkenberger Chaussee]"
}

export function getKarlshorst(id: string, product: string, lineName: string) {
	switch (id) {
		case "900000162001":
			if (product === "tram") return "S Karlshorst [Tram Treskowallee]"
			if (product === "bus" && /[23]96/.test(lineName))
				return "S Karlshorst [Bus Stolzenfelsstr.]"
			return "S Karlshorst [Bus]"
		case "900000162702":
			return "S Karlshorst [Bus Dönhoffstr.]"
	}
}

export function getLichtenberg(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "21":
			case "37":
				return ["S+U Lichtenberg/Siegfriedstr.", 2, 7]
			case "240":
				if (provenance.includes("Ostbahnhof"))
					return ["S+U Lichtenberg [Bus Weitlingstr.]", 11, 5]
				return ["S+U Lichtenberg [Bus Weitlingstr.]", 8, 5]
			case "256":
				if (provenance.includes("Zentralfriedhof"))
					return ["S+U Lichtenberg/Siegfriedstr.", 2, 7]
				return ["S+U Lichtenberg/Siegfriedstr.", 1, 7]
			case "108":
			case "296":
				return ["S+U Lichtenberg [Bus Weitlingstr.]", 8, 5]
			case "N50":
				return ["S+U Lichtenberg [Bus Einbecker Str.]", 12, 6]
			case "N94":
				if (provenance.includes("Magdalenenstr"))
					return ["S+U Lichtenberg [Bus Weitlingstr.]", 8, 5]
				return ["S+U Lichtenberg [Bus Weitlingstr.]", 11, 5]
			default:
				return ["S+U Lichtenberg", null, 8]
		}
	}
	if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "21":
			case "37":
				return ["S+U Lichtenberg/Siegfriedstr.", 2, 7]
			case "240":
				if (direction.includes("Ostbahnhof"))
					return ["S+U Lichtenberg [Bus Weitlingstr.]", 8, 5]
				return ["S+U Lichtenberg [Bus Weitlingstr.]", 11, 5]
			case "256":
				if (direction.includes("Zentralfriedhof"))
					return ["S+U Lichtenberg/Siegfriedstr.", 1, 7]
				return ["S+U Lichtenberg/Siegfriedstr.", 2, 7]
			case "108":
			case "296":
				return ["S+U Lichtenberg [Bus Weitlingstr.]", 8, 5]
			case "N50":
				return ["S+U Lichtenberg [Bus Einbecker Str.]", 12, 6]
			case "N94":
				if (direction.includes("Magdalenenstr"))
					return ["S+U Lichtenberg [Bus Weitlingstr.]", 11, 5]
				return ["S+U Lichtenberg [Bus Weitlingstr.]", 8, 5]
			default:
				return ["S+U Lichtenberg", null, 8]
		}
	}
}

export function getNöldnerplatz(id: string) {
	switch (id) {
		case "900000160003":
			return "S Nöldnerplatz [Bus Lückstr.]"
		case "900000160534":
			return "S Nöldnerplatz/Schlichtallee [Bus Nöldnerstr.]"
	}
}

export function getRummelsburg(product: string, lineName: string) {
	if (product === "tram") {
		return "S Rummelsburg [Tram Hauptstr.]"
	} else {
		switch (lineName) {
			case "194":
			case "240":
			case "N94":
				return "S Rummelsburg [Bus Nöldnerstr.]"
			case "N40":
				return "S Rummelsburg [Bus Hauptstr.]"
			default:
				return "S Rummelsburg [Bus]"
		}
	}
}

export function getWartenberg() {
	return "S Wartenberg [Bus E.-E.-Kisch-Str.]"
}
