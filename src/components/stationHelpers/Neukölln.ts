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

export function getRathausNeukölln() {
	return ["U Rathaus Neukölln", 1]
}
