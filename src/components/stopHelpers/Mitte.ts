type Direction = string | null

export function getAlex(
	id: string,
	mode: string,
	lineName: string,
	direction: Direction,
	provenance: Direction
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000100712":
				return ["S+U Alexanderplatz/Grunerstr. [Alexanderstr.]", 18]
			case "900000100711":
				return ["S+U Alexanderplatz/Grunerstr. [Grunerstr.]", 17]
			case "900000100024":
				return ["S+U Alexanderplatz/Dircksenstr.", "13/14"]
			case "900000100026":
				switch (provenance) {
					case "Clara-Jaschke-Str.":
					case "S Hackescher Markt":
						return ["S+U Alexanderplatz/Gontardstr.", 16]
					default:
						return ["S+U Alexanderplatz/Gontardstr.", 15]
				}
			case "900000100031":
				switch (lineName) {
					case "100":
					case "200":
						if (provenance.includes("Hertzallee"))
							return ["S+U Alexanderplatz/Memhardstr.", 24]
						return ["S+U Alexanderplatz/Memhardstr.", 1]
					case "N2":
						if (provenance.includes("Ruhleben"))
							return ["S+U Alexanderplatz/Memhardstr.", 25]
						if (provenance.includes("Zoologischer Garten"))
							return ["S+U Alexanderplatz/Memhardstr.", 25]
						return ["S+U Alexanderplatz/Memhardstr.", 21]
					case "N5":
						if (provenance.includes("Riesaer Str"))
							return ["S+U Alexanderplatz/Memhardstr.", 21]
						if (provenance.includes("Wuhletal"))
							return ["S+U Alexanderplatz/Memhardstr.", 21]
						return ["S+U Alexanderplatz/Memhardstr.", 24]
					case "N8":
						if (provenance.includes("Hermannstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 26]
						if (provenance.includes("Hermannplatz"))
							return ["S+U Alexanderplatz/Memhardstr.", 26]
						return ["S+U Alexanderplatz/Memhardstr.", 22]
					case "N40":
						if (provenance.includes("Turmstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 22]
						return ["S+U Alexanderplatz/Memhardstr.", 25]
					case "N42":
						return ["S+U Alexanderplatz/Memhardstr.", 23]
					case "N60":
					case "N65":
						return ["S+U Alexanderplatz/Memhardstr.", 20]
					default:
						return ["S+U Alexanderplatz/Memhardstr.", null]
				}
			default:
				return ["S+U Alexanderplatz", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000100712":
				return ["S+U Alexanderplatz/Grunerstr. [Alexanderstr.]", 18]
			case "900000100711":
				return ["S+U Alexanderplatz/Grunerstr. [Grunerstr.]", 17]
			case "900000100024":
				return ["S+U Alexanderplatz/Dircksenstr.", "13/14"]
			case "900000100026":
				switch (direction) {
					case "S+U Hauptbahnhof":
					case "S Hackescher Markt":
						return ["S+U Alexanderplatz/Gontardstr.", 15]
					default:
						return ["S+U Alexanderplatz/Gontardstr.", 16]
				}
			case "900000100031":
				switch (lineName) {
					case "100":
					case "200":
						if (direction.includes("Michelangelostr"))
							return ["S+U Alexanderplatz/Memhardstr.", 24]
						if (direction.includes("Memhardstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 24]
						return ["S+U Alexanderplatz/Memhardstr.", 1]
					case "N2":
						if (direction.includes("Ruhleben"))
							return ["S+U Alexanderplatz/Memhardstr.", 21]
						if (direction.includes("Zoologischer Garten"))
							return ["S+U Alexanderplatz/Memhardstr.", 21]
						return ["S+U Alexanderplatz/Memhardstr.", 25]
					case "N5":
						if (direction.includes("Riesaer Str"))
							return ["S+U Alexanderplatz/Memhardstr.", 24]
						if (direction.includes("Wuhletal"))
							return ["S+U Alexanderplatz/Memhardstr.", 24]
						return ["S+U Alexanderplatz/Memhardstr.", 21]
					case "N8":
						if (direction.includes("Hermannstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 22]
						if (direction.includes("Hermannplatz"))
							return ["S+U Alexanderplatz/Memhardstr.", 22]
						return ["S+U Alexanderplatz/Memhardstr.", 26]
					case "N40":
						if (direction.includes("Turmstr"))
							return ["S+U Alexanderplatz/Memhardstr.", 25]
						return ["S+U Alexanderplatz/Memhardstr.", 22]
					case "N42":
						return ["S+U Alexanderplatz/Memhardstr.", 23]
					case "N60":
					case "N65":
						return ["S+U Alexanderplatz/Memhardstr.", 20]
					default:
						return ["S+U Alexanderplatz/Memhardstr.]", null]
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

export function getFriedrichstr() {
	return "S+U Friedrichstr. [Tram Bus Friedrichstr.]"
}

export function getGesundbrunnen(
	mode: string,
	lineName: string,
	direction: Direction,
	provenance: Direction
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
	direction: Direction,
	provenance: Direction
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
	direction: Direction,
	provenance: Direction
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

export function getHumboldthain() {
	return "S Humboldthain [Bus Hochstr.]"
}

export function getJannowitzbrücke(
	mode: string,
	lineName: string,
	direction: Direction,
	provenance: Direction
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "300":
				if (provenance.includes("Warschauer"))
					return "S+U Jannowitzbrücke [Bus Alexanderstr.]"
				return "S+U Jannowitzbrücke [Bus Holzmarktstr.]"
			case "N8":
				return "S+U Jannowitzbrücke [Bus Jannowitzbrücke]"
			case "N40":
				if (provenance.includes("Blockdammweg"))
					return "S+U Jannowitzbrücke [Bus Alexanderstr.]"
				return "S+U Jannowitzbrücke [Bus Jannowitzbrücke]"
			case "N60":
			case "N65":
				return "S+U Jannowitzbrücke [Bus Alexanderstr.]"
			default:
				return "S+U Jannowitzbrücke [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "300":
				if (direction.includes("Warschauer"))
					return "S+U Jannowitzbrücke [Bus Holzmarktstr.]"
				return "S+U Jannowitzbrücke [Bus Alexanderstr.]"
			case "N8":
				return "S+U Jannowitzbrücke [Bus Jannowitzbrücke]"
			case "N40":
				if (direction.includes("Blockdammweg"))
					return "S+U Jannowitzbrücke [Bus Jannowitzbrücke]"
				return "S+U Jannowitzbrücke [Bus Alexanderstr.]"
			case "N60":
			case "N65":
				return "S+U Jannowitzbrücke [Bus Alexanderstr.]"
			default:
				return "S+U Jannowitzbrücke [Bus]"
		}
	}
}

export function getNordbahnhof(
	id: string,
	mode: string,
	lineName: string,
	direction: Direction,
	provenance: Direction
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
	direction: Direction,
	provenance: Direction
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000005208":
				switch (lineName) {
					case "M41":
						return 2
					case "M48":
						if (provenance.includes("Mohrenstr")) return 2
						return 1
					case "M85":
						if (provenance.includes("Hauptbahnhof")) return 2
						return 1
					case "200":
						if (provenance.includes("Philharmonie")) return 1
						if (provenance.includes("Hertzallee")) return 1
						return 2
					case "300":
						if (provenance.includes("Philharmonie")) return 1
						return 2
					case "N2":
						if (provenance.includes("Hertzallee")) return 1
						if (provenance.includes("Ruhleben")) return 1
						return 2
					default:
						return null
				}
			case "900000100022":
				switch (lineName) {
					case "M41":
					case "M85":
						if (provenance.includes("Hauptbahnhof")) return 3
						return 4
					case "M48":
						return 4
					default:
						return null
				}
			case "900000100721":
				switch (lineName) {
					case "M48":
						return 5
					case "200":
						if (provenance.includes("Hertzallee")) return 6
						if (provenance.includes("Philharmonie")) return 6
						return 5
					case "300":
						if (provenance.includes("Philharmonie")) return 6
						return 5
					case "N2":
						if (provenance.includes("Hertzallee")) return 6
						if (provenance.includes("Ruhleben")) return 6
						return 5
					default:
						return null
				}
			case "900000100722":
				switch (lineName) {
					case "M41":
						if (provenance.includes("Philharmonie")) return 8
						if (provenance.includes("Hauptbahnhof")) return 8
						return 7
					default:
						return null
				}
			default:
				return null
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000005208":
				switch (lineName) {
					case "M41":
						return 2
					case "M48":
						if (direction.includes("Mohrenstr")) return 1
						return 2
					case "M85":
						if (direction.includes("Hauptbahnhof")) return 1
						return 2
					case "200":
						if (direction.includes("Philharmonie")) return 2
						if (direction.includes("Zoo")) return 2
						return 1
					case "300":
						if (direction.includes("Philharmonie")) return 2
						return 1
					case "N2":
						if (direction.includes("Zoo")) return 2
						if (direction.includes("Ruhleben")) return 2
						return 1
					default:
						return null
				}
			case "900000100022":
				switch (lineName) {
					case "M41":
					case "M85":
						if (direction.includes("Hauptbahnhof")) return 4
						if (direction.includes("Fahrt")) return 4
						return 3
					case "M48":
						return 4
					default:
						return null
				}
			case "900000100721":
				switch (lineName) {
					case "M48":
						return 5
					case "200":
						if (direction.includes("Zoo")) return 5
						if (direction.includes("Philharmonie")) return 5
						return 6
					case "300":
						if (direction.includes("Philharmonie")) return 5
						return 6
					case "N2":
						if (direction.includes("Zoo")) return 5
						if (direction.includes("Ruhleben")) return 5
						return 6
					default:
						return null
				}
			case "900000100722":
				switch (lineName) {
					case "M41":
						if (direction.includes("Philharmonie")) return 7
						if (direction.includes("Hauptbahnhof")) return 7
						return 8
					default:
						return null
				}
			default:
				return null
		}
	}
}

export function getTiergarten() {
	return "S Tiergarten [Bus Bachstr.]"
}
