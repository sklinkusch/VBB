type Dir = string | null

export function getBayerischerPlatz(lineName: string) {
	switch (lineName) {
		case "U4":
			return ["U Bayerischer Platz [U4]", 1]
		case "U7":
			return ["U Bayerischer Platz [U7]", 2]
		default:
			return ["U Bayerischer Platz [U-Bahn]", 3]
	}
}

export function getEisenacherStr() {
	return ["U Eisenacher Str. [U7]", 1]
}

export function getInnsbruckerPlatz(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Innsbrucker Platz [S-Bahn]", 1]
		case "subway":
			return ["S+U Innsbrucker Platz [U4]", 2]
		default:
			return ["S+U Innsbrucker Platz [Bahnhof]", 3]
	}
}

export function getNollendorfplatz(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		return "U Nollendorfplatz"
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "U2":
				return ["U Nollendorfplatz [oben, U2]", 1]
			case "U1":
				if (
					/(Uhlandstr|Kurfürstendamm|Wittenbergpl|Spichernstr|Fehrbelliner Pl|Breitenbachpl)/.test(
						direction
					)
				) {
					return ["U Nollendorfplatz [unten, U1/U3]", 3]
				}
				return ["U Nollendorfplatz [Mitte, U1/U3/U4]", 2]
			case "U3":
				if (
					/(Wittenbergpl|Spichernstr|Fehrbelliner Pl|Breitenbachpl|Krumme Lanke)/.test(
						direction
					)
				) {
					return ["U Nollendorfplatz [unten, U1/U3]", 3]
				}
				return ["U Nollendorfplatz [Mitte, U1/U3/U4]", 2]
			case "U4":
				return ["U Nollendorfplatz [Mitte, U1/U3/U4]", 3]
			default:
				return "U Nollendorfplatz"
		}
	}
	return "U Nollendorfplatz"
}

export function getTempelhof(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Tempelhof [S-Bahn]", 1]
		case "subway":
			return ["S+U Tempelhof [U6]", 2]
		default:
			return ["S+U Tempelhof [Bahnhof]", 3]
	}
}
