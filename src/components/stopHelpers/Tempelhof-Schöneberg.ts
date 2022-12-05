type Dir = string | null
type Mode = "dep" | "arr"

export function getAltMariendorf(
	id: string,
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	switch (id) {
		case "900000070701":
			return ["U Alt-Mariendorf [Bus Alt-Mariendorf]", 3]
		case "900000070702":
			switch (lineName) {
				case "M76":
					if (mode === "arr" && provenance?.includes("Lichtenrade"))
						return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
					if (mode === "arr") return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					if (mode === "dep" && direction?.includes("Lichtenrade"))
						return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
				case "M77":
				case "181":
				case "277":
				case "U6":
				case "N6":
				case "N77":
					return ["U Alt-Mariendorf [Bus Reißeckstr.]", 5]
				case "X71":
					if (mode === "arr" && provenance?.includes("BER"))
						return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
					if (mode === "arr") return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					if (mode === "dep" && direction?.includes("BER"))
						return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
				case "X76":
					if (mode === "arr" && provenance?.includes("Nahariyastr"))
						return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
					if (mode === "arr") return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					if (mode === "dep" && direction?.includes("Nahariyastr"))
						return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
				case "179":
					if (mode === "arr" && provenance?.includes("Gerlinger"))
						return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
					if (mode === "arr") return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					if (mode === "dep" && direction?.includes("Gerlinger"))
						return ["U Alt-Mariendorf [Bus Friedenstr.]", 4]
					return ["U Alt-Mariendorf [Bus Mariendorfer Damm]", 2]
				default:
					return ["U Alt-Mariendorf [Bus Frieden-/Reißeckstr.]", 6]
			}
		default:
			return ["U Alt-Mariendorf [Bus]", 7]
	}
}

export function getAltTempelhof(lineName: string) {
	switch (lineName) {
		case "U6":
		case "N6":
		case "140":
		case "184":
		case "N84":
			return ["U Alt-Tempelhof [Bus Tempelhofer Damm]", 3]
		case "M46":
		case "246":
			return ["U Alt-Tempelhof [Bus Alt-Tempelhof]", 2]
		default:
			return ["U Alt-Tempelhof [Bus]", 4]
	}
}

export function getAttilastr(lineName: string) {
	if (lineName === "282") return "S Attilastr. [Bus Steglitzer Damm]"
	return "S Attilastr. [Bus Attilastr.]"
}

export function getBayerischerPlatz() {
	return ["U Bayerischer Platz [Bus Grunewaldstr.]", 4]
}

export function getBuckowerChaussee() {
	return "S Buckower Chaussee [Bus Buckower Ch.]"
}

export function getBülowstr(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M19":
				return "U Bülowstr. [Bus Bülowstr.]"
			case "M48":
			case "M85":
				return "U Bülowstr. [Bus Potsdamer Str.]"
			case "106":
				if (provenance.includes("Seestr"))
					return "U Bülowstr. [Bus Potsdamer Str.]"
				return "U Bülowstr. [Bus Bülowstr.]"
			case "187":
				if (provenance.includes("Moabit"))
					return "U Bülowstr. [Bus Potsdamer Str.]"
				return "U Bülowstr. [Bus Bülowstr.]"
			case "U1":
			case "N1":
				if (/(Warschauer Str|Helsingforser Pl)/.test(provenance))
					return "U Bülowstr. [Bus Bülowstr.]"
				return "U Bülowstr. [Bus Potsdamer Str.]"
			case "U2":
			case "N2":
				if (/(Alexanderpl|Hadlichstr)/.test(provenance))
					return "U Bülowstr. [Bus Bülowstr.]"
				return "U Bülowstr. [Bus Potsdamer Str.]"
			default:
				return "U Bülowstr. [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M19":
				return "U Bülowstr. [Bus Bülowstr.]"
			case "M48":
			case "M85":
				return "U Bülowstr. [Bus Potsdamer Str.]"
			case "106":
				if (direction.includes("Seestr")) return "U Bülowstr. [Bus Bülowstr.]"
				return "U Bülowstr. [Bus Potsdamer Str.]"
			case "187":
				if (direction.includes("Turmstr")) return "U Bülowstr. [Bus Bülowstr.]"
				return "U Bülowstr. [Bus Potsdamer Str.]"
			case "U1":
			case "N1":
				if (direction.includes("Warschauer Str"))
					return "U Bülowstr. [Bus Potsdamer Str.]"
				return "U Bülowstr. [Bus Bülowstr.]"
			case "U2":
			case "N2":
				if (/(Alexanderpl|Pankow)/.test(direction))
					return "U Bülowstr. [Bus Potsdamer Str.]"
				return "U Bülowstr. [Bus Bülowstr.]"
			default:
				return "U Bülowstr. [Bus]"
		}
	}
}

export function getEisenacherStr() {
	return ["U Eisenacher Str. [Bus Grunewaldstr.]", 2]
}

export function getFriedrichWilhelmPlatz(mode: Mode, lineName: string) {
	switch (lineName) {
		case "U9":
		case "N9":
			return ["U Friedrich-Wilhelm-Platz [Bus Bundesallee]", 2]
		case "186":
			return ["U Friedrich-Wilhelm-Platz [Bus Wiesbadener Str.]", 4]
		case "246":
			if (mode === "arr")
				return ["U Friedrich-Wilhelm-Platz [Bus F.-Wilhelm-Pl.]", 5]
			return ["U Friedrich-Wilhelm-Platz [Bus Schmiljanstr.]", 3]
		default:
			return ["U Friedrich-Wilhelm-Platz [Bus]", 6]
	}
}

export function getInnsbruckerPlatz(lineName: string) {
	switch (lineName) {
		case "M48":
		case "M85":
		case "143":
		case "187":
			return ["S+U Innsbrucker Platz [Bus Hauptstr.]", 4]
		case "248":
			return ["S+U Innsbrucker Platz [Bus Wexstr.]", 5]
		default:
			return ["S+U Innsbrucker Platz [Bus]", 6]
	}
}

export function getJuliusLeberBrücke() {
	return "S Julius-Leber-Brücke [Bus Kolonnenstr.]"
}

export function getKaiserinAugustaStr(lineName: string) {
	switch (lineName) {
		case "184":
			return ["U Kaiserin-Augusta-Str. [Bus Albrechtstr.]", 3]
		case "U6":
		case "N6":
			return ["U Kaiserin-Augusta-Str. [Bus Tempelhofer Damm]", 2]
		default:
			return ["U Kaiserin-Augusta-Str. [Bus]", 4]
	}
}

export function getKleistpark() {
	return ["U Kleistpark [Bus Potsdamer Str.]", 2]
}

export function getKurfürstenstr() {
	return "U Kurfürstenstr. [Bus Potsdamer Str.]"
}

export function getMarienfelde() {
	return "S Marienfelde [Bus Bahnstr.]"
}

export function getNollendorfplatz(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M19":
				if (provenance.includes("Mehringdamm"))
					return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
				return ["U Nollendorfplatz [Bus Nollendorfplatz Süd", 6]
			case "106":
				if (provenance.includes("Seestr"))
					return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
				return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
			case "187":
				if (provenance.includes("Alt-Moabit"))
					return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
				return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
			case "U1":
			case "N1":
				if (provenance.includes("Helsingforser Platz"))
					return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
				return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
			case "U2":
			case "N2":
				if (/(Hadlichstr|Alexanderpl)/.test(provenance))
					return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
				return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
			case "N26":
				if (provenance.includes("Seestr"))
					return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
				return ["U Nollendorfplatz [Bus Nollendorfplatz Ost]", 5]
			default:
				return ["U Nollendorfplatz [Bus]", 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M19":
				if (direction.includes("Mehringdamm"))
					return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
				return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
			case "106":
				if (direction.includes("Seestr"))
					return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
				return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
			case "187":
				if (direction.includes("Turmstr"))
					return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
				return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
			case "U1":
			case "N1":
				if (direction.includes("Warschauer Str"))
					return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
				return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
			case "U2":
			case "N2":
				if (/(Pankow|Alexanderpl)/.test(direction))
					return ["U Nollendorfplatz [Bus Nollendorfplatz Süd]", 6]
				return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
			case "N26":
				if (direction.includes("Seestr"))
					return ["U Nollendorfplatz [Bus Nollendorfplatz Ost]", 5]
				return ["U Nollendorfplatz [Bus Kleiststr.]", 4]
			default:
				return ["U Nollendorfplatz [Bus]", 7]
		}
	}
}

export function getParadestr() {
	return ["U Paradestr. [Bus Tempelhofer Damm]", 2]
}

export function getPriesterweg() {
	return "S Priesterweg [Bus Prellerweg]"
}

export function getRathausSchöneberg(id: string) {
	switch (id) {
		case "900000054106":
			return "Rathaus Schöneberg [Bus M.-Luther-Str.]"
		default:
			return "U Rathaus Schöneberg [Bus]"
	}
}

export function getSchöneberg() {
	return "S Schöneberg [Bus Dominicusstr.]"
}

export function getSüdkreuz(
	id: string,
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000058101":
				if (lineName === "M46") {
					if (["Hertzallee", "U Wittenbergplatz"].includes(provenance))
						return ["S Südkreuz [Hildegard-Knef-Platz]", 3]
					return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
				}
				if (lineName === "106") {
					if (["Lindenhof"].includes(provenance))
						return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
					return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
				}
				if (lineName === "204") return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
				if (lineName === "N42") return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
				return ["S Südkreuz [Hildegard-Knef-Platz]", null]
			case "900000058100":
				if (lineName === "184") {
					if (provenance.includes("Reichartstr"))
						return ["S Südkreuz/Ostseite", 4]
					return ["S Südkreuz/Ostseite", 5]
				}
				if (lineName === "248") {
					if (provenance.includes("Breitenbachplatz"))
						return ["S Südkreuz/Ostseite", 5]
					return ["S Südkreuz/Ostseite", 4]
				}
				if (lineName === "N42") {
					if (provenance.includes("Südkreuz")) return ["S Südkreuz/Ostseite", 5]
					return ["S Südkreuz/Ostseite", 4]
				}
				return ["S Südkreuz/Ostseite", null]
			default:
				return ["S Südkreuz", null]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000058101":
				if (lineName === "M46") {
					if (
						["S+U Zoologischer Garten", "U Wittenbergplatz"].includes(direction)
					)
						return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
					return ["S Südkreuz [Hildegard-Knef-Platz]", 3]
				}
				if (lineName === "106") {
					if (["Lindenhof"].includes(direction))
						return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
					return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
				}
				if (lineName === "204") return ["S Südkreuz [Hildegard-Knef-Platz]", 1]
				if (lineName === "N42") return ["S Südkreuz [Hildegard-Knef-Platz]", 2]
				return ["S Südkreuz [Hildegard-Knef-Platz]", null]
			case "900000058100":
				if (lineName === "184") {
					if (direction.includes("Reichartstr"))
						return ["S Südkreuz/Ostseite", 4]
					return ["S Südkreuz/Ostseite", 5]
				}
				if (lineName === "248") {
					if (
						direction.includes("Breitenbachplatz") ||
						direction.includes("Fahrt")
					)
						return ["S Südkreuz/Ostseite", 4]
					return ["S Südkreuz/Ostseite", 5]
				}
				if (lineName === "N42") {
					if (direction.includes("Südkreuz")) return ["S Südkreuz/Ostseite", 4]
					return ["S Südkreuz/Ostseite", 5]
				}
				return ["S Südkreuz/Ostseite", null]
			default:
				return ["S Südkreuz", null]
		}
	}
}

export function getTempelhof(
	id: string,
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (id) {
			case "900000068201":
				switch (lineName) {
					case "U6":
					case "N6":
					case "140":
					case "N84":
						return ["S+U Tempelhof [Bus Tempelhofer Damm]", 4]
					case "184":
						if (/(Südkreuz)/.test(provenance))
							return ["S+U Tempelhof [Bus Tempelhofer Damm]", 4]
						return ["S+U Tempelhof [Bus Hoeppnerstr.]", 5]
					default:
						return ["S+U Tempelhof [Bus]", 6]
				}
			case "900000068272":
				return ["U Tempelhof/Ringbahnstr. [Bus Tempelhofer Damm]", 7]
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000068201":
				switch (lineName) {
					case "U6":
					case "N6":
					case "140":
					case "N84":
						return ["S+U Tempelhof [Bus Tempelhofer Damm]", 4]
					case "184":
						if (direction.includes("Südkreuz"))
							return ["S+U Tempelhof [Bus Hoeppnerstr.]", 5]
						return ["S+U Tempelhof [Bus Tempelhofer Damm]", 4]
					default:
						return ["S+U Tempelhof [Bus]", 6]
				}
			case "900000068272":
				return ["U Tempelhof/Ringbahnstr. [Bus Tempelhofer Damm]", 7]
		}
	}
}

export function getUllsteinstr(id: string, lineName: string) {
	switch (id) {
		case "900000069271":
			return ["U Ullsteinstr. [Bus Mariendorfer Damm]", 2]
		case "900000069201":
			switch (lineName) {
				case "U6":
				case "N6":
					return ["U Ullsteinstr./Ordensmeisterstr. [Bus Tempelhofer Damm]", 3]
				case "170":
					return ["U Ullsteinstr./Ordensmeisterstr. [Bus Ordensmeisterstr.]", 4]
				default:
					return ["U Ullsteinstr./Ordensmeisterstr.", 5]
			}
		default:
			return ["U Ullsteinstr. [Bus]", 6]
	}
}

export function getWaltherSchreiberPlatz(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	switch (lineName) {
		case "M76":
		case "X76":
		case "181":
		case "N81":
			return ["U Walther-Schreiber-Platz [Bus Bundesallee]", 4]
		case "M48":
			if (
				mode === "arr" &&
				provenance &&
				/(Steglitz|Zehlendorf)/.test(provenance)
			)
				return ["U Walther-Schreiber-Platz [Bus Rheinstr.]", 2]
			if (mode === "arr")
				return ["U Walther-Schreiber-Platz [Bus Schloßstr.]", 3]
			if (
				mode === "dep" &&
				direction &&
				/(Steglitz|Zehlendorf)/.test(direction)
			)
				return ["U Walther-Schreiber-Platz [Bus Schloßstr.]", 3]
			return ["U Walther-Schreiber-Platz [Bus Rheinstr.]", 2]
		case "M85":
		case "186":
			if (
				mode === "arr" &&
				provenance &&
				/(Steglitz|Lichterfelde)/.test(provenance)
			)
				return ["U Walther-Schreiber-Platz [Bus Rheinstr.]", 2]
			if (mode === "arr")
				return ["U Walther-Schreiber-Platz [Bus Schloßstr.]", 3]
			if (
				mode === "dep" &&
				direction &&
				/(Steglitz|Lichterfelde)/.test(direction)
			)
				return ["U Walther-Schreiber-Platz [Bus Schloßstr.]", 3]
			return ["U Walther-Schreiber-Platz [Bus Rheinstr.]", 2]
		case "U9":
		case "N9":
			if (mode === "arr" && provenance?.includes("Steglitz"))
				return ["U Walther-Schreiber-Platz [Bus Bundesallee]", 4]
			if (mode === "arr")
				return ["U Walther-Schreiber-Platz [Bus Schloßstr.]", 3]
			if (mode === "dep" && direction?.includes("Steglitz"))
				return ["U Walther-Schreiber-Platz [Bus Schloßstr.]", 3]
			return ["U Walther-Schreiber-Platz [Bus Bundesallee]", 4]
		default:
			return ["U Walther-Schreiber-Platz [Bus]", 5]
	}
}

export function getWestphalweg(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	switch (lineName) {
		case "U6":
		case "N6":
			return ["U Westphalweg [Bus Mariendorfer Damm]", 2]
		case "282":
			if (mode === "arr" && provenance?.includes("Dillenburger"))
				return ["U Westphalweg [Bus Mariendorfer Damm]", 2]
			if (mode === "arr") return ["U Westphalweg [Bus Kaiserstr.]", 3]
			if (mode === "dep" && direction?.includes("Breitenbachplatz"))
				return ["U Westphalweg [Bus Kaiserstr.]", 3]
			return ["U Westphalweg [Bus Mariendorfer Damm]", 2]
		default:
			return ["U Westphalweg [Bus]", 4]
	}
}

export function getWittenbergplatz(
	mode: Mode,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M19":
				if (provenance.includes("Mehringdamm"))
					return "U Wittenbergplatz [Bus Tauentzienstr. Nord]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
			case "M29":
				if (provenance.includes("Hermannplatz"))
					return "U Wittenbergplatz [Bus Tauentzienstr. Nord]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
			case "M46":
				if (/(Hertzallee|Zoo)/.test(provenance))
					return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Nord]"
			case "U1":
			case "N1":
				if (provenance.includes("Helsingforser Platz"))
					return "U Wittenbergplatz [Bus Wittenbergplatz Nord]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
			case "U2":
			case "N2":
				if (/(Hadlichstr|Alexanderpl)/.test(provenance))
					return "U Wittenbergplatz [Bus Wittenbergplatz Nord]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
			case "U3":
			case "N3":
				return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
			case "N26":
				if (provenance.includes("Hertzallee"))
					return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
				return "U Wittenbergplatz [Bus Wittenbergplatz Nord]"
			default:
				return "U Wittenbergplatz [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M19":
				if (direction.includes("Mehringdamm"))
					return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Nord]"
			case "M29":
				if (direction.includes("Hermannplatz"))
					return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Nord]"
			case "M46":
				if (direction.includes("Zoo"))
					return "U Wittenbergplatz [Bus Tauentzienstr. Nord]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
			case "U1":
			case "N1":
				if (direction.includes("Warschauer Str"))
					return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
				return "U Wittenbergplatz [Bus Wittenbergplatz Nord]"
			case "U2":
			case "N2":
				if (/(Pankow|Alexanderpl)/.test(direction))
					return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
				return "U Wittenbergplatz [Bus Wittenbergplatz Nord]"
			case "U3":
			case "N3":
				return "U Wittenbergplatz [Bus Wittenbergplatz Nord]"
			case "N26":
				if (direction.includes("Zoo"))
					return "U Wittenbergplatz [Bus Wittenbergplatz Nord]"
				return "U Wittenbergplatz [Bus Tauentzienstr. Süd]"
			default:
				return "U Wittenbergplatz [Bus]"
		}
	}
}

export function getYorckstr(id: string) {
	switch (id) {
		case "900000057102":
			return ["S+U Yorckstr. (Großgörschenstr.) [Bus Yorckstr.]", 6]
		case "900000058103":
			return ["S+U Yorckstr. [Bus Yorckstr.]", 5]
		default:
			return ["S+U Yorckstr. [Bus Yorckstr.]", 5]
	}
}
