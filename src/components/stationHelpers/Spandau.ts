export function getAltstadtSpandau() {
	return ["U Altstadt Spandau [U7]", 1]
}

export function getHaselhorst() {
	return ["U Haselhorst [U7]", 1]
}

export function getPaulsternstr() {
	return ["U Paulsternstr. [U7]", 1]
}

export function getRathausSpandau(product: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S Spandau [Fernbahn]", 1]
		case "suburban":
			return ["S Spandau [S-Bahn]", 2]
		case "subway":
			return ["S+U Rathaus Spandau [U7]", 3]
		default:
			return ["S+U Rathaus Spandau [Bahnhof]", 4]
	}
}

export function getRohrdamm() {
	return ["U Rohrdamm [U7]", 1]
}

export function getSiemensdamm() {
	return ["U Siemensdamm [U7]", 1]
}

export function getZitadelle() {
	return ["U Zitadelle [U7]", 1]
}
