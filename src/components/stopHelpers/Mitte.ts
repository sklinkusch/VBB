type Dir = string | null

export function getAlex(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000100712":
				return ["S+U Alexanderplatz/Grunerstr. [Alexanderstr.]", 18, 12]
			case "900000100711":
				return ["S+U Alexanderplatz/Grunerstr. [Grunerstr.]", 17, 11]
			case "900000100024":
				return ["S+U Alexanderplatz/Dircksenstr.", "13/14", 9]
			case "900000100026":
				switch (provenance) {
					case "Clara-Jaschke-Str.":
					case "S Hackescher Markt":
						return ["S+U Alexanderplatz/Gontardstr.", 16, 10]
					default:
						return ["S+U Alexanderplatz/Gontardstr.", 15, 10]
				}
			case "900000100031":
				switch (lineName) {
					case "100":
					case "200":
						if (provenance.includes("Hertzallee"))
							return ["S+U Alexanderplatz/Memhardstr.", 24, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 1, 8]
					case "N2":
						if (provenance.includes("Ruhleben"))
							return ["S+U Alexanderplatz/Memhardstr.", 25, 8]
						if (provenance.includes("Zoologischer Garten"))
							return ["S+U Alexanderplatz/Memhardstr.", 25, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 21, 8]
					case "N5":
						if (provenance.includes("Riesaer Str"))
							return ["S+U Alexanderplatz/Memhardstr.", 21, 8]
						if (provenance.includes("Wuhletal"))
							return ["S+U Alexanderplatz/Memhardstr.", 21, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 24, 8]
					case "N8":
						if (provenance.includes("Hermannstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 26, 8]
						if (provenance.includes("Hermannplatz"))
							return ["S+U Alexanderplatz/Memhardstr.", 26, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 22, 8]
					case "N40":
						if (provenance.includes("Turmstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 22, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 25, 8]
					case "N42":
						return ["S+U Alexanderplatz/Memhardstr.", 23, 8]
					case "N60":
					case "N65":
						return ["S+U Alexanderplatz/Memhardstr.", 20, 8]
					default:
						return ["S+U Alexanderplatz/Memhardstr.", null, 8]
				}
			default:
				return ["S+U Alexanderplatz", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000100712":
				return ["S+U Alexanderplatz/Grunerstr. [Alexanderstr.]", 18, 12]
			case "900000100711":
				return ["S+U Alexanderplatz/Grunerstr. [Grunerstr.]", 17, 11]
			case "900000100024":
				return ["S+U Alexanderplatz/Dircksenstr.", "13/14", 9]
			case "900000100026":
				switch (direction) {
					case "S+U Hauptbahnhof":
					case "S Hackescher Markt":
						return ["S+U Alexanderplatz/Gontardstr.", 15, 10]
					default:
						return ["S+U Alexanderplatz/Gontardstr.", 16, 10]
				}
			case "900000100031":
				switch (lineName) {
					case "100":
					case "200":
						if (direction.includes("Michelangelostr"))
							return ["S+U Alexanderplatz/Memhardstr.", 24, 8]
						if (direction.includes("Memhardstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 24, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 1, 8]
					case "N2":
						if (direction.includes("Ruhleben"))
							return ["S+U Alexanderplatz/Memhardstr.", 21, 8]
						if (direction.includes("Zoologischer Garten"))
							return ["S+U Alexanderplatz/Memhardstr.", 21, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 25, 8]
					case "N5":
						if (direction.includes("Riesaer Str"))
							return ["S+U Alexanderplatz/Memhardstr.", 24, 8]
						if (direction.includes("Wuhletal"))
							return ["S+U Alexanderplatz/Memhardstr.", 24, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 21, 8]
					case "N8":
						if (direction.includes("Hermannstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 22, 8]
						if (direction.includes("Hermannplatz"))
							return ["S+U Alexanderplatz/Memhardstr.", 22, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 26, 8]
					case "N40":
						if (direction.includes("Turmstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 25, 8]
						return ["S+U Alexanderplatz/Memhardstr.", 22, 8]
					case "N42":
						return ["S+U Alexanderplatz/Memhardstr.", 23, 8]
					case "N60":
					case "N65":
						return ["S+U Alexanderplatz/Memhardstr.", 20, 8]
					default:
						return ["S+U Alexanderplatz/Memhardstr.]", null, 8]
				}
			default:
				return ["S+U Alexanderplatz", null]
		}
	}
}

export function getBeusselstr() {
	return "S Beusselstr. [Bus Beusselstr.]"
}

export function getBrandenburgerTor() {
	return "S+U Brandenburger Tor [Bus Unter den Linden]"
}

export function getFriedrichstr(product: string) {
	switch (product) {
		case "tram":
			return ["S+U Friedrichstr. [Tram Friedrichstr.]", 7]
		case "bus":
			return ["S+U Friedrichstr. [Bus Friedrichstr.]", 8]
		default:
			return ["S+U Friedrichstr.", 9]
	}
}

export function getGesundbrunnen(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		if (lineName === "N8" && provenance.includes("Wilhelmsruher"))
			return "S+U Gesundbrunnen [Bus Badstr.]"
		if (lineName === "N8" && provenance.includes("Osloer"))
			return "S+U Gesundbrunnen [Bus Badstr.]"
		return "S+U Gesundbrunnen [Bus H.-Sobek-Pl.]"
	} else if (mode === "dep" && direction !== null) {
		if (lineName === "N8" && direction.includes("Hermannplatz"))
			return "S+U Gesundbrunnen [Bus Badstr.]"
		if (lineName === "N8" && direction.includes("Hermannstr"))
			return "S+U Gesundbrunnen [Bus Badstr.]"
		return "S+U Gesundbrunnen [Bus H.-Sobek-Pl.]"
	}
}

export function getHackescherMarkt(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M1":
				if (provenance.includes("Kupfergraben"))
					return ["S Hackescher Markt [Tram H.-Herz-Pl.]", 3]
				return ["S Hackescher Markt [Tram Rosenthaler Str.]", 1]
			case "M4":
			case "M6":
				return ["S Hackescher Markt [Tram H.-Herz-Pl..]", 3]
			case "M5":
				if (provenance.includes("Lüneburger Str"))
					return ["S Hackescher Markt [Tram Garnisonkirchpl.]", 2]
				return ["S Hackescher Markt [Tram H.-Herz-Pl.]", 3]
			case "N42":
				if (provenance.includes("Alexanderplatz"))
					return ["S Hackescher Markt [Bus An der Spandauer Brücke]", 4]
				return ["S Hackescher Markt [Bus An der Spandauer Brücke]", 5]
			default:
				return ["S Hackescher Markt [Tram Bus]", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M1":
				if (direction.includes("Kupfergraben"))
					return ["S Hackescher Markt [Tram Rosenthaler Str.]", 1]
				return ["S Hackescher Markt [Tram H.-Herz-Pl.]", 3]
			case "M4":
			case "M6":
				return ["S Hackescher Markt [Tram Garnisonkirchpl.]", 2]
			case "M5":
				if (direction.includes("Hauptbahnhof"))
					return ["S Hackescher Markt [Tram H.-Herz-Pl.]", 3]
				return ["S Hackescher Markt [Tram Garnisonkirchpl.]", 2]
			case "N42":
				if (direction.includes("Alexanderplatz"))
					return ["S Hackescher Markt [Bus An der Spandauer Brücke]", 5]
				return ["S Hackescher Markt [Bus An der Spandauer Brücke]", 4]
			default:
				return ["S Hackescher Markt [Tram Bus]", null]
		}
	}
}

export function getHbf(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M5":
			case "M8":
			case "M10":
				if (provenance.includes("Clara-Jaschke-Str"))
					return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 5]
				return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 4]
			case "120":
				if (provenance.includes("Seydlitzstr"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
			case "142":
			case "147":
				if (provenance.includes("Ostbahnhof"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				if (provenance.includes("Märkisches Museum"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
			case "245":
				if (provenance.includes("Hertzallee"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
			case "N5":
			case "N20":
				if (provenance.includes("Riesaer Str"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				if (provenance.includes("Wuhletal"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				if (provenance.includes("Hainbuchenstr"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
			case "N40":
				if (provenance.includes("Tiergarten"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
			case "M41":
			case "M85":
			case "123":
				return ["S+U Berlin Hauptbahnhof [Bus Minna-Cauer-Str.]", 1]
			default:
				return ["S+U Berlin Hauptbahnhof", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M5":
			case "M8":
			case "M10":
				if (direction.includes("Lüneburger Str"))
					return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 4]
				return ["S+U Berlin Hauptbahnhof [Tram Invalidenstr.]", 5]
			case "120":
				if (direction.includes("Seydlitzstr"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
			case "142":
			case "147":
				if (direction.includes("Ostbahnhof"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				if (direction.includes("Märkisches Museum"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
			case "245":
				if (direction.includes("Zoo"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
			case "N5":
			case "N20":
				if (direction.includes("Riesaer Str"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				if (direction.includes("Wuhletal"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				if (direction.includes("Hainbuchenstr"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
			case "N40":
				if (direction.includes("Turmstr"))
					return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 3]
				return ["S+U Berlin Hauptbahnhof [Bus Invalidenstr.]", 6]
			case "M41":
			case "M85":
			case "123":
				return ["S+U Berlin Hauptbahnhof [Bus Minna-Cauer-Str.]", 2]
			default:
				return ["S+U Berlin Hauptbahnhof", null]
		}
	}
}

export function getHeinrichHeineStr(lineName: string) {
	switch (lineName) {
		case "U8":
		case "N8":
			return ["U Heinrich-Heine-Str. [Bus H.-Heine-Str.]", 3]
		default:
			return ["U Heinrich-Heine-Str. [Bus Köpenicker Str.]", 2]
	}
}

export function getHumboldthain() {
	return "S Humboldthain [Bus Hochstr.]"
}

export function getJannowitzbrücke(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "300":
				if (provenance.includes("Warschauer"))
					return ["S+U Jannowitzbrücke [Bus Alexanderstr.]", 4]
				return ["S+U Jannowitzbrücke [Bus Holzmarktstr.]", 5]
			case "U8":
			case "N8":
				return ["S+U Jannowitzbrücke [Bus Jannowitzbrücke]", 6]
			case "N40":
				if (provenance.includes("Blockdammweg"))
					return ["S+U Jannowitzbrücke [Bus Alexanderstr.]", 4]
				return ["S+U Jannowitzbrücke [Bus Jannowitzbrücke]", 6]
			case "N60":
			case "N65":
				return ["S+U Jannowitzbrücke [Bus Alexanderstr.]", 4]
			default:
				return ["S+U Jannowitzbrücke [Bus]", 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "300":
				if (direction.includes("Warschauer"))
					return ["S+U Jannowitzbrücke [Bus Holzmarktstr.]", 5]
				return ["S+U Jannowitzbrücke [Bus Alexanderstr.]", 4]
			case "U8":
			case "N8":
				return ["S+U Jannowitzbrücke [Bus Jannowitzbrücke]", 6]
			case "N40":
				if (direction.includes("Blockdammweg"))
					return ["S+U Jannowitzbrücke [Bus Jannowitzbrücke]", 6]
				return ["S+U Jannowitzbrücke [Bus Alexanderstr.]", 4]
			case "N60":
			case "N65":
				return ["S+U Jannowitzbrücke [Bus Alexanderstr.]", 4]
			default:
				return ["S+U Jannowitzbrücke [Bus]", 7]
		}
	}
}

export function getLeopoldplatz(mode: string, lineName: string) {
	if (mode === "arr") {
		switch (lineName) {
			case "120":
			case "142":
			case "147":
			case "221":
			case "247":
			case "327":
			case "U6":
			case "N6":
			case "N20":
				return ["U Leopoldplatz [Bus Müllerstr.]", 4]
			case "U9":
			case "N9":
				return ["U Leopoldplatz [Bus Schulstr.]", 5]
			default:
				return ["U Leopoldplatz", undefined]
		}
	} else if (mode === "dep") {
		switch (lineName) {
			case "120":
			case "U6":
			case "N6":
			case "N20":
				return ["U Leopoldplatz [Bus Müllerstr.]", 4]
			case "142":
			case "147":
			case "221":
			case "247":
			case "327":
			case "U9":
			case "N9":
				return ["U Leopoldplatz [Bus Schulstr.]", 5]
			default:
				return ["U Leopoldplatz", undefined]
		}
	}
}

export function getMärkischesMuseum(id: string) {
	switch (id) {
		case "900000100014":
			return "U Märkisches Museum [Bus Neue Roßstr.]"
		case "900000100516":
			return "U Märkisches Museum/Inselstr. [Bus Wallstr.]"
	}
}

export function getMendelssohnBartholdyPark(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M29":
				if (provenance.includes("Hermannplatz"))
					return "U Mendelssohn-Bartholdy-Park [Bus Reichpietschufer]"
				return "U Mendelssohn-Bartholdy-Park [Bus Schöneberger Ufer]"
			case "U1":
			case "N1":
				if (/(Warschauer Str|Helsingforser Pl)/.test(provenance))
					return "U Mendelssohn-Bartholdy-Park [Bus Reichpietschufer]"
				return "U Mendelssohn-Bartholdy-Park [Bus Schöneberger Ufer]"
			default:
				return "U Mendelssohn-Bartholdy-Park [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M29":
				if (direction.includes("Hermannplatz"))
					return "U Mendelssohn-Bartholdy-Park [Bus Schöneberger Ufer]"
				return "U Mendelssohn-Bartholdy-Park [Bus Reichpietschufer]"
			case "U1":
			case "N1":
				if (direction.includes("Warschauer Str"))
					return "U Mendelssohn-Bartholdy-Park [Bus Schöneberger Ufer]"
				return "U Mendelssohn-Bartholdy-Park [Bus Reichpietschufer]"
			default:
				return "U Mendelssohn-Bartholdy-Park [Bus]"
		}
	}
}

export function getMohrenstr() {
	return "U Mohrenstr. [Bus Wilhelmstr.]"
}

export function getMuseumsinsel() {
	return "U Museumsinsel [Bus Schloßplatz]"
}

export function getNordbahnhof(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000007104":
				switch (lineName) {
					case "M8":
						if (provenance.includes("Clara-Jaschke"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 6]
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
					case "M10":
						if (provenance.includes("Clara-Jaschke"))
							return ["S Nordbahnhof [Tram E.-Schwarzhaupt-Pl.]", 3]
						return ["S Nordbahnhof [Tram E.-Schwarzhaupt-Pl.]", 4]
					case "12":
						if (provenance.includes("Kupfergraben"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 6]
						if (provenance.includes("Hackescher"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 6]
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
					case "247":
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
					case "N40":
						if (provenance.includes("Blockdammweg"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 6]
					default:
						return ["S Nordbahnhof", null]
				}
			case "900000007108":
				if (provenance.includes("S Nordbahnhof"))
					return ["S Nordbahnhof/Gartenstr.", 1]
				return ["S Nordbahnhof/Gartenstr.", 2]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000007104":
				switch (lineName) {
					case "M8":
						if (direction.includes("Hauptbahnhof"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 6]
					case "M10":
						if (direction.includes("Hauptbahnhof"))
							return ["S Nordbahnhof [Tram E.-Schwarzhaupt-Pl.]", 4]
						return ["S Nordbahnhof [Tram E.-Schwarzhaupt-Pl.]", 3]
					case "12":
						if (direction.includes("Kupfergraben"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
						if (direction.includes("Hackescher"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 6]
					case "247":
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
					case "N40":
						if (direction.includes("Turmstr"))
							return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 5]
						return ["S Nordbahnhof [Tram Bus Invalidenstr.]", 6]
					default:
						return ["S Nordbahnhof", null]
				}
			case "900000007108":
				return ["S Nordbahnhof/Gartenstr.", "1/2"]
		}
	}
}

export function getOranienburgerStr() {
	return "S Oranienburger Str. [Tram Oranienburger Str.]"
}

export function getPotsdamerPlatz(
	id: string,
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000005208":
				switch (lineName) {
					case "M41":
						return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
					case "M48":
						if (provenance.includes("Mohrenstr"))
							return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
					case "M85":
						if (provenance.includes("Hauptbahnhof"))
							return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
					case "200":
						if (provenance.includes("Philharmonie"))
							return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
						if (provenance.includes("Hertzallee"))
							return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
					case "300":
						if (provenance.includes("Philharmonie"))
							return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
					case "N2":
						if (provenance.includes("Hertzallee"))
							return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
						if (provenance.includes("Ruhleben"))
							return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
					default:
						return ["Varian-Fry-Str./Potsdamer Platz", null, 9]
				}
			case "900000100022":
				switch (lineName) {
					case "M41":
					case "M85":
						if (provenance.includes("Hauptbahnhof"))
							return ["S Potsdamer Platz/Voßstr.", 3, 8]
						return ["S Potsdamer Platz/Voßstr.", 4, 8]
					case "M48":
						return ["S Potsdamer Platz/Voßstr.", 4, 8]
					default:
						return ["S Potsdamer Platz/Voßstr.", null, 8]
				}
			case "900000100721":
				switch (lineName) {
					case "M48":
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
					case "200":
						if (provenance.includes("Hertzallee"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
						if (provenance.includes("Philharmonie"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
					case "300":
						if (provenance.includes("Philharmonie"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
					case "N2":
						if (provenance.includes("Hertzallee"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
						if (provenance.includes("Ruhleben"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
					default:
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", null, 6]
				}
			case "900000100722":
				switch (lineName) {
					case "M41":
						if (provenance.includes("Philharmonie"))
							return ["S+U Potsdamer Platz [Bus Stresemannstr.]", 8, 7]
						if (provenance.includes("Hauptbahnhof"))
							return ["S+U Potsdamer Platz [Bus Stresemannstr.]", 8, 7]
						return ["S+U Potsdamer Platz [Bus Stresemannstr.]", 7, 7]
					default:
						return ["S+U Potsdamer Platz [Bus Stresemannstr.]", null, 7]
				}
			default:
				return ["S+U Potsdamer Platz", null, 10]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000005208":
				switch (lineName) {
					case "M41":
						return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
					case "M48":
						if (direction.includes("Mohrenstr"))
							return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
					case "M85":
						if (direction.includes("Hauptbahnhof"))
							return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
					case "200":
						if (direction.includes("Philharmonie"))
							return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
						if (direction.includes("Zoo"))
							return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
					case "300":
						if (direction.includes("Philharmonie"))
							return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
					case "N2":
						if (direction.includes("Zoo"))
							return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
						if (direction.includes("Ruhleben"))
							return ["Varian-Fry-Str./Potsdamer Platz", 2, 9]
						return ["Varian-Fry-Str./Potsdamer Platz", 1, 9]
					default:
						return ["Varian-Fry-Str./Potsdamer Platz", null, 9]
				}
			case "900000100022":
				switch (lineName) {
					case "M41":
					case "M85":
						if (direction.includes("Hauptbahnhof"))
							return ["S Potsdamer Platz/Voßstr.", 4, 8]
						if (direction.includes("Fahrt"))
							return ["S Potsdamer Platz/Voßstr.", 4, 8]
						return ["S Potsdamer Platz/Voßstr.", 3, 8]
					case "M48":
						return ["S Potsdamer Platz/Voßstr.", 4, 8]
					default:
						return ["S Potsdamer Platz/Voßstr.", null, 8]
				}
			case "900000100721":
				switch (lineName) {
					case "M48":
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
					case "200":
						if (direction.includes("Zoo"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
						if (direction.includes("Philharmonie"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
					case "300":
						if (direction.includes("Philharmonie"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
					case "N2":
						if (direction.includes("Zoo"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
						if (direction.includes("Ruhleben"))
							return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 5, 6]
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", 6, 6]
					default:
						return ["S+U Potsdamer Platz [Bus Leipziger Str.]", null, 6]
				}
			case "900000100722":
				switch (lineName) {
					case "M41":
						if (direction.includes("Philharmonie"))
							return ["S+U Potsdamer Platz [Bus Stresemannstr.]", 7, 7]
						if (direction.includes("Hauptbahnhof"))
							return ["S+U Potsdamer Platz [Bus Stresemannstr.]", 7, 7]
						return ["S+U Potsdamer Platz [Bus Stresemannstr.]", 8, 7]
					default:
						return ["S+U Potsdamer Platz [Bus Stresemannstr.]", null, 7]
				}
			default:
				return ["S+U Potsdamer Platz", null, 10]
		}
	}
}

export function getRosaLuxemburgPlatz(product: string, lineName: string) {
	switch (product) {
		case "tram":
			return "U Rosa-Luxemburg-Platz [Tram Torstr.]"
		case "bus":
			switch (lineName) {
				case "142":
					return "U Rosa-Luxemburg-Platz [Bus Torstr.]"
				case "U2":
				case "N2":
					return "U Rosa-Luxemburg-Platz [Bus R.-Luxemburg-Str.]"
				default:
					return "U Rosa-Luxemburg-Platz [Bus]"
			}
	}
}

export function getRotesRathaus(id: string) {
	switch (id) {
		case "900000100045":
			return "U Rotes Rathaus [Bus Spandauer Str.]"
		case "900000100539":
			return "Nikolaiviertel [Bus Mühlendamm]"
		default:
			return "U Rotes Rathaus [Bus]"
	}
}

export function getSchillingstr() {
	return "U Schillingstr. [Bus K.-Marx-Allee]"
}

export function getSpittelmarkt(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "200":
				if (provenance.includes("Michelangelostr"))
					return "U Spittelmarkt [Bus Leipziger Str.]"
				return "U Spittelmarkt [Bus Spittelmarkt]"
			case "248":
			case "N42":
				if (/(Alexanderpl)/.test(provenance))
					return "U Spittelmarkt [Bus A.-Springer-Str.]"
				return "U Spittelmarkt [Bus Spittelmarkt]"
			case "265":
				if (provenance.includes("Stadtmitte"))
					return "U Spittelmarkt [Bus Spittelmarkt]"
				return "U Spittelmarkt [Bus Leipziger Str.]"
			case "U2":
			case "N2":
				if (/(Hadlichstr|Alexanderpl)/.test(provenance))
					return "U Spittelmarkt [Bus Leipziger Str.]"
				return "U Spittelmarkt [Bus Spittelmarkt]"
			default:
				return "U Spittelmarkt [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "200":
				if (direction.includes("Zoo"))
					return "U Spittelmarkt [Bus Leipziger Str.]"
				return "U Spittelmarkt [Bus Spittelmarkt]"
			case "248":
			case "N42":
				if (/(Südkreuz|Breitenbachplatz)/.test(direction))
					return "U Spittelmarkt [Bus A.-Springer-Str.]"
				return "U Spittelmarkt [Bus Spittelmarkt]"
			case "265":
				if (direction.includes("Stadtmitte"))
					return "U Spittelmarkt [Bus Leipziger Str.]"
				return "U Spittelmarkt [Bus Spittelmarkt]"
			case "U2":
			case "N2":
				if (/(Zoo|Ruhleben)/.test(direction))
					return "U Spittelmarkt [Bus Leipziger Str.]"
				return "U Spittelmarkt [Bus Spittelmarkt]"
			default:
				return "U Spittelmarkt [Bus]"
		}
	}
}

export function getStadtmitte(id: string) {
	switch (id) {
		case "900000100011":
			return ["U Stadtmitte [Bus]", null, 6]
		case "900000100528":
			return ["U Stadtmitte [Bus Leipziger Str.]", "3-4", 4]
		case "900000100018":
			return ["U Stadtmitte [Bus Krausenstr.]", "5", 5]
		default:
			return ["U Stadtmitte [Bus]", null, 6]
	}
}

export function getTiergarten() {
	return "S Tiergarten [Bus Bachstr.]"
}

export function getUnterDenLinden(lineName: string) {
	switch (lineName) {
		case "100":
		case "300":
		case "U5":
		case "N5":
			return ["U Unter den Linden [Bus Unter den Linden]", 4]
		case "147":
		case "U6":
		case "N6":
			return ["U Unter den Linden [Bus Friedrichstr.]", 5]
		default:
			return ["U Unter den Linden [Bus]", 6]
	}
}

export function getWedding(id: string, lineName: string) {
	switch (id) {
		case "900000009104":
			return ["S+U Wedding [Bus Müllerstr.]", 4]
		case "900000008103":
			switch (lineName) {
				case "M27":
					return ["Nettelbeckplatz/S Wedding [Bus Reinickendorfer Str.]", 5]
				case "247":
					return ["Nettelbeckplatz/S Wedding [Bus Gerichtstr.]", 6]
				default:
					return ["Nettelbeckplatz/S wedding", 7]
			}
	}
}

export function getWesthafen() {
	return "S+U Westhafen [Bus Putlitzbrücke]"
}
