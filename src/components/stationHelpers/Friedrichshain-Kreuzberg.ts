export function getFrankfurterAllee(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Frankfurter Allee [S-Bahn]", 1]
		case "subway":
			return ["S+U Frankfurter Allee [U5]", 2]
		default:
			return ["S+U Frankfurter Allee [Bahnhof]", 3]
	}
}

export function getGleisdreieck(lineName: string) {
	switch (lineName) {
		case "U2":
			return "U Gleisdreieck [unten, U2]"
		case "U1":
		case "U12":
		case "U3":
			return "U Gleisdreieck [oben, U1]"
		default:
			return "U Gleisdreieck"
	}
}

export function getHalleschesTor(lineName: string) {
	switch (lineName) {
		case "U6":
			return ["U Hallesches Tor [unten, U6]", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Hallesches Tor [oben, U1]", 1]
		default:
			return ["U Hallesches Tor", 3]
	}
}

export function getKottbusserTor(lineName: string) {
	switch (lineName) {
		case "U8":
			return ["U Kottbusser Tor [unten, U8]", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Kottbusser Tor [oben, U1]", 1]
		default:
			return ["U Kottbusser Tor [U-Bahn]", 3]
	}
}

export function getMöckernbrücke(lineName: string) {
	switch (lineName) {
		case "U7":
			return ["U Möckernbrücke [unten, U7]", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Möckernbrücke [oben, U1]", 1]
		default:
			return ["U Möckernbrücke", 3]
	}
}

export function getWarschauerStr(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Warschauer Str. [S-Bahn]", 1]
		case "subway":
			return ["S+U Warschauer Str. [U-Bahn]", 2]
		default:
			return ["S+U Warschauer Str.", undefined]
	}
}
