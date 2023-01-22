type Mode = "dep" | "arr"
type Dir = string | null

export function getRathausSteglitz(id: string) {
	switch (id) {
		case "900000062202":
			return ["S Rathaus Steglitz", 1]
		case "900000062781":
			return ["U Rathaus Steglitz", 2]
		default:
			return ["S+U Rathaus Steglitz", 3]
	}
}

export function getSchloßstr(mode: Mode, direction: Dir, provenance: Dir) {
	if (mode === "arr" && provenance?.includes("Steglitz"))
		return ["U Schloßstr. ⬆️", 1]
	if (mode === "arr") return ["U Schloßstr. ⬇️", 2]
	if (mode === "dep" && direction?.includes("Steglitz"))
		return ["U Schloßstr. ⬇️", 2]
	return ["U Schloßstr. ⬆️", 1]
}
