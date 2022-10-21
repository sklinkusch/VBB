export function getBirkenwerder() {
	return "S Birkenwerder [Bus C.-Zetkin-Str.]"
}

export function getBorgsdorf() {
	return "S Borgsdorf [Bus Fürstenauer Platz]"
}

export function getHennigsdorf(id: string) {
	switch (id) {
		case "900000200000":
			return "S Hennigsdorf [Bus Zum Busbahnhof]"
		case "900000203376":
			return "Hennigsdorf, Poststr."
	}
}

export function getHohenNeuendorf() {
	return "S Hohen Neuendorf [Bus Schönfließer Str.]"
}

export function getOranienburg() {
	return "S Oranienburg [Bus Stralsunder Str.]"
}
