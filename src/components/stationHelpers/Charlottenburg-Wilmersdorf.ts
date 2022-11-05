export function getFehrbellinerPlatz(lineName: string) {
	switch (lineName) {
		case "U1":
		case "U2":
		case "U3":
		case "U12":
			return ["U Fehrbelliner Platz [U3]", 1]
		case "U7":
			return ["U Fehrbelliner Platz [U7]", 2]
		default:
			return ["U Fehrbelliner Platz [U-Bahn]", 3]
	}
}

export function getHalemweg() {
	return ["U Halemweg [U7]", 1]
}

export function getHeidelbergerPlatz(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Heidelberger Platz [S-Bahn]", 1]
		case "subway":
			return ["S+U Heidelberger Platz [U-Bahn]", 2]
		default:
			return ["S+U Heidelberger Platz [Bahnhof]", 3]
	}
}

export function getJakobKaiserPlatz() {
	return ["U Jakob-Kaiser-Platz [U7]", 1]
}

export function getJungfernheide(product: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S+U Jungfernheide [Regionalbahn]", 1]
		case "suburban":
			return ["S+U Jungfernheide [S-Bahn]", 2]
		case "subway":
			return ["S+U Jungfernheide [U7]", 3]
		default:
			return ["S+U Jungfernheide [Bahnhof]", 4]
	}
}

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

export function getMierendorffplatz() {
	return ["U Mierendorffplatz [U7]", 1]
}

export function getSpichernstr(lineName: string) {
	switch (lineName) {
		case "U1":
		case "U2":
		case "U3":
		case "U12":
			return ["U Spichernstr. [U3]", 1]
		case "U9":
			return ["U Spichernstr. [U9]", 2]
		default:
			return ["U Spichernstr. [U-Bahn]", 3]
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
