export function getWuhletal(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Wuhletal [S5]", 1]
		case "subway":
			return ["S+U Wuhletal [U5]", 2]
		default:
			return ["S+U Wuhletal [Bahnhof]", 3]
	}
}
