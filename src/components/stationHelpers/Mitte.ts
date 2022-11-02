export function getAlex(id: string, product: string, lineName: string) {
	switch (id) {
		case "900000100003":
			switch (product) {
				case "express":
				case "regional":
					return ["S+U Alexanderplatz [Regionalbahn]", 1]
				case "suburban":
					return ["S+U Alexanderpöatz [S-Bahn]", 2]
				default:
					return ["S+U Alexanderplatz [Bahnhof]", 3]
			}
		case "900000100703":
			return ["S+U Alexanderplatz [U2]", 4]
		case "900000100704":
			return ["S+U Alexanderplatz [U5]", 5]
		case "900000100705":
			return ["S+U Alexanderplatz [U8]", 6]
		default:
			return ["S+U Alexanderplatz", 7]
	}
}

export function getFriedrichstr(product: string, lineName: string) {
	switch (product) {
		case "express":
		case "regional":
			return ["S+U Friedrichstr. [Regionalbahn]", 1]
		case "suburban":
			switch (lineName) {
				case "S3":
				case "S5":
				case "S7":
				case "S75":
				case "S9":
					return ["S+U Friedrichstr. [Stadtbahn]", 2]
				case "S1":
				case "S2":
				case "S25":
				case "S26":
					return ["S+U Friedrichstr. [Nordsüdbahn]", 3]
				default:
					return ["S+U Friedrichstr. [S-Bahn]", 4]
			}
		case "subway":
			return ["S+U Friedrichstr. [U6]", 5]
		default:
			return ["S+U Friedrichstr. [Bahnhof]", 6]
	}
}

export function getLeopoldplatz(lineName: string) {
	switch (lineName) {
		case "U6":
			return ["U Leopoldplatz [U6]", 1]
		case "U9":
			return ["U Leopoldplatz [U9]", 2]
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
