export function getGriebnitzsee() {
	return "S Griebnitzsee [Bus Prof.-Dr.-Helmert-Str.]"
}

export function getPotsdamHbf(product: string) {
	switch (product) {
		case "tram":
			return "S Potsdam Hauptbahnhof [Tram Vorplatz]"
		case "bus":
			return "S Potsdam Hauptbahnhof [Bus Vorplatz]"
		default:
			return "S Potsdam Hauptbahnhof"
	}
}
