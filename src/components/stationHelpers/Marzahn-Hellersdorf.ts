export function getWuhletal(product: string) {
	switch (product) {
		case "suburban":
			return ["S Wuhletal", 1]
		case "subway":
			return ["U Wuhletal", 2]
		default:
			return ["S+U Wuhletal", 3]
	}
}
