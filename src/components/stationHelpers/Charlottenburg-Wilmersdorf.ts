export function getAdenauerplatz() {
	return ["U Adenauerplatz", 1]
}

export function getBerlinerStr(lineName: string) {
	switch (lineName) {
		case "U7":
			return ["U Berliner Str. ⬇️", 2]
		case "U9":
			return ["U Berliner Str. ⬆️", 1]
		default:
			return ["U Berliner Str.", 3]
	}
}

export function getBismarckstr(lineName: string) {
	switch (lineName) {
		case "U2":
		case "U12":
			return ["U Bismarckstr. ⬆️", 1]
		case "U7":
			return ["U Bismarckstr. ⬇️", 2]
		default:
			return ["U Bismarckstr.", 3]
	}
}

export function getBlissestr() {
	return ["U Blissestr.", 1]
}

export function getBundesplatz(product: string) {
	switch (product) {
		case "suburban":
			return ["S Bundesplatz", 1]
		case "subway":
			return ["U Bundesplatz", 2]
		default:
			return ["S+U Bundesplatz", 3]
	}
}

export function getCharlottenburg(product: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S Charlottenburg", 1]
		case "suburban":
			return ["S Charlottenburg", 2]
		case "subway":
			return ["U Wilmersdorfer Str.", 3]
		default:
			return ["S Charlottenburg/U Wilmersdorfer Str.", 4]
	}
}

export function getFehrbellinerPlatz(lineName: string) {
	switch (lineName) {
		case "U1":
		case "U2":
		case "U3":
		case "U12":
			return ["U Fehrbelliner Platz ⬆️", 1]
		case "U7":
			return ["U Fehrbelliner Platz ⬇️", 2]
		default:
			return ["U Fehrbelliner Platz", 3]
	}
}

export function getGüntzelstr() {
	return ["U Güntzelstr.", 1]
}

export function getHalemweg() {
	return ["U Halemweg", 1]
}

export function getHeidelbergerPlatz(product: string) {
	switch (product) {
		case "suburban":
			return ["S Heidelberger Platz", 1]
		case "subway":
			return ["U Heidelberger Platz", 2]
		default:
			return ["S+U Heidelberger Platz", 3]
	}
}

export function getJakobKaiserPlatz() {
	return ["U Jakob-Kaiser-Platz", 1]
}

export function getJungfernheide(product: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S Jungfernheide", 1]
		case "suburban":
			return ["S Jungfernheide", 2]
		case "subway":
			return ["U Jungfernheide", 3]
		default:
			return ["S+U Jungfernheide", 4]
	}
}

export function getKonstanzerStr() {
	return ["U Konstanzer Str.", 1]
}

export function getKurfürstendamm(lineName: string) {
	switch (lineName) {
		case "U1":
			return ["U Kurfürstendamm ⬆️", 1]
		case "U9":
			return ["U Kurfürstendamm ⬇️", 2]
		default:
			return ["U Kurfürstendamm", 3]
	}
}

export function getMierendorffplatz() {
	return ["U Mierendorffplatz", 1]
}

export function getRichardWagnerPlatz() {
	return ["U Richard-Wagner-Platz", 1]
}

export function getSpichernstr(lineName: string) {
	switch (lineName) {
		case "U1":
		case "U2":
		case "U3":
		case "U12":
			return ["U Spichernstr. ⬆️", 1]
		case "U9":
			return ["U Spichernstr. ⬇️", 2]
		default:
			return ["U Spichernstr.", 3]
	}
}

export function getZoologischerGarten(product: string, lineName: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["Bhf Zoologischer Garten", 1]
		case "suburban":
			return ["S Zoologischer Garten", 2]
		case "subway":
			switch (lineName) {
				case "U2":
				case "U12":
					return ["U Zoologischer Garten ⬆️", 3]
				case "U9":
					return ["U Zoologischer Garten ⬇️", 4]
				default:
					return ["U Zoologischer Garten", 5]
			}
		default:
			return ["S+U Zoologischer Garten", 6]
	}
}
