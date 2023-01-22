export function getPankow(product: string) {
	switch (product) {
		case "suburban":
			return ["S Pankow", 1]
		case "subway":
			return ["U Pankow", 2]
		default:
			return ["S+U Pankow", 3]
	}
}

export function getSchönhauserAllee(product: string) {
	switch (product) {
		case "suburban":
			return ["S Schönhauser Allee", 1]
		case "subway":
			return ["U Schönhauser Allee", 2]
		default:
			return ["S+U Schönhauser Allee", 3]
	}
}
