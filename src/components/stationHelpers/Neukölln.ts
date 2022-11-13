export function getHermannplatz(lineName: string) {
	switch (lineName) {
		case "U7":
			return ["U Hermannplatz ⬇️", 2]
		case "U8":
			return ["U Hermannplatz ⬆️", 1]
		default:
			return ["U Hermannplatz [U-Bahn]", 3]
	}
}

export function getKarlMarxStr() {
	return ["U Karl-Marx-Str.", 1]
}

export function getNeukölln(product: string) {
	switch (product) {
		case "suburban":
			return ["S Neukölln ⬆️", 1]
		case "subway":
			return ["U Neukölln ⬇️", 2]
		default:
			return ["S+U Neukölln", 3]
	}
}

export function getRathausNeukölln() {
	return ["U Rathaus Neukölln", 1]
}
