export function getFrankfurterAllee(product: string) {
	switch (product) {
		case "suburban":
			return ["S Frankfurter Allee", 1]
		case "subway":
			return ["U Frankfurter Allee", 2]
		default:
			return ["S+U Frankfurter Allee", 3]
	}
}

export function getGleisdreieck(lineName: string) {
	switch (lineName) {
		case "U2":
			return "U Gleisdreieck ⬇️"
		case "U1":
		case "U12":
		case "U3":
			return "U Gleisdreieck ⬆️"
		default:
			return "U Gleisdreieck"
	}
}

export function getGneisenaustr() {
	return ["U Gneisenaustr.", 1]
}

export function getHalleschesTor(lineName: string) {
	switch (lineName) {
		case "U6":
			return ["U Hallesches Tor ⬇️", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Hallesches Tor ⬆️", 1]
		default:
			return ["U Hallesches Tor", 3]
	}
}

export function getKottbusserTor(lineName: string) {
	switch (lineName) {
		case "U8":
			return ["U Kottbusser Tor ⬇️", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Kottbusser Tor ⬆️", 1]
		default:
			return ["U Kottbusser Tor", 3]
	}
}

export function getMehringdamm() {
	return ["U Mehringdamm", 1]
}

export function getMöckernbrücke(lineName: string) {
	switch (lineName) {
		case "U7":
			return ["U Möckernbrücke ⬇️", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Möckernbrücke ⬆️", 1]
		default:
			return ["U Möckernbrücke", 3]
	}
}

export function getSüdstern() {
	return ["U Südstern", 1]
}

export function getWarschauerStr(product: string) {
	switch (product) {
		case "suburban":
			return ["S Warschauer Str.", 1]
		case "subway":
			return ["U Warschauer Str.", 2]
		default:
			return ["S+U Warschauer Str.", 3]
	}
}
