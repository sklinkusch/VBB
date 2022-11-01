export function getLichtenberg(product: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S+U Lichtenberg [Regionalbahn]", 1]
		case "suburban":
			return ["S+U Lichtenberg [S-Bahn]", 2]
		case "subway":
			return ["S+U Lichtenberg [U5]", 3]
		default:
			return ["S+U Lichtenberg", 4]
	}
}
