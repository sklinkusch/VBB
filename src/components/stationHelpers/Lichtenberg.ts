export function getLichtenberg(product: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S Lichtenberg", 1]
		case "suburban":
			return ["S Lichtenberg", 2]
		case "subway":
			return ["U Lichtenberg", 3]
		default:
			return ["S+U Lichtenberg", 4]
	}
}
