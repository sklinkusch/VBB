type Dir = string | null

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
