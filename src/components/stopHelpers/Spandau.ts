type Dir = string | null

export function getAltstadtSpandau() {
	return ["U Altstadt Spandau [Bus Am Juliusturm]", 2]
}

export function getHaselhorst(id: string, lineName: string) {
	switch (id) {
		case "900000034102":
			switch (lineName) {
				case "M36":
				case "133":
				case "N33":
					return ["U Haselhorst [Bus F.-Friedensburg-Platz]", 2]
				case "X33":
				case "U7":
				case "N7":
					return ["U Haselhorst [Bus Am Juliusturm]", 3]
				default:
					return ["U Haselhorst [Bus]", 5]
			}
		case "900000034170":
			return ["U Haselhorst/Daumstr. [Bus Daumstr.]", 4]
		default:
			return ["U Haselhorst [Bus]", 5]
	}
}

export function getPaulsternstr() {
	return ["U Paulsternstr. [Bus Nonnendammallee]", 2]
}

export function getSpandau(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000029302":
				switch (lineName) {
					case "M32":
						if (provenance.includes("Heidebergplan"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10, 5]
						if (provenance.includes("Döberitzer Weg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10, 5]
						if (provenance.includes("Havelpark"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10, 5]
						if (provenance.includes("Brunsbütteler Damm"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring", 10, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "M36":
						if (provenance.includes("Haselhorst"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (provenance.includes("Am Omnibushof"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "M37":
						if (provenance.includes("Hahneberg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						if (provenance.includes("Spektefeld"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (provenance.includes("Waldkrankenhaus"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "M45":
						if (provenance.includes("Westend"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Hertzallee"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Johannesstift"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (provenance.includes("Klinkeplatz"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "X33":
						if (provenance.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9, 5]
						if (provenance.includes("Wilhelmsruher Damm"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "X37":
						if (provenance.includes("Falkensee"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (provenance.includes("Ruhleben"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						if (provenance.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "134":
					case "N34":
						if (provenance.includes("Hottengrund"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Alt-Kladow"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Alt-Gatow"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Gutsstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Gatower Str"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (provenance.includes("Kisseln"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (provenance.includes("Wolburgsweg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (provenance.includes("Wasserwerk"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "135":
					case "638":
						if (provenance.includes("Alt-Kladow"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10, 5]
						if (provenance.includes("Hottengrund"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10, 5]
						if (provenance.includes("Potsdam"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "136":
						if (provenance.includes("Hennigsdorf"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						if (provenance.includes("Tongaweg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						if (provenance.includes("Aalemannufer"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						if (provenance.includes("Werderstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						if (provenance.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "137":
						if (provenance.includes("Reimerweg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						if (provenance.includes("Freudstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (provenance.includes("Westerwaldstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (provenance.includes("Goldkäferweg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "237":
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
					case "337":
						if (provenance.includes("Galenstr"))
							return ["S+u Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
					case "671":
					case "N7":
						if (provenance.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
					case "N30":
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 10, 5]
					default:
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
				}
			case "900000029371":
				switch (lineName) {
					case "X33":
					case "136":
					case "337":
					case "671":
					case "N7":
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
					case "N30":
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
					case "130":
						if (provenance.includes("Ruhleben"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
						if (provenance.includes("Stresow"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
						if (provenance.includes("Zeppelinstr"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
						if (provenance.includes("Westerwaldstr"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
						if (provenance.includes("Waldkrankenhaus"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
					case "237":
						if (provenance.includes("Isenburger"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
					default:
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
				}
			default:
				return ["S+U Rathaus Spandau", null, 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000029302":
				switch (lineName) {
					case "M32":
						if (direction.includes("Heidebergplan"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Döberitzer Weg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Havelpark"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Brunsbütteler Damm"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring", 5, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "M36":
						if (direction.includes("Haselhorst"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7, 5]
						if (direction.includes("Am Omnibushof"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "M37":
						if (direction.includes("Hahneberg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Spektefeld"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						if (direction.includes("Waldkrankenhaus"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "M45":
						if (direction.includes("Westend"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Zoologischer Garten"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Johannesstift"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (direction.includes("Klinkeplatz"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "X33":
						if (direction.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						if (direction.includes("Wilhelmsruher Damm"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "X37":
						if (direction.includes("Falkensee"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						if (direction.includes("Ruhleben"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "134":
					case "N34":
						if (direction.includes("Hottengrund"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Alt-Kladow"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Alt-Gatow"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Gutsstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Gatower Str"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Kisseln"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						if (direction.includes("Wasserwerk"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 8, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "135":
					case "638":
						if (direction.includes("Alt-Kladow"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Hottengrund"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						if (direction.includes("Potsdam"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "136":
						if (direction.includes("Hennigsdorf"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7, 5]
						if (direction.includes("Tongaweg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7, 5]
						if (direction.includes("Aalemannufer"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7, 5]
						if (direction.includes("Werderstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 7, 5]
						if (direction.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "137":
						if (direction.includes("Reimerweg"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 5, 5]
						if (direction.includes("Freudstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						if (direction.includes("Westerwaldstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
					case "337":
						if (direction.includes("Galenstr"))
							return ["S+u Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 6, 5]
					case "671":
					case "N7":
						if (direction.includes("Galenstr"))
							return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 3, 5]
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 9, 5]
					case "N30":
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", 4, 5]
					default:
						return ["S+U Rathaus Spandau [Bus Altstädter Ring]", null, 5]
				}
			case "900000029371":
				switch (lineName) {
					case "X33":
					case "136":
					case "337":
					case "671":
					case "N7":
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
					case "N30":
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
					case "130":
						if (direction.includes("Ruhleben"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
						if (direction.includes("Stresow"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
						if (direction.includes("Zeppelinstr"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
						if (direction.includes("Westerwaldstr"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
						if (direction.includes("Waldkrankenhaus"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
					case "237":
						if (direction.includes("Isenburger"))
							return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 2, 6]
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
					default:
						return ["S+U Rathaus Spandau [Bus Seegef. Str.]", 1, 6]
				}
			default:
				return ["S+U Rathaus Spandau", null, 7]
		}
	}
}

export function getStresow(id: string) {
	switch (id) {
		case "900000030202":
			return "S Stresow [Freiheit]"
		case "900000030272":
			return "S Stresow [Vorplatz]"
	}
}

export function getZitadelle() {
	return ["U Zitadelle [Bus Am Juliusturm]", 2]
}
