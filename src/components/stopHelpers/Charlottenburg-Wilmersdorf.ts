type Dir = string | null

export function getAdenauerplatz(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M19":
			case "M29":
			case "X10":
			case "N10":
				return ["U Adenauerplatz [Bus Kurfürstendamm]", 2]
			case "310":
			case "U7":
			case "N7":
				if (/(Charlottenburg|Galenstr|Spandau)/.test(provenance))
					return ["U Adenauerplatz [Bus Brandenburgische Str.]", 4]
				return ["U Adenauerplatz [Bus Lewishamstr.]", 3]
			case "109":
				if (provenance.includes("Hertzallee"))
					return ["U Adenauerplatz [Bus Lewishamstr.]", 3]
				return ["U Adenauerplatz [Bus Kurfürstendamm]", 2]
			case "110":
				if (provenance.includes("Hertzallee"))
					return ["U Adenauerplatz [Bus Brandenburgische Str.]", 4]
				return ["U Adenauerplatz [Bus Kurfürstendamm]", 2]
			default:
				return ["U Adenauerplatz [Bus]", 5]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M19":
			case "M29":
			case "X10":
			case "N10":
				return ["U Adenauerplatz [Bus Kurfürstendamm]", 2]
			case "310":
			case "U7":
			case "N7":
				if (/(Charlottenburg|Spandau|Galenstr)/.test(direction))
					return ["U Adenauerplatz [Bus Lewishamstr.]", 3]
				return ["U Adenauerplatz [Bus Brandenburgische Str.]", 4]
			case "109":
				if (direction.includes("Zoo"))
					return ["U Adenauerplatz [Bus Kurfürstendamm]", 2]
				return ["U Adenauerplatz [Bus Lewishamstr.]", 3]
			case "110":
				if (direction.includes("Zoo"))
					return ["U Adenauerplatz [Bus Kurfürstendamm]", 2]
				return ["U Adenauerplatz [Bus Brandenburgische Str.]", 4]
			default:
				return ["U Adenauerplatz [Bus]", 5]
		}
	}
}

export function getBerlinerStr(lineName: string) {
	switch (lineName) {
		case "M43":
		case "143":
		case "N7X":
		case "N9":
			return "U Berliner Str. [Bus Bundesallee]"
		case "N7":
			return "U Berliner Str. [Bus Berliner Str.]"
		default:
			return "U Berliner Str. [Bus Bundesallee]"
	}
}

export function getBismarckstr() {
	return ["U Bismarckstr. [Bus Bismarckstr.]", 4]
}

export function getBlissestr(id: string, lineName: string) {
	switch (id) {
		case "900000041102":
			switch (lineName) {
				case "101":
				case "310":
					return "U Blissestr. [Bus Blissestr.]"
				case "143":
				case "N7":
				case "N43":
					return "U Blissestr. [Bus Brandenburgische Str.]"
				default:
					return "U Blissestr. [Bus]"
			}
		case "900000043172":
			switch (lineName) {
				case "249":
				case "310":
					return "U Blissestr./Uhlandstr. [Bus Uhlandstr.]"
				case "143":
				case "N7":
				case "N43":
					return "U Blissestr./Uhlandstr. [Bus Berliner Str.]"
				default:
					return "U Blissestr./Uhlandstr."
			}
		default:
			return "U Blissestr. [Bus]"
	}
}

export function getBundesplatz() {
	return "S+U Bundesplatz [Bus Bundesallee]"
}

export function getCharlottenburg(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000024101":
				return ["S Charlottenburg [Bus Stuttgarter Platz]", 5, 7]
			case "900000024103":
				if (provenance.includes("Hertzallee"))
					return ["S Charlottenburg/Gervinusstr.", 7, 8]
				if (provenance.includes("Blissestr"))
					return ["S Charlottenburg/Gervinusstr.", 7, 8]
				return ["S Charlottenburg/Gervinusstr.", 6, 8]
			case "900000024202":
				if (/(Hertzallee|Savignyplatz)/.test(provenance))
					return ["U Wilmersdorfer Str. [Bus Kantstr.]", 2, 5]
				if (["X49", "309"].includes(lineName))
					return ["U Wilmersdorfer Str. [Bus Kantstr.]", 2, 5]
				return ["U Wilmersdorfer Str. [Bus Kantstr.]", 1, 5]
			case "900000024205":
				if (["309", "310"].includes(lineName))
					return ["U Wilmersdorfer Str./S Charlottenburg", 4, 6]
				return ["U Wilmersdorfer Str./S Charlottenburg", 3, 6]
			default:
				return ["S Charlottenburg [Bus]", null, 9]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000024101":
				return ["S Charlottenburg [Bus Stuttgarter Platz]", 5, 7]
			case "900000024103":
				if (direction.includes("Zoo"))
					return ["S Charlottenburg/Gervinusstr.", 6, 8]
				return ["S Charlottenburg/Gervinusstr.", 7, 8]
			case "900000024202":
				if (/(Zoo|Savignyplatz)/.test(direction))
					return ["U Wilmersdorfer Str. [Bus Kantstr.]", 1, 5]
				return ["U Wilmersdorfer Str. [Bus Kantstr.]", 2, 5]
			case "900000024205":
				if (lineName === "X49")
					return ["U Wilmersdorfer Str./S Charlottenburg", 3, 6]
				return ["U Wilmersdorfer Str./S Charlottenburg", 4, 6]
			default:
				return ["S Charlottenburg [Bus]", null, 9]
		}
	}
}

export function getDeutscheOper() {
	return "U Deutsche Oper [Bus Bismarckstr.]"
}

export function getErnstReuterPlatz() {
	return "U Ernst-Reuter-Platz [Bus Hardenbergstr.]"
}

export function getFehrbellinerPlatz(lineName: string) {
	switch (lineName) {
		case "101":
		case "143":
		case "U7":
		case "N7":
		case "N43":
			return ["U Fehrbelliner Platz [Bus Brandenburgische Str.]", 4]
		case "115":
		case "U3":
		case "N3":
			return ["U Fehrbelliner Platz [Bus Hohenzollerndamm]", 5]
		default:
			return ["U Fehrbelliner Platz [Bus]", 6]
	}
}

export function getGrunewald(lineName: string) {
	switch (lineName) {
		case "M19":
		case "186":
			return "S Grunewald [Karmielplatz]"
		case "349":
			return "S Grunewald [Schmetterlingsplatz]"
		default:
			return "S Grunewald"
	}
}

export function getGüntzelstr() {
	return "U Güntzelstr. [Bus Bundesallee]"
}

export function getHalemweg() {
	return ["U Halemweg [Bus Halemweg]", 2]
}

export function getHalensee() {
	return "S Halensee [Bus Kurfürstendamm]"
}

export function getHeerstr() {
	return "S Heerstr. [Bus Heerstr.]"
}

export function getHeidelbergerPlatz(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "249":
			case "310":
				return ["S+U Heidelberger Platz [Bus Mecklenburgische Str.]", 4]
			case "N3":
				if (provenance.includes("Mexikoplatz"))
					return ["S+U Heidelberger Platz [Bus Detmolder Str.]", 5]
				return ["S+U Heidelberger Platz [Bus Rudolstädter Str.]", 6]
			default:
				return ["S+U Heidelberger Platz [Bus]", 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "249":
			case "310":
				return ["S+U Heidelberger Platz [Bus Mecklenburgische Str.]", 4]
			case "N3":
				if (direction.includes("Mexikoplatz"))
					return ["S+U Heidelberger Platz [Bus Rudolstädter Str.]", 6]
				return ["S+U Heidelberger Platz [Bus Detmolder Str.]", 5]
			default:
				return ["S+U Heidelberger Platz [Bus]", 7]
		}
	}
}

export function getHohenzollerndamm(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "115":
				if (provenance.includes("Barstr."))
					return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
				return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 2]
			case "N3":
				if (provenance.includes("Mexikoplatz"))
					return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 6]
				return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
			case "N10":
				if (provenance.includes("Hertzallee"))
					return ["S Hohenzollerndamm [Bus Seesener Str.]", 3]
				return ["S Hohenzollerndamm [Bus Seesener Str.]", 4]
			default:
				return ["S Hohenzollerndamm [Bus]", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "115":
				if (direction.includes("Fehrbelliner Platz"))
					return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 2]
				return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
			case "N3":
				if (direction.includes("Mexikoplatz"))
					return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 5]
				return ["S Hohenzollerndamm [Bus Hohenzollerndamm]", 6]
			case "N10":
				if (direction.includes("Zoo"))
					return ["S Hohenzollerndamm [Bus Seesener Str.]", 4]
				return ["S Hohenzollerndamm [Bus Seesener Str.]", 3]
			default:
				return ["S Hohenzollerndamm [Bus]", null]
		}
	}
}

export function getHohenzollernplatz(lineName: string) {
	switch (lineName) {
		case "249":
			return "U Hohenzollernplatz [Bus Uhlandstr.]"
		case "N3":
			return "U Hohenzollernplatz [Bus Hohenzollerndamm]"
		default:
			return "U Hohenzollernplatz [Bus]"
	}
}

export function getJakobKaiserPlatz(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M21":
			case "X21":
				if (provenance.includes("Goerdelersteg"))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
			case "109":
				if (provenance.includes("Tegel"))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
			case "123":
				if (/(Hauptbahnhof|Turmstr)/.test(provenance))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
			case "N7":
				if (/(Spandau|Galenstr)/.test(provenance))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
			default:
				return ["U Jakob-Kaiser-Platz [Bus]", 4]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M21":
			case "X21":
				if (direction.includes("Jungfernheide"))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
			case "109":
				if (direction.includes("Tegel"))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
			case "123":
				if (/(Hauptbahnhof|Turmstr)/.test(direction))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
			case "N7":
				if (/(Spandau|Galenstr)/.test(direction))
					return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm Ost]", 2]
				return ["U Jakob-Kaiser-Platz [Bus K.-Schumacher-Damm West]", 3]
			default:
				return ["U Jakob-Kaiser-Platz [Bus]", 4]
		}
	}
}

export function getJungfernheide(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000020201":
				switch (lineName) {
					case "M21":
					case "X21":
						if (provenance.includes("Goerdelersteg"))
							return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 3, 4]
						return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5, 4]
					case "M27":
					case "U7":
					case "N7":
						if (/(Spandau|Galenstr)/.test(provenance))
							return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5, 4]
						return ["S+U Jungfernheide [Bus Olbersstr.]", 6, 5]
					default:
						return ["S+U Jungfernheide [Bus]", null, 7]
				}
			case "900000020207":
				switch (lineName) {
					case "M27":
					case "U7":
					case "N7":
						return ["Tegeler Weg/S Jungfernheide", 2, 6]
					case "109":
						if (provenance.includes("Hertzallee"))
							return ["Tegeler Weg/S Jungfernheide", 2, 6]
						return ["Tegeler Weg/S Jungfernheide", 1, 6]
					default:
						return ["Tegeler Weg/S Jungfernheide", 2, 6]
				}
			default:
				return ["S+U Jungfernheide [Bus]", null, 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000020201":
				switch (lineName) {
					case "M21":
					case "X21":
						if (direction.includes("Goerdelersteg"))
							return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5, 4]
						return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 3, 4]
					case "M27":
					case "U7":
					case "N7":
						if (/(Flughafen|Rudow|Pankow)/.test(direction))
							return ["S+U Jungfernheide [Bus Max-Dohrn-Str.]", 5, 4]
						return ["S+U Jungfernheide [Bus Olbersstr.]", 6, 5]
					default:
						return ["S+U Jungfernheide [Bus]", null, 7]
				}
			case "900000020207":
				switch (lineName) {
					case "M27":
					case "U7":
					case "N7":
						return ["Tegeler Weg/S Jungfernheide", 2, 6]
					case "109":
						if (direction.includes("Zoologischer Garten"))
							return ["Tegeler Weg/S Jungfernheide", 1, 6]
						return ["Tegeler Weg/S Jungfernheide", 2, 6]
					default:
						return ["Tegeler Weg/S Jungfernheide", 2, 6]
				}
			default:
				return ["S+U Jungfernheide [Bus]", null, 7]
		}
	}
}

export function getKonstanzerStr() {
	return ["U Konstanzer Str. [Bus Brandenburgische Str.]", 2]
}

export function getKurfürstendamm(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M19":
			case "M29":
			case "N3":
				return "U Kurfürstendamm [Bus Kurfürstendamm]"
			case "M46":
			case "X10":
			case "109":
			case "110":
			case "U1":
			case "N1":
			case "N10":
			case "N26":
				if (provenance.includes("Hertzallee"))
					return "U Kurfürstendamm [Bus Kurfürstendamm]"
				return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
			case "204":
			case "249":
			case "N7X":
			case "U9":
			case "N9":
				return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
			case "N2":
				if (provenance.includes("Ruhleben"))
					return "U Kurfürstendamm [Bus Kurfürstendamm]"
				if (provenance.includes("Zoologischer Garten"))
					return "U Kurfürstendamm [Bus Kurfürstendamm]"
				return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
			default:
				return "U Kurfürstendamm [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M19":
			case "M29":
			case "N3":
				return "U Kurfürstendamm [Bus Kurfürstendamm]"
			case "M46":
			case "X10":
			case "109":
			case "110":
			case "U1":
			case "N1":
			case "N10":
			case "N26":
				if (direction.includes("Zoologischer Garten"))
					return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
				if (direction.includes("Hertzallee"))
					return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
				return "U Kurfürstendamm [Bus Kurfürstendamm]"
			case "204":
			case "249":
			case "U9":
			case "N9":
				return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
			case "N2":
				if (direction.includes("Ruhleben"))
					return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
				if (direction.includes("Zoologischer Garten"))
					return "U Kurfürstendamm [Bus Joachimsthaler Str.]"
				return "U Kurfürstendamm [Bus Kurfürstendamm]"
			default:
				return "U Kurfürstendamm [Bus]"
		}
	}
}

export function getMesseNord(id: string, lineName: string) {
	switch (id) {
		case "900000026204":
			return "Messedamm/ZOB"
		case "900000024106":
			return "S Messe Nord/ICC [Bus Neue Kantstr.]"
		case "900000026202":
			if (lineName === "N2") return "U Kaiserdamm [Bus Kaiserdamm]"
			return "U Kaiserdamm [Bus Königin-Elisabeth-Str.]"
		default:
			return "S Messe Nord/ICC [Bus]"
	}
}

export function getMesseSüd() {
	return "S Messe Süd [Bus Eichkampstr.]"
}

export function getMierendorffplatz(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M27":
				if (provenance.includes("Jungfernheide"))
					return ["U Mierendorffplatz [Bus Mierendorffplatz Ost]", 2]
				return ["U Mierendorffplatz [Bus Mierendorffplatz Süd]", 3]
			case "N7":
				if (/(Spandau|Galenstr)/.test(provenance))
					return ["U Mierendorffplatz [Bus Mierendorffplatz Ost]", 2]
				return ["U Mierendorffplatz [Bus Mierendorffplatz Süd]", 3]
			default:
				return ["U Mierendorffplatz [Bus]", 4]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M27":
				if (direction.includes("Jungfernheide"))
					return ["U Mierendorffplatz [Bus Mierendorffplatz Süd]", 3]
				return ["U Mierendorffplatz [Bus Mierendorffplatz Ost]", 2]
			case "N7":
				if (/(Spandau|Galenstr)/.test(direction))
					return ["U Mierendorffplatz [Bus Mierendorffplatz Süd]", 3]
				return ["U Mierendorffplatz [Bus Mierendorffplatz Ost]", 2]
			default:
				return ["U Mierendorffplatz [Bus]", 4]
		}
	}
}

export function getNeuWestend() {
	return "U Neu-Westend [Bus Reichsstr.]"
}

export function getRichardWagnerPlatz(lineName: string) {
	switch (lineName) {
		case "M45":
			return ["U Richard-Wagner-Platz [Bus O.-Suhr-Allee]", 2]
		case "U7":
		case "N7":
			return ["U Richard-Wagner-Platz [Bus R.-Wagner-Str.]", 3]
		default:
			return ["U Richard-Wagner-Platz [Bus]", 4]
	}
}

export function getRüdesheimerPlatz() {
	return "U Rüdesheimer Platz [Bus Wiesbadener Str.]"
}

export function getRuhleben(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M45":
				if (provenance.includes("Hertzallee"))
					return "U Ruhleben [Bus Hempelsteig]"
				if (provenance.includes("Westend"))
					return "U Ruhleben [Bus Hempelsteig]"
				return "U Ruhleben [Bus Charlottenburger Chaussee]"
			case "130":
			case "N2":
				return "U Ruhleben [Bus Hempelsteig]"
			case "131":
			case "X37":
				return "U Ruhleben [Bus]"
			default:
				return "U Ruhleben [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M45":
				if (direction.includes("Zoologischer Garten"))
					return "U Ruhleben [Bus Charlottenburger Chaussee]"
				if (direction.includes("Westend"))
					return "U Ruhleben [Bus Charlottenburger Chaussee]"
				return "U Ruhleben [Bus Hempelsteig]"
			case "131":
			case "X37":
				if (direction.includes("Ruhleben"))
					return "U Ruhleben [Bus Charlottenburger Chaussee]"
				return "U Ruhleben [Bus Hempelsteig]"
			case "130":
			case "N2":
				return "U Ruhleben [Bus]"
			default:
				return "U Ruhleben [Bus]"
		}
	}
}

export function getSophieCharlottePlatz(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "309":
				if (provenance.includes("Wilmersdorfer"))
					return "U Sophie-Charlotte-Platz [Bus Suarezstr.]"
				return "U Sophie-Charlotte-Platz [Bus Schloßstr.]"
			case "N2":
				return "U Sophie-Charlotte-Platz [Bus Kaiserdamm]"
			default:
				return "U Sophie-Charlotte-Platz [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "309":
				if (direction.includes("Wilmersdorfer"))
					return "U Sophie-Charlotte-Platz [Bus Schloßstr.]"
				return "U Sophie-Charlotte-Platz [Bus Suarezstr.]"
			case "N2":
				return "U Sophie-Charlotte-Platz [Bus Kaiserdamm]"
			default:
				return "U Sophie Charlotte-Platz [Bus]"
		}
	}
}

export function getSpichernstr() {
	return ["U Spichernstr. [Bus Bundesallee]", 4]
}

export function getTheo(id: string) {
	switch (id) {
		case "900000026201":
			return "U Theodor-Heuss-Platz [Bus Th.-Heuss-Pl. Nord]"
		case "900000026203":
			return "U Theodor-Heuss-Platz Süd"
		case "900000026271":
			return "U Theodor-Heuss-Platz West"
		default:
			return "U Theodor-Heuss-Platz [Bus]"
	}
}

export function getUhlandstr() {
	return "U Uhlandstr. [Bus Kurfürstendamm]"
}

export function getWestend(id: string) {
	switch (id) {
		case "900000026207":
			return "S Westend [Bus Spandauer Damm]"
		case "900000020204":
			return "Sophie-Charlotten-Str."
		default:
			return "S Westend [Bus]"
	}
}

export function getWestkreuz() {
	return "S Westkreuz [Bus Halenseestr.]"
}

export function getZooBusStops(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000023201":
				if (!provenance.includes("Hertzallee")) {
					return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 10, 7]
				}
				switch (lineName) {
					case "X10":
					case "109":
					case "110":
					case "N7X":
					case "N10":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 4, 7]
					case "M49":
					case "X34":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5, 7]
					case "N9":
						if (provenance.includes("Osloer"))
							return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5, 7]
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5, 7]
					case "M45":
					case "245":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 6, 7]
					case "100":
					case "200":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7, 7]
					case "N2":
						if (provenance.includes("Ruhleben"))
							return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7, 7]
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7, 7]
					case "M46":
					case "204":
					case "N1":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 8, 7]
					case "249":
					case "N26":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 9, 7]
					default:
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null, 7]
				}
			case "900000023172":
				switch (lineName) {
					case "M45":
					case "245":
						if (
							!provenance.includes("S+U Zoologischer Garten") &&
							!provenance.includes("Hertzallee")
						) {
							return ["S+U Zoologischer Garten/Jebensstr.", 1, 8]
						}
						return ["S+U Zoologischer Garten/Jebensstr.", 2, 8]
					case "100":
					case "200":
					case "U2":
					case "N2":
					case "U9":
					case "N9":
						return ["S+U Zoologischer Garten/Jebensstr.", 3, 8]
					default:
						return ["S+U Zoologischer Garten/Jebensstr.", null, 8]
				}
			default:
				return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null, 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000023201":
				if (
					direction.includes("Hertzallee") ||
					direction.includes("Fahrt endet hier")
				) {
					return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 10, 7]
				}
				switch (lineName) {
					case "X10":
					case "109":
					case "110":
					case "N7X":
					case "N10":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 4, 7]
					case "M49":
					case "X34":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5, 7]
					case "U9":
					case "N9":
						if (direction.includes("Steglitz"))
							return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5, 7]
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 5, 7]
					case "M45":
					case "245":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 6, 7]
					case "100":
					case "200":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7, 7]
					case "U2":
					case "N2":
						if (direction.includes("Pankow"))
							return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7, 7]
						if (direction.includes("Alexanderplatz"))
							return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7, 7]
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 7, 7]
					case "M46":
					case "204":
					case "N1":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 8, 7]
					case "249":
					case "N26":
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", 9, 7]
					default:
						return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null, 7]
				}
			case "900000023172":
				switch (lineName) {
					case "M45":
					case "245":
						if (
							direction.includes("S+U Zoologischer Garten") ||
							direction.includes("Hertzallee")
						) {
							return ["S+U Zoologischer Garten/Jebensstr.", 1, 8]
						}
						return ["S+U Zoologischer Garten/Jebensstr.", 2, 8]
					case "100":
					case "200":
					case "U2":
					case "N2":
					case "U9":
					case "N9":
						return ["S+U Zoologischer Garten/Jebensstr.", 3, 8]
					default:
						return ["S+U Zoologischer Garten/Jebensstr.", null, 8]
				}
			default:
				return ["S+U Zoologischer Garten [Bus Hardenbergplatz]", null, 7]
		}
	}
}
