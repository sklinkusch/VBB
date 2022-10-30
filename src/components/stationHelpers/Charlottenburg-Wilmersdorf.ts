export function getKurfürstendamm(lineName: string) {
	switch (lineName) {
		case "U1":
			return ["U Kurfürstendamm [oben, U1]", 1]
		case "U9":
			return ["U Kurfürstendamm [unten, U9]", 2]
		default:
			return ["U Kurfürstendamm", 3]
	}
}

export function getZoologischerGarten(product: string, lineName: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S+U Zoologischer Garten [Regionalbahn]", 1]
		case "suburban":
			return ["S+U Zoologischer Garten [S-Bahn]", 2]
		case "subway":
			switch (lineName) {
				case "U2":
				case "U12":
					return ["S+U Zoologischer Garten [U2]", 3]
				case "U9":
					return ["S+U Zoologischer Garten [U9]", 4]
				default:
					return ["S+U Zoologischer Garten [U-Bahn]", 5]
			}
		default:
			return ["S+U Zoologischer Garten [Bahnhof]", 6]
	}
}
