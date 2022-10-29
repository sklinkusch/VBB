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
