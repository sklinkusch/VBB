export function getAltstadtSpandau() {
	return ["U Altstadt Spandau [U7]", 1]
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
