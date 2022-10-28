type Dir = string | null

export function getAttilastr(lineName: string) {
	if (lineName === "282") return "S Attilastr. [Bus Steglitzer Damm]"
	return "S Attilastr. [Bus Attilastr.]"
}

export function getBuckowerChaussee() {
	return "S Buckower Chaussee [Bus Buckower Ch.]"
}

export function getBülowstr(
	mode: string,
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

export function getInnsbruckerPlatz(lineName: string) {
	switch (lineName) {
		case "M48":
		case "M85":
		case "143":
		case "187":
			return "S+U Innsbrucker Platz [Bus Hauptstr.]"
		case "248":
			return "S+U Innsbrucker Platz [Bus Wexstr.]"
		default:
			return "S+U Innsbrucker Platz [Bus]"
	}
}

export function getJuliusLeberBrücke() {
	return "S Julius-Leber-Brücke [Bus Kolonnenstr.]"
}

export function getKurfürstenstr() {
	return "U Kurfürstenstr. [Bus Potsdamer Str.]"
}

export function getMarienfelde() {
	return "S Marienfelde [Bus Bahnstr.]"
}

export function getNollendorfplatz(
	mode: string,
	lineName: string,
	direction: Dir,
	provenance: Dir
) {
	if (mode === "arr" && provenance !== null) {
		switch (lineName) {
			case "M19":
				if (provenance.includes("Mehringdamm"))
					return "U Nollendorfplatz [Bus Kleiststr.]"
				return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
			case "106":
				if (provenance.includes("Seestr"))
					return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
				return "U Nollendorfplatz [Bus Kleiststr.]"
			case "187":
				if (provenance.includes("Alt-Moabit"))
					return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
				return "U Nollendorfplatz [Bus Kleiststr.]"
			case "U1":
			case "N1":
				if (provenance.includes("Helsingforser Platz"))
					return "U Nollendorfplatz [Bus Kleiststr.]"
				return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
			case "U2":
			case "N2":
				if (/(Hadlichstr|Alexanderpl)/.test(provenance))
					return "U Nollendorfplatz [Bus Kleiststr.]"
				return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
			case "N26":
				if (provenance.includes("Seestr"))
					return "U Nollendorfplatz [Bus Kleiststr.]"
				return "U Nollendorfplatz [Bus Nollendorfplatz Ost]"
			default:
				return "U Nollendorfplatz [Bus]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (lineName) {
			case "M19":
				if (direction.includes("Mehringdamm"))
					return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
				return "U Nollendorfplatz [Bus Kleiststr.]"
			case "106":
				if (direction.includes("Seestr"))
					return "U Nollendorfplatz [Bus Kleiststr.]"
				return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
			case "187":
				if (direction.includes("Turmstr"))
					return "U Nollendorfplatz [Bus Kleiststr.]"
				return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
			case "U1":
			case "N1":
				if (direction.includes("Warschauer Str"))
					return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
				return "U Nollendorfplatz [Bus Kleiststr.]"
			case "U2":
			case "N2":
				if (/(Pankow|Alexanderpl)/.test(direction))
					return "U Nollendorfplatz [Bus Nollendorfplatz Süd]"
				return "U Nollendorfplatz [Bus Kleiststr.]"
			case "N26":
				if (direction.includes("Seestr"))
					return "U Nollendorfplatz [Bus Nollendorfplatz Ost]"
				return "U Nollendorfplatz [Bus Kleiststr.]"
			default:
				return "U Nollendorfplatz [Bus]"
		}
	}
}

export function getPriesterweg() {
	return "S Priesterweg [Bus Prellerweg]"
}

export function getSchöneberg() {
	return "S Schöneberg [Bus Dominicusstr.]"
}

export function getSüdkreuz(
	id: string,
	mode: string,
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
	mode: string,
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
						return "S+U Tempelhof [Bus Tempelhofer Damm]"
					case "184":
						if (/(Südkreuz)/.test(provenance))
							return "S+U Tempelhof [Bus Tempelhofer Damm]"
						return "S+U Tempelhof [Bus Hoeppnerstr.]"
					default:
						return "S+U Tempelhof [Bus]"
				}
			case "900000068272":
				return "U Tempelhof/Ringbahnstr. [Bus Tempelhofer Damm]"
		}
	} else if (mode === "dep" && direction !== null) {
		switch (id) {
			case "900000068201":
				switch (lineName) {
					case "U6":
					case "N6":
					case "140":
					case "N84":
						return "S+U Tempelhof [Bus Tempelhofer Damm]"
					case "184":
						if (direction.includes("Südkreuz"))
							return "S+U Tempelhof [Bus Hoeppnerstr.]"
						return "S+U Tempelhof [Bus Tempelhofer Damm]"
					default:
						return "S+U Tempelhof [Bus]"
				}
			case "900000068272":
				return "U Tempelhof/Ringbahnstr. [Bus Tempelhofer Damm]"
		}
	}
}

export function getWittenbergplatz(
	mode: string,
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
			return "S+U Yorckstr. (Großgörschenstr.) [Bus Yorckstr.]"
		case "900000058103":
			return "S+U Yorckstr. [Bus Yorckstr.]"
		default:
			return "S+U Yorckstr. [Bus Yorckstr.]"
	}
}
