type Dir = string | null

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

export function getBERT5(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "X7":
			case "X71":
			case "N7":
				if (provenance.includes("Flughafen"))
					return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 1]
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
			case "743":
				if (provenance.includes("Flughafen"))
					return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 2]
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
			case "N60":
				if (provenance.includes("Flughafen"))
					return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 5]
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
			case "163":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 6]
			case "164":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 5]
			case "171":
			case "742":
			case "744":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 2]
			case "741":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 4]
			case "N7X":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
			case "BER2":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 11]
			default:
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "X7":
			case "X71":
			case "N7":
				if (direction.includes("Flughafen"))
					return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 1]
			case "743":
				if (direction.includes("Flughafen"))
					return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 2]
			case "N60":
				if (direction.includes("Flughafen"))
					return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 5]
			case "163":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 6]
			case "164":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 5]
			case "171":
			case "742":
			case "744":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 2]
			case "741":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 4]
			case "N7X":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 3]
			case "BER2":
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", 11]
			default:
				return ["Flughafen BER - Terminal 5 [Bus Vorplatz]", null]
		}
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
