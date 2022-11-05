export function getPankow(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Pankow [S-Bahn]", 1]
		case "subway":
			return ["S+U Pankow [U2]", 2]
		default:
			return ["S+U Pankow", 3]
	}
}

export function getSchönhauserAllee(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Schönhauser Allee [S-Bahn]", 1]
		case "subway":
			return ["S+U Schönhauser Allee [U2]", 2]
		default:
			return ["S+U Schönhauser Allee", 3]
	}
}