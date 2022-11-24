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
