export function getKurfürstendamm(lineName: string) {
	switch (lineName) {
		case "U1":
			return ["U Kurfürstendamm [oben, U1]", 1]
		case "U9":
			return ["U Kurfürstendamm [unten, U9]", 2]
		default:
			return ["U Kurfürstendamm", 3]
	}
}
