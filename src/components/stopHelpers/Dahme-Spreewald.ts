export function getBERT1(lineName: string) {
	switch (lineName) {
		case "X7":
		case "X71":
		case "N7":
		case "N60":
			return ["Flughafen BER - Terminal 1-2 [Bus M.-Beese-Ring]", "A6"]
		case "263":
		case "734":
			return ["Flughafen BER - Terminal 1-2 [Bus M.-Beese-Ring]", "A3"]
		case "735":
		case "736":
		case "N36":
			return ["Flughafen BER - Terminal 1-2 [Bus M.-Beese-Ring]", "A4"]
		case "BER2":
			return ["Flughafen BER - Terminal 1-2 [Bus M.-Beese-Ring]", "A2"]
		default:
			return ["Flughafen BER - Terminal 1-2 [Bus M.-Beese-Ring]", null]
	}
}

export function getWaßmannsdorf(lineName: string) {
	switch (lineName) {
		case "600":
		case "720":
		case "742":
			return ["S Waßmannsdorf [Bus A.-Kiekebusch-Str.]", 2]
		case "743":
			return ["S Waßmannsdorf [Bus A.-Kiekebusch-Str.]", 1]
		default:
			return ["S Waßmannsdorf [Bus A.-Kiekebusch-Str.]", null]
	}
}
