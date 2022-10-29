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
