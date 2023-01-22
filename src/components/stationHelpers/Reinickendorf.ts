export function getFranzNeumannPlatz() {
	return ["U Franz-Neumann-Platz (Am Schäfersee)", 1]
}

export function getKarlBonhoefferNervenklinik(product: string) {
	switch (product) {
		case "suburban":
			return ["S Karl-Bonhoeffer-Nervenklinik", 1]
		case "subway":
			return ["U Karl-Bonhoeffer-Nervenklinik", 2]
		default:
			return ["S+U Karl-Bonhoeffer-Nervenklinik", 3]
	}
}

export function getLindauerAllee() {
	return ["U Lindauer Allee", 1]
}

export function getParacelsusBad() {
	return ["U Paracelsus-Bad", 1]
}

export function getRathausReinickendorf() {
	return ["U Rathaus Reinickendorf", 1]
}

export function getResidenzstr() {
	return ["U Residenzstr.", 1]
}

export function getWittenau(product: string) {
	switch (product) {
		case "suburban":
			return ["S Wittenau", 1]
		case "subway":
			return ["U Wittenau", 2]
		default:
			return ["S+U Wittenau", 3]
	}
}
