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
			return ["S Friedrichstr.", 1]
		case "suburban":
			switch (lineName) {
				case "S3":
				case "S5":
				case "S7":
				case "S75":
				case "S9":
					return ["S Friedrichstr.", 2]
				case "S1":
				case "S2":
				case "S25":
				case "S26":
					return ["S Friedrichstr.", 3]
				default:
					return ["S Friedrichstr.", 4]
			}
		case "subway":
			return ["U Friedrichstr.", 5]
		default:
			return ["S+U Friedrichstr.", 6]
	}
}

export function getLeopoldplatz(lineName: string) {
	switch (lineName) {
		case "U6":
			return ["U Leopoldplatz", 1]
		case "U9":
			return ["U Leopoldplatz", 2]
		default:
			return ["U Leopoldplatz [U-Bahn]", 3]
	}
}

export function getPotsdamerPlatz(id: string, product: string) {
	switch (id) {
		case "900000100020":
			switch (product) {
				case "express":
				case "regional":
					return ["S+U Potsdamer Platz [Regionalbahn]", 1]
				case "suburban":
					return ["S+U Potsdamer Platz [S-Bahn]", 2]
				default:
					return ["S+U Potsdamer Platz [Bahnhof]", 3]
			}
		case "900000100720":
			return ["S+U Potsdamer Platz [U2]", 4]
		default:
			return ["S+U Potsdamer Platz", 5]
	}
}

export function getStadtmitte(lineName: string) {
	switch (lineName) {
		case "U2":
			return ["U Stadtmitte [U2]", 1]
		case "U6":
			return ["U Stadtmitte [U6]", 2]
		default:
			return ["U Stadtmitte [U-Bahn]", 3]
	}
}

export function getUnterDenLinden(lineName: string) {
	switch (lineName) {
		case "U5":
			return ["U Unter den Linden [U5]", 1]
		case "U6":
			return ["U Unter den Linden [U6]", 2]
		default:
			return ["U Unter den Linden [U-Bahn]", 3]
	}
}

export function getWedding(product: string) {
	switch (product) {
		case "suburban":
			return ["S+U Wedding [S-Bahn]", 1]
		case "subway":
			return ["S+U Wedding [U6]", 2]
		default:
			return ["S+U Wedding [Bahnhof]", 3]
	}
}
