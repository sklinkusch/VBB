export function getAltstadtSpandau() {
	return ["U Altstadt Spandau", 1]
}

export function getHaselhorst() {
	return ["U Haselhorst", 1]
}

export function getPaulsternstr() {
	return ["U Paulsternstr.", 1]
}

export function getRathausSpandau(product: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S Spandau", 1]
		case "suburban":
			return ["S Spandau", 2]
		case "subway":
			return ["U Rathaus Spandau", 3]
		default:
			return ["S+U Rathaus Spandau", 4]
	}
}

export function getRohrdamm() {
	return ["U Rohrdamm", 1]
}

export function getSiemensdamm() {
	return ["U Siemensdamm", 1]
}

export function getZitadelle() {
	return ["U Zitadelle", 1]
}
