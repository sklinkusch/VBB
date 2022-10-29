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
			return "U Hallesches Tor [unten, U6]"
		case "U1":
		case "U12":
		case "U3":
			return "U Hallesches Tor [oben, U1]"
		default:
			return "U Hallesches Tor"
	}
}

export function getKottbusserTor(lineName: string) {
	switch (lineName) {
		case "U8":
			return "U Kottbusser Tor [unten, U8]"
		case "U1":
		case "U12":
		case "U3":
			return "U Kottbusser Tor [oben, U1]"
		default:
			return "U Kottbusser Tor"
	}
}

export function getMöckernbrücke(lineName: string) {
	switch (lineName) {
		case "U7":
			return "U Möckernbrücke [unten, U7]"
		case "U1":
		case "U12":
		case "U3":
			return "U Möckernbrücke [oben, U1]"
		default:
			return "U Möckernbrücke"
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
