import { remainingStops as stopsUnsorted } from "./TF";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name === "Aalkasten" ||
    stop.name === "Ahlimbswalde" ||
    stop.name.startsWith("Ahrensdorf (UM)") ||
    stop.name.startsWith("Albertshof (UM)") ||
    stop.name === "Alsenhof" ||
    stop.name === "Alt-Galow" ||
    stop.name.startsWith("Altkünkendorf,") ||
    stop.name === "Alt-Temmen" ||
    stop.name.startsWith("Angermünde,") ||
    stop.name === "Annenwalde" ||
    stop.name.startsWith("Arendsee (UM)") ||
    stop.name === "Augustenfelde" ||
    stop.name === "Bagemühl" ||
    stop.name.startsWith("Bandelow,") ||
    stop.name === "Basedow" ||
    stop.name.startsWith("Battin,") ||
    stop.name === "Bauer" ||
    stop.name.startsWith("Baumgarten (UM)") ||
    stop.name === "Bebersee" ||
    stop.name.startsWith("Beenz (bei Lychen)") ||
    stop.name.startsWith("Beenz (bei Prenzlau)") ||
    stop.name === "Berkenlatten" ||
    stop.name.startsWith("Berkholz (bei Boitzenburg)") ||
    stop.name.startsWith("Berkholz (bei Schwedt)") ||
    stop.name === "Bertikow" ||
    stop.name.startsWith("Beutel,") ||
    stop.name.startsWith("Biesenbrow,") ||
    stop.name.startsWith("Biesendahlshof,") ||
    stop.name.startsWith("Bietikow,") ||
    stop.name.startsWith("Birkenhain (UM)") ||
    stop.name === "Birkenhof" ||
    stop.name.startsWith("Blankenburg,") ||
    stop.name.startsWith("Blankensee (UM)") ||
    stop.name.startsWith("Blindow,") ||
    stop.name.startsWith("Blumberg (UM)") ||
    stop.name.startsWith("Blumenhagen (UM)") ||
    stop.name === "Böckenberg" ||
    stop.name === "Boisterfelde" ||
    stop.name.startsWith("Boitzenburg,") ||
    stop.name === "Bölkendorf" ||
    stop.name === "Brandmühle" ||
    stop.name.startsWith("Briest (UM)") ||
    stop.name.startsWith("Bruchhagen,") ||
    stop.name === "Brüsenwalde" ||
    stop.name.startsWith("Brüssow,") ||
    stop.name.startsWith("Buchenhain,") ||
    stop.name.startsWith("Buchheide,") ||
    stop.name.startsWith("Buchholz (UM)") ||
    stop.name.startsWith("Bündigershof,") ||
    stop.name === "Butterholz" ||
    stop.name.startsWith("Carmzow,") ||
    stop.name.startsWith("Casekow,") ||
    stop.name === "Christianenhof" ||
    stop.name === "Cremzow" ||
    stop.name.startsWith("Criewen,") ||
    stop.name.startsWith("Crussow,") ||
    stop.name.startsWith("Damitzow,") ||
    stop.name.startsWith("Damme (UM)") ||
    stop.name === "Dauer" ||
    stop.name === "Dauerthal" ||
    stop.name.startsWith("Dedelow,") ||
    stop.name.startsWith("Densow,") ||
    stop.name.startsWith("Dobberzin,") ||
    stop.name.startsWith("Dolgen,") ||
    stop.name.startsWith("Dölln,") ||
    stop.name === "Dorettenhof" ||
    stop.name.startsWith("Dreesch,") ||
    stop.name === "Drei Häuser" ||
    stop.name.startsWith("Drense,") ||
    stop.name === "Egarsee" ||
    stop.name === "Eichhof" ||
    stop.name.startsWith("Eickstedt,") ||
    stop.name.startsWith("Ellingen,") ||
    stop.name === "Fahrenholz" ||
    stop.name.startsWith("Fährkrug,") ||
    stop.name.startsWith("Falkenhagen (UM)") ||
    stop.name === "Falkenwalde" ||
    stop.name === "Felchow" ||
    stop.name.startsWith("Felchow,") ||
    stop.name.startsWith("Ferdinandshof (UM)") ||
    stop.name.startsWith("Ferdinandshorst,") ||
    stop.name === "Fergitz" ||
    stop.name.startsWith("Flemsdorf,") ||
    stop.name === "Flieth" ||
    stop.name.startsWith("Frauenhagen (bei Brüssow)") ||
    stop.name.startsWith("Frauenhagen (bei Angermünde)") ||
    stop.name.startsWith("Fredersdorf (UM)") ||
    stop.name.startsWith("Friedenfelde,") ||
    stop.name === "Friedenshof" ||
    stop.name.startsWith("Friedrichsfelde (UM)") ||
    stop.name.startsWith("Friedrichsthal (UM)") ||
    stop.name.startsWith("Funkenhagen,") ||
    stop.name === "Fürstenau" ||
    stop.name.startsWith("Fürstenwerder,") ||
    stop.name.startsWith("Gandenitz,") ||
    stop.name.startsWith("Gartz,") ||
    stop.name.startsWith("Gatow,") ||
    stop.name.startsWith("Geesow,") ||
    stop.name.startsWith("Gellmersdorf,") ||
    stop.name.startsWith("Gerswalde,") ||
    stop.name === "Gleuenhof" ||
    stop.name.startsWith("Gollin,") ||
    stop.name.startsWith("Gollmitz (UM)") ||
    stop.name.startsWith("Golm (UM)") ||
    stop.name.startsWith("Göritz (UM)") ||
    stop.name.startsWith("Görlsdorf (UM)") ||
    stop.name.startsWith("Götschendorf,") ||
    stop.name.startsWith("Gramzow (UM)") ||
    stop.name.startsWith("Greiffenberg,") ||
    stop.name === "Grenz" ||
    stop.name === "Grimme" ||
    stop.name.startsWith("Groß Dölln,") ||
    stop.name === "Groß Fredenwalde" ||
    stop.name.startsWith("Groß Pinnow,") ||
    stop.name.startsWith("Groß Sperrenwalde,") ||
    stop.name.startsWith("Groß Väter,") ||
    stop.name === "Grumsin" ||
    stop.name.startsWith("Grünberg,") ||
    stop.name.startsWith("Grünberg (UM)") ||
    stop.name.startsWith("Grunewald (UM)") ||
    stop.name.startsWith("Grünow (bei Prenzlau)") ||
    stop.name.startsWith("Grünow (bei Passow)") ||
    stop.name.startsWith("Günterberg,") ||
    stop.name.startsWith("Gustavsruh (UM)") ||
    stop.name.startsWith("Güstow,") ||
    stop.name === "Gut Gollin" ||
    stop.name === "Güterberg" ||
    stop.name.startsWith("Hammelspring,") ||
    stop.name.startsWith("Hammelstall (bei Brüssow)") ||
    stop.name.startsWith("Hardenbeck,") ||
    stop.name.startsWith("Haßleben,") ||
    stop.name === "Heidehof" ||
    stop.name.startsWith("Heinersdorf (UM)") ||
    stop.name.startsWith("Heinrichshof,") ||
    stop.name === "Henkinshain" ||
    stop.name.startsWith("Henriettenhof,") ||
    stop.name.startsWith("Herrenhof (UM)") ||
    stop.name === "Herrenstein" ||
    stop.name.startsWith("Herzfelde (UM)") ||
    stop.name.startsWith("Herzsprung (UM)") ||
    stop.name === "Hessenhagen" ||
    stop.name === "Hessenhöhe" ||
    stop.name === "Hetzdorf" ||
    stop.name.startsWith("Hindenburg,") ||
    stop.name === "Hohenfelde" ||
    stop.name.startsWith("Hohengüstow,") ||
    stop.name.startsWith("Hohenlandin,") ||
    stop.name.startsWith("Hohenreinkendorf,") ||
    stop.name.startsWith("Hohenselchow,") ||
    stop.name.startsWith("Hohenwalde (UM)") ||
    stop.name.startsWith("Holzendorf,") ||
    stop.name.startsWith("Horst (UM)") ||
    stop.name === "Jagow" ||
    stop.name === "Jahnkeshof" ||
    stop.name.startsWith("Jakobshagen,") ||
    stop.name === "Jamikow" ||
    stop.name === "Kaakstedt" ||
    stop.name === "Karlsberg" ||
    stop.name.startsWith("Karlsburg (UM)") ||
    stop.name.startsWith("Karlshof (bei Templin)") ||
    stop.name.startsWith("Karlshof (bei Prenzlau)") ||
    stop.name === "Karlstein" ||
    stop.name === "Kastaven" ||
    stop.name === "Keesow" ||
    stop.name.startsWith("Kerkow,") ||
    stop.name.startsWith("Klaushagen,") ||
    stop.name === "Klein Dölln" ||
    stop.name.startsWith("Klein Dölln,") ||
    stop.name.startsWith("Klein Sperrenwalde,") ||
    stop.name === "Klein Fredenwalde" ||
    stop.name.startsWith("Kleinow (UM)") ||
    stop.name === "Kleisthöhe" ||
    stop.name === "Kleptow" ||
    stop.name === "Klinkow" ||
    stop.name.startsWith("Klockow (UM)") ||
    stop.name.startsWith("Klosterwalde,") ||
    stop.name.startsWith("Knehden,") ||
    stop.name === "Koboltenhof" ||
    stop.name === "Kolbatzer Mühle" ||
    stop.name.startsWith("Kraatz (UM)") ||
    stop.name === "Kreuzkrug" ||
    stop.name === "Krewitz" ||
    stop.name === "Kröchlendorff" ||
    stop.name === "Krohnhorst" ||
    stop.name.startsWith("Krohnhorst,") ||
    stop.name === "Kuhz" ||
    stop.name.startsWith("Kummerow (UM)") ||
    stop.name.startsWith("Kunow (UM)") ||
    stop.name === "Küstrinchen" ||
    stop.name.startsWith("Kutzerow,") ||
    stop.name === "Lemmersdorf" ||
    stop.name === "Lichtenhain" ||
    stop.name.startsWith("Lindenhagen,") ||
    stop.name.startsWith("Lindenhof (bei Dedelow)") ||
    stop.name.startsWith("Lindenhof (bei Templin)") ||
    stop.name === "Lindensee" ||
    stop.name.startsWith("Lindhorst,") ||
    stop.name === "Louisfelde" ||
    stop.name === "Lübbenow" ||
    stop.name === "Luckow" ||
    stop.name.startsWith("Ludwigsburg,") ||
    stop.name === "Luisenau" ||
    stop.name === "Lützlow" ||
    stop.name.startsWith("Lychen,") ||
    stop.name.startsWith("Mahlendorf,") ||
    stop.name === "Malchow" ||
    stop.name === "Meichow" ||
    stop.name === "Mellenau" ||
    stop.name === "Melzow" ||
    stop.name === "Menkin" ||
    stop.name.startsWith("Mescherin,") ||
    stop.name.startsWith("Metzelthin (UM)") ||
    stop.name.startsWith("Meyenburg (UM)") ||
    stop.name.startsWith("Milmersdorf,") ||
    stop.name.startsWith("Milow (UM)") ||
    stop.name.startsWith("Mittenwalde (bei Templin)") ||
    stop.name.startsWith("Moor (UM)") ||
    stop.name.startsWith("Mühlhof,") ||
    stop.name.startsWith("Mürow,")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
console.log(`after UM: ${remainingStops.length}`);
export { stops, remainingStops };
