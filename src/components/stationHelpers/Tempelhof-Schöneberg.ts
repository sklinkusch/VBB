type Dir = string | null
type Mode = "dep" | "arr"

export function getAltMariendorf() {
	return ["U Alt-Mariendorf", 1]
}

export function getBayerischerPlatz(lineName: string) {
	switch (lineName) {
		case "U4":
			return ["U Bayerischer Platz ⬆️", 1]
		case "U7":
			return ["U Bayerischer Platz ⬇️", 2]
		default:
			return ["U Bayerischer Platz", 3]
	}
}

export function getEisenacherStr() {
	return ["U Eisenacher Str.", 1]
}

export function getFriedrichWilhelmPlatz() {
	return ["U Friedrich-Wilhelm-Platz", 1]
}

export function getInnsbruckerPlatz(product: string) {
	switch (product) {
		case "suburban":
			return ["S Innsbrucker Platz", 1]
		case "subway":
			return ["U Innsbrucker Platz", 2]
		default:
			return ["S+U Innsbrucker Platz", 3]
	}
}

export function getKleistpark() {
	return ["U Kleistpark", 1]
}

export function getNollendorfplatz(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "U2":
				return ["U Nollendorfplatz ⬆️", 1]
			case "U1":
				if (
					/(Uhlandstr|Kurfürstendamm|Wittenbergpl|Spichernstr|Fehrbelliner Pl|Breitenbachpl)/.test(
						provenance
					)
				) {
					return ["U Nollendorfplatz ⬇️", 2]
				}
				return ["U Nollendorfplatz ⬇️", 3]
			case "U3":
				if (
					/(Wittenbergpl|Spichernstr|Fehrbelliner Pl|Breitenbachpl|Krumme Lanke)/.test(
						provenance
					)
				) {
					return ["U Nollendorfplatz ⬇️", 2]
				}
				return ["U Nollendorfplatz ⬇️", 3]
			case "U4":
				return ["U Nollendorfplatz ⬇️", 2]
			default:
				return ["U Nollendorfplatz", 4]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "U2":
				return ["U Nollendorfplatz ⬆️", 1]
			case "U1":
				if (
					/(Uhlandstr|Kurfürstendamm|Wittenbergpl|Spichernstr|Fehrbelliner Pl|Breitenbachpl)/.test(
						direction
					)
				) {
					return ["U Nollendorfplatz ⬇️", 3]
				}
				return ["U Nollendorfplatz ⬇️", 2]
			case "U3":
				if (
					/(Wittenbergpl|Spichernstr|Fehrbelliner Pl|Breitenbachpl|Krumme Lanke)/.test(
						direction
					)
				) {
					return ["U Nollendorfplatz ⬇️", 3]
				}
				return ["U Nollendorfplatz ⬇️", 2]
			case "U4":
				return ["U Nollendorfplatz ⬇️", 2]
			default:
				return ["U Nollendorfplatz", 4]
		}
	}
	return ["U Nollendorfplatz", null]
}

export function getTempelhof(product: string) {
	switch (product) {
		case "suburban":
			return ["S Tempelhof", 1]
		case "subway":
			return ["U Tempelhof", 2]
		default:
			return ["S+U Tempelhof", 3]
	}
}

export function getUllsteinstr() {
	return ["U Ullsteinstr.", 1]
}

export function getWaltherSchreiberPlatz() {
	return ["U Walther-Schreiber-Platz", 1]
}

export function getWestphalweg() {
	return ["U Westphalweg", 1]
}

export function getYorckstr(id: string, product: string) {
	switch (id) {
		case "900000057102":
			return ["S Yorckstr. (Großgörschenstr.)", 3]
		case "900000058103":
			switch (product) {
				case "suburban":
					return ["S Yorckstr.", 1]
				case "subway":
					return ["U Yorckstr.", 2]
				default:
					return ["S+U Yorckstr.", 4]
			}
		default:
			return ["S+U Yorckstr.", 4]
	}
}
