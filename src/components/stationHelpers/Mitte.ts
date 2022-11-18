export function getAlex(id: string, product: string, lineName: string) {
	switch (id) {
		case "900000100003":
			switch (product) {
				case "express":
				case "regional":
					return ["S Alexanderplatz", 1]
				case "suburban":
					return ["S Alexanderpöatz", 2]
				default:
					return ["S Alexanderplatz", 3]
			}
		case "900000100703":
			return ["U Alexanderplatz", 4]
		case "900000100704":
			return ["U Alexanderplatz", 5]
		case "900000100705":
			return ["U Alexanderplatz", 6]
		default:
			return ["U Alexanderplatz", 7]
	}
}

export function getFriedrichstr(product: string, lineName: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S Friedrichstr. ⬆️", 1]
		case "suburban":
			switch (lineName) {
				case "S3":
				case "S5":
				case "S7":
				case "S75":
				case "S9":
					return ["S Friedrichstr. ⬆️", 2]
				case "S1":
				case "S2":
				case "S25":
				case "S26":
					return ["S Friedrichstr. ⬇️", 3]
				default:
					return ["S Friedrichstr.", 4]
			}
		case "subway":
			return ["U Friedrichstr. ⬇️", 5]
		default:
			return ["S+U Friedrichstr.", 6]
	}
}

export function getHeinrichHeineStr() {
	return ["U Heinrich-Heine-Str.", 1]
}

export function getJannowitzbrücke(product: string) {
	switch (product) {
		case "suburban":
			return ["S Jannowitzbrücke", 1]
		case "subway":
			return ["U Jannowitzbrücke", 2]
		default:
			return ["S+U Jannowitzbrücke", 3]
	}
}

export function getLeopoldplatz(lineName: string) {
	switch (lineName) {
		case "U6":
			return ["U Leopoldplatz ⬆️", 1]
		case "U9":
			return ["U Leopoldplatz ⬇️", 2]
		default:
			return ["U Leopoldplatz", 3]
	}
}

export function getPotsdamerPlatz(id: string, product: string) {
	switch (id) {
		case "900000100020":
			switch (product) {
				case "express":
				case "regional":
					return ["S Potsdamer Platz", 1]
				case "suburban":
					return ["S Potsdamer Platz", 2]
				default:
					return ["S Potsdamer Platz", 3]
			}
		case "900000100720":
			return ["U Potsdamer Platz", 4]
		default:
			return ["S+U Potsdamer Platz", 5]
	}
}

export function getStadtmitte(lineName: string) {
	switch (lineName) {
		case "U2":
			return ["U Stadtmitte ⬆️", 1]
		case "U6":
			return ["U Stadtmitte ⬇️", 2]
		default:
			return ["U Stadtmitte", 3]
	}
}

export function getUnterDenLinden(lineName: string) {
	switch (lineName) {
		case "U5":
			return ["U Unter den Linden ⬆️", 1]
		case "U6":
			return ["U Unter den Linden ⬇️", 2]
		default:
			return ["U Unter den Linden", 3]
	}
}

export function getWedding(product: string) {
	switch (product) {
		case "suburban":
			return ["S Wedding", 1]
		case "subway":
			return ["U Wedding", 2]
		default:
			return ["S+U Wedding", 3]
	}
}
