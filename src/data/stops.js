import stationsA from "./stationsA";
import stationsB from "./stationsB";
import stationsC from "./stationsC";
import stationsD from "./stationsD";
import stationsE from "./stationsE";
import stationsF from "./stationsF";
import stationsG from "./stationsG";
import stationsH from "./stationsH";
import stationsI from "./stationsI";
import stationsJ from "./stationsJ";
import stationsK from "./stationsK";

const stops = [
  { id: "900000160541", name: "Josef-Orlopp-Str./Vulkanstr." },
  ...stationsA,
  ...stationsB,
  ...stationsC,
  ...stationsD,
  ...stationsE,
  ...stationsF,
  ...stationsG,
  ...stationsH,
  ...stationsI,
  ...stationsJ,
  ...stationsK,
  { id: "900000110004", name: "S Landsberger Allee" },
  { id: "900000067221", name: "S Lankwitz" },
  { id: "900000200006", name: "S Lehnitz" },
  { id: "900000079201", name: "U Leinestr." },
  { id: "900000009102", name: "U Leopoldplatz" },
  { id: "900000160004", name: "S+U Lichtenberg" },
  { id: "900000160021", name: "S+U Lichtenberg/Gudrunstr." },
  { id: "900000074201", name: "S Lichtenrade" },
  { id: "900000064301", name: "S Lichterfelde Ost" },
  { id: "900000064201", name: "S Lichterfelde Süd" },
  { id: "900000066101", name: "S Lichterfelde West" },
  { id: "900000086160", name: "U Lindauer Allee" },
  { id: "900000082201", name: "U Lipschitzallee" },
  { id: "900000175015", name: "U Louis-Lewin-Str." },
  { id: "900000160005", name: "U Magdalenenstr." },
  { id: "900000245028", name: "S Mahlow" },
  { id: "900000176001", name: "S Mahlsdorf" },
  { id: "900000073101", name: "S Marienfelde" },
  { id: "900000100014", name: "U Märkisches Museum" },
  { id: "900000170001", name: "S Marzahn" },
  { id: "900000017101", name: "U Mehringdamm" },
  { id: "900000170003", name: "S Mehrower Allee" },
  { id: "900000005252", name: "U Mendelssohn-Bartholdy-Park" },
  { id: "900000024106", name: "S Messe Nord/ICC" },
  { id: "900000025423", name: "S Messe Süd" },
  { id: "900000050301", name: "S Mexikoplatz" },
  { id: "900000019204", name: "U Mierendorffplatz" },
  { id: "900000017104", name: "U Möckernbrücke" },
  { id: "900000100010", name: "U Mohrenstr." },
  { id: "900000013101", name: "U Moritzplatz" },
  { id: "900000200013", name: "S Mühlenbeck-Mönchmühle" },
  { id: "900000100009", name: "U Naturkundemuseum" },
  { id: "900000009201", name: "U Nauener Platz" },
  { id: "900000320007", name: "S Neuenhagen" },
  { id: "900000078201", name: "S+U Neukölln" },
  { id: "900000026101", name: "U Neu-Westend" },
  { id: "900000052201", name: "S Nikolassee" },
  { id: "900000160003", name: "S Nöldnerplatz" },
  { id: "900000056102", name: "U Nollendorfplatz" },
  { id: "900000007104", name: "S Nordbahnhof" },
  { id: "900000192002", name: "S Oberspree" },
  { id: "900000025321", name: "S Olympiastadion" },
  { id: "900000025203", name: "U Olympia-Stadion" },
  { id: "900000050282", name: "U Onkel Toms Hütte" },
  { id: "900000200005", name: "S Oranienburg" },
  { id: "900000100007", name: "S Oranienburger Str." },
  { id: "900000100019", name: "U Oranienburger Tor" },
  { id: "900000064256", name: "S Osdorfer Str." },
  { id: "900000051301", name: "U Oskar-Helene-Heim" },
  { id: "900000009202", name: "U Osloer Str." },
  { id: "900000120005", name: "S Ostbahnhof" },
  { id: "900000120003", name: "S Ostkreuz" },
  { id: "900000086101", name: "U Otisstr." },
  { id: "900000130002", name: "S+U Pankow" },
  { id: "900000130001", name: "S Pankow-Heinersdorf" },
  { id: "900000009203", name: "U Pankstr." },
  { id: "900000085104", name: "U Paracelsus-Bad" },
  { id: "900000085108", name: "U Paracelsus-Bad/Aroser Allee" },
  { id: "900000068101", name: "U Paradestr." },
  { id: "900000080401", name: "U Parchimer Allee" },
  { id: "900000034101", name: "U Paulsternstr." },
  { id: "900000320005", name: "S Petershagen Nord" },
  { id: "900000025424", name: "S Pichelsberg" },
  { id: "900000170005", name: "S Poelchaustr." },
  { id: "900000191002", name: "S Plänterwald" },
  { id: "900000017102", name: "U Platz der Luftbrücke" },
  { id: "900000051302", name: "U Podbielskiallee" },
  { id: "900000100020", name: "S+U Potsdamer Platz" },
  { id: "900000230999", name: "S Potsdam Hauptbahnhof" },
  { id: "900000110002", name: "S Prenzlauer Allee" },
  { id: "900000058102", name: "S Priesterweg" },
  { id: "900000013103", name: "U Prinzenstr." },
  { id: "900000183001", name: "S Rahnsdorf" },
  { id: "900000170002", name: "S Raoul-Wallenberg-Str." },
  { id: "900000078102", name: "U Rathaus Neukölln" },
  { id: "900000096410", name: "U Rathaus Reinickendorf" },
  { id: "900000054101", name: "U Rathaus Schöneberg" },
  { id: "900000029302", name: "S+U Rathaus Spandau" },
  { id: "900000062202", name: "S+U Rathaus Steglitz" },
  { id: "900000011101", name: "U Rehberge" },
  { id: "900000008102", name: "U Reinickendorfer Str." },
  { id: "900000085203", name: "U Residenzstr." },
  { id: "900000022202", name: "U Richard-Wagner-Platz" },
  { id: "900000036101", name: "U Rohrdamm" },
  { id: "900000350162", name: "S Röntgental" },
  { id: "900000100016", name: "U Rosa-Luxemburg-Platz" },
  { id: "900000100023", name: "U Rosenthaler Platz" },
  { id: "900000045101", name: "U Rüdesheimer Platz" },
  { id: "900000083201", name: "U Rudow" },
  { id: "900000025202", name: "U Ruhleben" },
  { id: "900000160001", name: "S Rummelsburg" },
  { id: "900000120009", name: "U Samariterstr." },
  { id: "900000024203", name: "S Savignyplatz" },
  { id: "900000087101", name: "U Scharnweberstr." },
  { id: "900000074202", name: "S Schichauweg" },
  { id: "900000100017", name: "U Schillingstr." },
  { id: "900000050355", name: "S Schlachtensee" },
  { id: "900000014102", name: "U Schlesisches Tor" },
  { id: "900000062203", name: "U Schloßstr." },
  { id: "900000054104", name: "S Schöneberg" },
  { id: "900000192001", name: "S Schöneweide" },
  { id: "900000200012", name: "S Schönfließ" },
  { id: "900000110001", name: "S+U Schönhauser Allee" },
  { id: "900000085201", name: "S Schönholz" },
  { id: "900000016201", name: "U Schönleinstr." },
  { id: "900000091205", name: "S Schulzendorf" },
  { id: "900000100501", name: "U Schwartzkopffstr." },
  { id: "900000009103", name: "U Seestr." },
  { id: "900000110005", name: "U Senefelderplatz" },
  { id: "900000035101", name: "U Siemensdamm" },
  { id: "900000077106", name: "S Sonnenallee" },
  { id: "900000022101", name: "U Sophie-Charlotte-Platz" },
  { id: "900000042101", name: "U Spichernstr." },
  { id: "900000180003", name: "S Spindlersfeld" },
  { id: "900000100013", name: "U Spittelmarkt" },
  { id: "900000171003", name: "S Springpfuhl" },
  { id: "900000029305", name: "Bf Staaken" },
  { id: "900000100011", name: "U Stadtmitte" },
  { id: "900000110012", name: "S Storkower Str." },
  { id: "900000320004", name: "S Strausberg" },
  { id: "900000120006", name: "U Strausberger Platz" },
  { id: "900000320001", name: "S Strausberg Nord" },
  { id: "900000320002", name: "S Strausberg Stadt" },
  { id: "900000030202", name: "S Stresow" },
  { id: "900000063452", name: "S Südende" },
  { id: "900000058101", name: "S Südkreuz" },
  { id: "900000016202", name: "U Südstern" },
  { id: "900000049202", name: "S Sundgauer Str." },
  { id: "900000089303", name: "S Tegel" },
  { id: "900000220114", name: "S Teltow Stadt" },
  { id: "900000068201", name: "S Tempelhof" },
  { id: "900000026201", name: "U Theodor-Heuss-Platz" },
  { id: "900000003103", name: "S Tiergarten" },
  { id: "900000161002", name: "U Tierpark" },
  { id: "900000190001", name: "S Treptower Park" },
  { id: "900000003104", name: "U Turmstr." },
  { id: "900000023301", name: "U Uhlandstr." },
  { id: "900000069271", name: "U Ullsteinstr." },
  { id: "900000055101", name: "U Viktoria-Luise-Platz" },
  { id: "900000130011", name: "U Vinetastr." },
  { id: "900000007103", name: "U Voltastr." },
  { id: "900000094101", name: "S Waidmannslust" },
  { id: "900000061101", name: "U Walther-Schreiber-Platz" },
  { id: "900000053301", name: "S Wannsee" },
  { id: "900000120004", name: "S+U Warschauer Str." },
  { id: "900000120011", name: "S Warschauer Str." },
  { id: "900000151001", name: "S Wartenberg" },
  { id: "900000120025", name: "U Weberwiese" },
  { id: "900000009104", name: "S+U Wedding" },
  { id: "900000100051", name: "U Weinmeisterstr." },
  { id: "900000026207", name: "S Westend" },
  { id: "900000001201", name: "S+U Westhafen" },
  { id: "900000024102", name: "S Westkreuz" },
  { id: "900000070101", name: "U Westphalweg" },
  { id: "900000260002", name: "S Wildau" },
  { id: "900000183002", name: "S Wilhelmshagen" },
  { id: "900000084101", name: "S Wilhelmsruh" },
  { id: "900000024202", name: "U Wilmersdorfer Str." },
  { id: "900000096101", name: "S+U Wittenau" },
  { id: "900000056101", name: "U Wittenbergplatz" },
  { id: "900000130003", name: "S Wollankstr." },
  { id: "900000175001", name: "S+U Wuhletal" },
  { id: "900000180002", name: "S Wuhlheide" },
  { id: "900000083102", name: "U Wutzkyallee" },
  { id: "900000057103", name: "S+U Yorckstr." },
  { id: "900000049201", name: "S Zehlendorf" },
  { id: "900000350163", name: "S Zepernick" },
  { id: "900000260003", name: "S Zeuthen" },
  { id: "900000033101", name: "U Zitadelle" },
  { id: "900000023201", name: "S+U Zoologischer Garten" },
  { id: "900000083101", name: "U Zwickauer Damm" },
  { id: "900000027205", name: "Aalemannufer" },
  { id: "900000014103", name: "Adalbertstr./Oranienstr." },
  { id: "900000170515", name: "Adersleber Weg" },
  { id: "900000170006", name: "Ahrensfelde/Stadtgrenze" },
  { id: "900000054151", name: "Albertstr." },
  { id: "900000170019", name: "Allee der Kosmonauten/Poelchaustr." },
  { id: "900000171008", name: "Allee der Kosmonauten/Rhinstr." },
  { id: "900000142502", name: "Alt-Blankenburg" },
  { id: "900000135506", name: "Alt-Buch/Wiltbergstr." },
  { id: "900000081201", name: "Alt-Buckow" },
  { id: "900000181513", name: "Alte Försterei" },
  { id: "900000182005", name: "Altes Wasserwerk" },
  { id: "900000161005", name: "Alt-Friedrichsfelde/Gensinger Str." },
  { id: "900000161004", name: "Alt-Friedrichsfelde/Rhinstr." },
  { id: "900000038104", name: "Alt-Gatow" },
  { id: "900000195006", name: "Altglienicke Kirche" },
  { id: "900000091101", name: "Alt-Heiligensee" },
  { id: "900000143509", name: "Alt-Karow" },
  { id: "900000039102", name: "Alt-Kladow" },
  { id: "900000170516", name: "Alt-Marzahn" },
  { id: "900000003107", name: "Alt-Moabit/Gotzkowskystr." },
  { id: "900000003203", name: "Alt-Moabit/Rathenower Str." },
  { id: "900000184002", name: "Alt-Müggelheim" },
  { id: "900000032402", name: "Alt-Pichelsdorf" },
  { id: "900000185001", name: "Alt-Schmöckwitz" },
  { id: "900000190501", name: "Alt-Treptow" },
  { id: "900000110019", name: "Am Friedrichshain" },
  { id: "900000027301", name: "Am Kiesteich" },
  { id: "900000100038", name: "Am Kupfergraben" },
  { id: "900000096406", name: "Am Nordgraben/Oranienburger Str." },
  { id: "900000032101", name: "Am Omnibushof" },
  { id: "900000161517", name: "Am Tierpark/Alfred-Kowalke-Str." },
  { id: "900000024104", name: "Amtsgerichtsplatz" },
  { id: "900000044102", name: "Am Volkspark" },
  { id: "900000141504", name: "Am Wasserturm" },
  { id: "900000089391", name: "An der Mühle" },
  { id: "900000056105", name: "An der Urania" },
  { id: "900000049372", name: "Andréezeile" },
  { id: "900000140011", name: "Antonplatz" },
  { id: "900000066301", name: "Appenzeller Str." },
  { id: "900000133014", name: "Arkenberge" },
  { id: "900000085101", name: "Aroser Allee/Gotthardstr." },
  { id: "900000068341", name: "Attilaplatz" },
  { id: "900000134012", name: "Aubertstr." },
  { id: "900000086106", name: "Auguste-Viktoria-Allee/Humboldtstr." },
  { id: "900000060105", name: "Auguste-Viktoria-Klinikum Süd" },
  { id: "900000180008", name: "Bahnhofstr./Lindenstr." },
  { id: "900000180009", name: "Bahnhofstr./Seelenbinderstr." },
  { id: "900000161513", name: "Balatonstr." },
  { id: "900000170011", name: "Barnimplatz" },
  { id: "900000191513", name: "Baumschulenstr./Fähre" },
  { id: "900000191003", name: "Baumschulenstr./Köpenicker Landstr." },
  { id: "900000190006", name: "Beermannstr." },
  { id: "900000049301", name: "Beeskowdamm" },
  { id: "900000049103", name: "Behring-Krankenhaus" },
  { id: "900000069204", name: "Bergholzstr." },
  { id: "900000046301", name: "Berkaer Str./Breite Str." },
  { id: "900000140006", name: "Berliner Allee/Indira-Gandhi-Str." },
  { id: "900000140013", name: "Berliner Allee/Rennbahnstr." },
  { id: "900000019158", name: "Berliner Großmarkt" },
  { id: "900000068203", name: "Berlinickeplatz" },
  { id: "900000120516", name: "Bersarinplatz" },
  { id: "900000032481", name: "Betckestr." },
  { id: "900000014107", name: "Bethaniendamm" },
  { id: "900000150518", name: "Betriebshof Indira-Gandhi-Str." },
  { id: "900000180514", name: "Betriebshof Köpenick" },
  { id: "900000160522", name: "Betriebshof Lichtenberg" },
  { id: "900000170010", name: "Betriebshof Marzahn" },
  { id: "900000063202", name: "Birkbuschstr./Klingsorstr." },
  { id: "900000063104", name: "Bismarckstr./Bergstr." },
  { id: "900000022106", name: "Bismarckstr./Kaiser-Friedrich-Str." },
  { id: "900000131518", name: "Blankenburger Str./Grumbkowstr." },
  { id: "900000133011", name: "Blankenfelde Kirche" },
  { id: "900000134500", name: "Blankenfelder Str." },
  { id: "900000170015", name: "Blumberger Damm/Elisabethstr." },
  { id: "900000170510", name: "Blumberger Damm/Mehrower Allee" },
  { id: "900000068103", name: "Boelckestr./Hoeppnerstr." },
  { id: "900000195003", name: "Bohnsdorfer Weg" },
  { id: "900000171517", name: "Boschpoler Str." },
  { id: "900000120013", name: "Boxhagener Str./Holteistr." },
  { id: "900000180512", name: "Brandenburgplatz" },
  { id: "900000038201", name: "Breitehornweg" },
  { id: "900000063291", name: "Breite Str." },
  { id: "900000080103", name: "Britzer Damm/Gradestr." },
  { id: "900000080406", name: "Britzer Damm/Mohriner Allee" },
  { id: "900000026102", name: "Brixplatz" },
  { id: "900000037103", name: "Brunsbütteler Damm/Nennhauser Damm" },
  { id: "900000031101", name: "Brunsbütteler Damm/Ruhlebener Str." },
  { id: "900000037114", name: "Brunsbütteler Damm/Stadtgrenze" },
  { id: "900000143513", name: "Bucher Chaussee/Achillesstr." },
  { id: "900000080407", name: "Buckower Damm/Gutschmidtstr." },
  { id: "900000081203", name: "Buckower Damm/Ringslebenstr." },
  { id: "900000190509", name: "Bulgarische Str." },
  { id: "900000131004", name: "Bürgerpark Pankow" },
  { id: "900000140519", name: "Buschallee" },
  { id: "900000140007", name: "Buschallee/Hansastr." },
  { id: "900000080405", name: "Buschkrug" },
  { id: "900000080403", name: "Buschkrugallee/Parchimer Allee" },
  { id: "900000050381", name: "Busseallee" },
  { id: "900000096309", name: "Calauer Str." },
  { id: "900000063203", name: "Carmerplatz" },
  { id: "900000066201", name: "Carstennstr./Ringstr." },
  { id: "900000171010", name: "Cecilienstr./Blumberger Damm" },
  { id: "900000171520", name: "Cecilienstr./Wuhle" },
  { id: "900000066410", name: "Charité - Campus Benjamin Franklin" },
  { id: "900000100542", name: "Charité - Campus Mitte" },
  { id: "900000175008", name: "Chemnitzer Str./Jägerstr." },
  { id: "900000077102", name: "Dammweg/Sonnenallee" },
  { id: "900000140020", name: "Darßer Str./Piesporter Str." },
  { id: "900000150022", name: "Darßer Str./Ribnitzer Str." },
  { id: "900000034160", name: "Daumstr./Rhenaniastr." },
  { id: "900000037109", name: "Döberitzer Weg" },
  { id: "900000054107", name: "Dominicusstr./Hauptstr." },
  { id: "900000092203", name: "Donnersmarckplatz" },
  { id: "900000066407", name: "Drakestr./Ringstr." },
  { id: "900000020153", name: "DRK-Kliniken Westend" },
  { id: "900000068102", name: "Dudenstr./Katzbachstr." },
  { id: "900000086103", name: "Eichborndamm/Antonienstr." },
  { id: "900000083354", name: "Eichenauer Weg" },
  { id: "900000190004", name: "Eichenstr./Puschkinallee" },
  { id: "900000170513", name: "Elisabethstr./Oberfeldstr." },
  { id: "900000190505", name: "Elsenstr./Kiefholzstr." },
  { id: "900000046203", name: "Elsterplatz" },
  { id: "900000085208", name: "Emmentaler Str./Reginhardstr." },
  { id: "900000075101", name: "Erkstr." },
  { id: "900000152007", name: "Falkenberg" },
  { id: "900000152006", name: "Falkenberger Chaussee/Prendener Str." },
  { id: "900000140012", name: "Falkenberger Str./Berliner Allee" },
  { id: "900000027302", name: "Falkenseer Chaussee/Stadtrandstr." },
  { id: "900000027401", name: "Falkenseer Chaussee/Zeppelinstr." },
  { id: "900000037191", name: "Finkenkruger Weg" },
  { id: "900000096308", name: "Finsterwalder Str./Dannenwalder Weg" },
  { id: "900000100526", name: "Fischerinsel" },
  { id: "900000025301", name: "Flatowallee/Olympiastadion" },
  { id: "900000087171", name: "Flughafen Tegel (Airport)" },
  { id: "900000132011", name: "Fontanestr./Schillerstr." },
  { id: "900000260024", name: "Flughafen Schönefeld Terminal (Airport)" },
  { id: "900000180006", name: "Freiheit" },
  { id: "900000181003", name: "Freizeit- und Erholungszentrum" },
  { id: "900000027305", name: "Freudstr./Goldkäferweg" },
  { id: "900000073243", name: "Friedenfelser Str." },
  { id: "900000070304", name: "Friedenstr./Großbeerenstr." },
  { id: "900000131502", name: "Frühlingstr." },
  { id: "900000080102", name: "Fulhamer Allee" },
  { id: "900000029105", name: "Galenstr." },
  { id: "900000171519", name: "Garzauer Str." },
  { id: "900000032106", name: "Gatower Str./Heerstr." },
  { id: "900000150504", name: "Gehrenseestr." },
  { id: "900000074154", name: "Gerlinger Str." },
  { id: "900000070201", name: "Gersdorfstr./Kaiserstr." },
  { id: "900000082259", name: "Gesundheitszentrum" },
  { id: "900000140014", name: "Giersstr." },
  { id: "900000180524", name: "Glienicker Str." },
  { id: "900000054153", name: "Goebenstr." },
  { id: "900000020281", name: "Goerdelersteg" },
  { id: "900000066401", name: "Goerzallee/Drakestr." },
  { id: "900000074208", name: "Goltzstr./Lichtenrader Damm" },
  { id: "900000027256", name: "Goltzstr./Rauchstr." },
  { id: "900000096103", name: "Gorkistr./Am Nordgraben" },
  { id: "900000175536", name: "Gothaer Str./Eisenacher Str." },
  { id: "900000085103", name: "Gotthardstr./Holländerstr." },
  { id: "900000131528", name: "Grabbeallee/Pastor-Niemöller-Platz" },
  { id: "900000080101", name: "Gradestr./Tempelhofer Weg" },
  { id: "900000039157", name: "Gredinger Str." },
  { id: "900000110020", name: "Greifswalder Str./Danziger Str." },
  { id: "900000110016", name: "Greifswalder Str./Ostseestr." },
  { id: "900000074105", name: "Grimmstr." },
  { id: "900000072181", name: "Großbeerenstr./Daimlerstr." },
  { id: "900000004101", name: "Großer Stern" },
  { id: "900000120014", name: "Grünberger Str./Warschauer Str." },
  { id: "900000054192", name: "Grunewaldstr." },
  { id: "900000140017", name: "Gustav-Adolf-Str./Langhansstr." },
  { id: "900000175500", name: "Gutenbergstr." },
  { id: "900000039101", name: "Gutsstr." },
  { id: "900000134511", name: "Guyotstr." },
  { id: "900000130005", name: "Hadlichstr." },
  { id: "900000194012", name: "Haeckelstr." },
  { id: "900000048107", name: "Hagenplatz" },
  { id: "900000037203", name: "Hahneberg" },
  { id: "900000071171", name: "Halbauer Weg" },
  { id: "900000140009", name: "Hamburger Platz" },
  { id: "900000066404", name: "Händelplatz" },
  { id: "900000150002", name: "Hansastr./Malchower Weg" },
  { id: "900000075102", name: "Harzer Str./Wildenbruchstr." },
  { id: "900000034105", name: "Haselhorster Damm/Gartenfelder Str." },
  { id: "900000192505", name: "Hasselwerderstr." },
  { id: "900000132010", name: "Hauptstr./Friedrich-Engels-Str." },
  { id: "900000054173", name: "Hauptstr./Martin-Luther-Str." },
  { id: "900000150020", name: "Hauptstr./Rhinstr." },
  { id: "900000026251", name: "Haus des Rundfunks" },
  { id: "900000037207", name: "Heerstr./Magistratsweg" },
  { id: "900000037211", name: "Heerstr./Nennhauser Damm" },
  { id: "900000032102", name: "Heerstr./Wilhelmstr." },
  { id: "900000037102", name: "Heidebergplan" },
  { id: "900000091103", name: "Heiligenseestr./Hennigsdorfer Str." },
  { id: "900000089302", name: "Heiligenseestr./Ruppiner Chaussee" },
  { id: "900000141001", name: "Heinersdorf" },
  { id: "900000064354", name: "Heinersdorfer Str./Hildburghauser Str." },
  { id: "900000141002", name: "Heinersdorf Kirche" },
  { id: "900000171516", name: "Helene-Weigel-Platz" },
  { id: "900000175556", name: "Hellersdorfer Str./Gülzower Str." },
  { id: "900000190503", name: "Herkomerstr." },
  { id: "900000131503", name: "Hermann-Hesse-Str." },
  { id: "900000131527", name: "Hermann-Hesse-Str./Waldstr." },
  { id: "900000048104", name: "Herthastr." },
  { id: "900000004181", name: "Hertzallee" },
  { id: "900000132509", name: "Hertzstr./Hauptstr." },
  { id: "900000160012", name: "Herzbergstr./Siegfriedstr." },
  { id: "900000132504", name: "Hielscherstr." },
  { id: "900000180016", name: "Hirtestr." },
  { id: "900000041281", name: "Hochmeisterplatz" },
  { id: "900000150011", name: "Hohenschönhauser Str./Weißenseer Weg" },
  { id: "900000055105", name: "Hohenstaufenstr." },
  { id: "900000027403", name: "Hohenzollernring/Falkenseer Chaussee" },
  { id: "900000011206", name: "Holländerstr./Aroser Allee" },
  { id: "900000097101", name: "Holzhauser Str./Schubartstr." },
  { id: "900000176009", name: "Hönower Str./Riesaer Str." },
  { id: "900000039103", name: "Hottengrund" },
  { id: "900000134509", name: "Hugenottenplatz" },
  { id: "900000176512", name: "Hultschiner Damm/Seestr." },
  { id: "900000074206", name: "Im Domstift/Groß-Ziethener Str." },
  { id: "900000027352", name: "Im Spektefeld/Schulzentrum" },
  { id: "900000180023", name: "Innovationspark Wuhlheide" },
  { id: "900000060104", name: "Insulaner" },
  { id: "900000100503", name: "Invalidenpark" },
  { id: "900000092101", name: "Invalidensiedlung" },
  { id: "900000170517", name: "Jan-Petersen-Str." },
  { id: "900000027201", name: "Johannesstift" },
  { id: "900000082291", name: "Johannisthaler Chaussee/Rudower Str." },
  { id: "900000194506", name: "Johannisthal Kirche" },
  { id: "900000064352", name: "Jungfernstieg" },
  { id: "900000061104", name: "Kaisereiche" },
  { id: "900000024108", name: "Kaiser-Friedrich-Str./Kantstr." },
  { id: "900000054109", name: "Kaiser-Wilhelm-Platz" },
  { id: "900000024207", name: "Kantstr./Leibnizstr." },
  { id: "900000194016", name: "Karl-Ziegler-Str." },
  { id: "900000039162", name: "Kaserne Hottengrund" },
  { id: "900000191004", name: "Kiefholzstr./Baumschulenstr." },
  { id: "900000062252", name: "Kieler Str." },
  { id: "900000080491", name: "Kielingerstr." },
  { id: "900000074292", name: "Kirchhainer Damm/Horstwalder Str." },
  { id: "900000180508", name: "Kleinschewskystr." },
  { id: "900000190504", name: "Klingerstr." },
  { id: "900000016203", name: "Klinikum Am Urban" },
  { id: "900000082101", name: "Klinikum Neukölln" },
  { id: "900000110021", name: "Kniprodestr./Danziger Str." },
  { id: "900000110026", name: "Kniprodestr./Storkower Str." },
  { id: "900000180012", name: "Köllnischer Platz" },
  { id: "900000082255", name: "Kölner Damm" },
  { id: "900000026206", name: "Königin-Elisabeth-Str./Spandauer Damm" },
  { id: "900000051307", name: "Königin-Luise-Platz/Botanischer Garten" },
  { id: "900000051204", name: "Königin-Luise-Str./Clayallee" },
  { id: "900000191511", name: "Köpenicker Landstr./Dammweg" },
  { id: "900000170507", name: "Köthener Str." },
  { id: "900000180019", name: "Krankenhaus Köpenick/Besuchereingang" },
  { id: "900000180022", name: "Krankenhaus Köpenick/Südseite" },
  { id: "900000170013", name: "Landsberger Allee/Blumberger Damm" },
  { id: "900000120016", name: "Landsberger Allee/Petersburger Str." },
  { id: "900000171011", name: "Landsberger Allee/Rhinstr." },
  { id: "900000067201", name: "Lankwitz Kirche" },
  { id: "900000001204", name: "Lehrter Str./Invalidenstr." },
  { id: "900000067101", name: "Leonorenstr./Siemensstr." },
  { id: "900000074205", name: "Lichtenrader Damm/Barnetstr." },
  { id: "900000083351", name: "Lieselotte-Berger-Str." },
  { id: "900000058105", name: "Lindenhof" },
  { id: "900000012104", name: "Lindenstr./Oranienstr." },
  { id: "900000082205", name: "Lipschitzallee/Fritz-Erler-Allee" },
  { id: "900000082203", name: "Lipschitzallee/Rudower Str." },
  { id: "900000052356", name: "Lloyd-G.-Wells-Str." },
  { id: "900000160017", name: "Loeperplatz" },
  { id: "900000051251", name: "Löhleinstr." },
  { id: "900000011201", name: "Louise-Schroeder-Platz" },
  { id: "900000022172", name: "Luisenplatz/Schloss Charlottenburg" },
  { id: "900000032105", name: "Lutoner Str." },
  { id: "900000005105", name: "Lützowplatz" },
  { id: "900000066202", name: "Luzerner Str." },
  { id: "900000049251", name: "Machnower Str./Berlepschstr." },
  { id: "900000089601", name: "Mäckeritzwiesen" },
  { id: "900000037101", name: "Magistratsweg/Brunsbütteler Damm" },
  { id: "900000194501", name: "Magnusstr." },
  { id: "900000180010", name: "Mahlsdorfer Str./Gehsener Str." },
  { id: "900000151007", name: "Malchow/Dorfstr." },
  { id: "900000041154", name: "Mansfelder Str./Barstr." },
  { id: "900000014104", name: "Manteuffelstr./Köpenicker Str." },
  { id: "900000021151", name: "Marchstr." },
  { id: "900000192508", name: "Marggraffbrücke" },
  { id: "900000074101", name: "Mariendorfer Damm/Buckower Chaussee" },
  { id: "900000120521", name: "Markgrafendamm" },
  { id: "900000171528", name: "Märkische Allee/Alt-Friedrichsfelde" },
  { id: "900000096310", name: "Märkische Zeile" },
  { id: "900000170020", name: "Marzahner Promenade" },
  { id: "900000083202", name: "Massantebrücke" },
  { id: "900000026208", name: "Masurenallee/ZOB" },
  { id: "900000032104", name: "Melanchthonplatz" },
  { id: "900000027254", name: "Mertensstr." },
  { id: "900000026204", name: "Messedamm/ZOB" },
  { id: "900000110028", name: "Michelangelostr." },
  { id: "900000140019", name: "Mirbachplatz" },
  { id: "900000160014", name: "Möllendorffstr./Storkower Str." },
  { id: "900000100040", name: "Mollstr./Otto-Braun-Str." },
  { id: "900000110022", name: "Mollstr./Prenzlauer Allee" },
  { id: "900000029202", name: "Moritzstr." },
  { id: "900000185003", name: "Moßkopfring" },
  { id: "900000180014", name: "Müggelbergallee" },
  { id: "900000184003", name: "Müggelheim/Dorf" },
  { id: "900000180005", name: "Müggelheimer Str./Wendenschloßstr." },
  { id: "900000180018", name: "Müggelschlößchenweg" },
  { id: "900000175544", name: "Myslowitzer Str./Klinikum" },
  { id: "900000074207", name: "Nahariyastr." },
  { id: "900000073305", name: "Nahmitzer Damm" },
  { id: "900000073241", name: "Nahmitzer Damm/Marienfelder Allee" },
  { id: "900000083352", name: "Narkauer Weg" },
  { id: "900000063201", name: "Neue Filandastr." },
  { id: "900000176538", name: "Neuenhagener Str." },
  { id: "900000083353", name: "Neuhofer Str." },
  { id: "900000083181", name: "Neuköllner Str./Zwickauer Damm" },
  { id: "900000049101", name: "Neuruppiner Str." },
  { id: "900000131006", name: "Nordend" },
  { id: "900000132512", name: "Nordend-Arena" },
  { id: "900000004151", name: "Nordische Botschaften/Adenauer-Stiftung" },
  { id: "900000175519", name: "Nossener Str." },
  { id: "900000184001", name: "Odernheimer Str." },
  { id: "900000023304", name: "Olivaer Platz" },
  { id: "900000086105", name: "Ollenhauerstr./Lindauer Allee" },
  { id: "900000009204", name: "Osloer Str./Prinzenallee" },
  { id: "900000064101", name: "Ostpreußendamm/Königsberger Str." },
  { id: "900000064206", name: "Ostpreußendamm/Osdorfer Str." },
  { id: "900000023104", name: "Otto-Suhr-Allee/Leibnizstr." },
  { id: "900000085207", name: "Pankower Allee/Reginhardstr." },
  { id: "900000130013", name: "Pankow Kirche" },
  { id: "900000140002", name: "Pasedagplatz" },
  { id: "900000134503", name: "Pasewalker Str./Blankenburger Weg" },
  { id: "900000131005", name: "Pastor-Niemöller-Platz" },
  { id: "900000034103", name: "Paulsternstr./Gartenfelder Str." },
  { id: "900000083304", name: "Pfarrer-Heß-Weg" },
  { id: "900000053258", name: "Pfaueninselchaussee/Königstr." },
  { id: "900000032401", name: "Pichelsdorfer Str./Weißenburger Str." },
  { id: "900000027402", name: "Pionierstr./Zeppelinstr." },
  { id: "900000120019", name: "Platz der Vereinten Nationen" },
  { id: "900000005205", name: "Potsdamer Brücke" },
  { id: "900000050302", name: "Potsdamer Chaussee/Lindenthaler Allee" },
  { id: "900000110017", name: "Prenzlauer Allee/Danziger Str." },
  { id: "900000110013", name: "Prenzlauer Allee/Ostseestr." },
  { id: "900000141507", name: "Prenzlauer Promenade/Am Steinberg" },
  { id: "900000151006", name: "Prerower Platz" },
  { id: "900000081101", name: "Quarzweg/Marienfelder Chaussee" },
  { id: "900000035104", name: "Quellweg" },
  { id: "900000096304", name: "Quickborner Str." },
  { id: "900000096312", name: "Quickborner Str./Treuenbrietzener Str." },
  { id: "900000002200", name: "Quitzowstr." },
  { id: "900000183003", name: "Rahnsdorf/Waldschänke" },
  { id: "900000176525", name: "Rahnsdorfer Str." },
  { id: "900000171009", name: "Rapsweg/Unfallkrankenhaus" },
  { id: "900000180024", name: "Rathaus Köpenick" },
  { id: "900000130501", name: "Rathaus Pankow" },
  { id: "900000054106", name: "Rathaus Schöneberg" },
  { id: "900000003155", name: "Rathaus Tiergarten" },
  { id: "900000140018", name: "Rathaus Weißensee" },
  { id: "900000049258", name: "Rathaus Zehlendorf" },
  { id: "900000048103", name: "Rathenauplatz" },
  { id: "900000027206", name: "Rauchstr." },
  { id: "900000074214", name: "Rehagener Str." },
  { id: "900000058109", name: "Reichartstr." },
  { id: "900000037204", name: "Reimerweg" },
  { id: "900000140008", name: "Rennbahnstr./Gustav-Adolf-Str." },
  { id: "900000074254", name: "Rennsteig" },
  { id: "900000190507", name: "Rethelstr." },
  { id: "900000120021", name: "Revaler Str." },
  { id: "900000175013", name: "Riesaer Str." },
  { id: "900000175014", name: "Riesaer Str./Louis-Lewin-Str." },
  { id: "900000069258", name: "Rixdorfer Str./Ullsteinstr." },
  { id: "900000058106", name: "Röblingstr./Arnulfstr." },
  { id: "900000068304", name: "Röblingstr./Attilastr." },
  { id: "900000160010", name: "Roederplatz" },
  { id: "900000048109", name: "Roseneck" },
  { id: "900000048108", name: "Roseneck/Hohenzollerndamm" },
  { id: "900000046354", name: "Roseneck/Teplitzer Str." },
  { id: "900000132014", name: "Rosenthal Nord" },
  { id: "900000037201", name: "Rudolf-Wissell-Siedlung" },
  { id: "900000194015", name: "Rudower Chaussee/Wegedornstr." },
  { id: "900000082152", name: "Rudower Str./Grüner Weg" },
  { id: "900000161003", name: "Rummelsburger Str." },
  { id: "900000064307", name: "Saaleckplatz" },
  { id: "900000035103", name: "Saatwinkler Damm/Rohrdamm" },
  { id: "900000049302", name: "Sachtlebenstr." },
  { id: "900000037202", name: "Sandstr." },
  { id: "900000050203", name: "Scharfestr." },
  { id: "900000120540", name: "Scharnweberstr./Weichselstr." },
  { id: "900000131001", name: "Schillerstr." },
  { id: "900000005103", name: "Schillstr." },
  { id: "900000022171", name: "Schloss Charlottenburg" },
  { id: "900000066152", name: "Schlossparktheater" },
  { id: "900000180007", name: "Schloßplatz Köpenick" },
  { id: "900000025101", name: "Scholzplatz" },
  { id: "900000110007", name: "Schönhauser Allee/Bornholmer Str." },
  { id: "900000050255", name: "Schützallee" },
  { id: "900000161515", name: "Schwarzmeerstr." },
  { id: "900000037154", name: "Seegefelder Weg/Klosterbuschweg" },
  { id: "900000009105", name: "Seestr./Amrumer Str." },
  { id: "900000002255", name: "Seydlitzstr." },
  { id: "900000063402", name: "Siemensstr./Halskestr." },
  { id: "900000195501", name: "Siriusstr." },
  { id: "900000074272", name: "Skarbinastr." },
  { id: "900000191501", name: "Sonnenallee/Baumschulenstr." },
  { id: "900000075103", name: "Sonnenallee/Pannierstr." },
  { id: "900000020204", name: "Sophie-Charlotten-Str." },
  { id: "900000190502", name: "Sowjetisches Ehrenmal" },
  { id: "900000100515", name: "Spandauer Str./Marienkirche" },
  { id: "900000052302", name: "Spanische Allee/Potsdamer Chaussee" },
  { id: "900000140517", name: "Stadion Buschallee/Hansastr." },
  { id: "900000067251", name: "Stadtbad Lankwitz" },
  { id: "900000110032", name: "Stedingerweg" },
  { id: "900000063301", name: "Steglitzer Damm/Bismarckstr." },
  { id: "900000063401", name: "Steglitzer Damm/Halskestr." },
  { id: "900000053303", name: "Steinstücken" },
  { id: "900000002203", name: "Stendaler Str." },
  { id: "900000194007", name: "Sterndamm/Königsheideweg" },
  { id: "900000063351", name: "Stindestr." },
  { id: "900000194003", name: "Stubenrauchstr./Springbornstr." },
  { id: "900000081202", name: "Stuthirtenweg" },
  { id: "900000176527", name: "Summter Str." },
  { id: "900000048158", name: "Taubertstr." },
  { id: "900000070401", name: "Tauernallee/Säntisstr." },
  { id: "900000074253", name: "Taunusstr." },
  { id: "900000032301", name: "Teltower Str." },
  { id: "900000066254", name: "Thuner Platz" },
  { id: "900000096362", name: "Tiefenseer Str." },
  { id: "900000094181", name: "Titiseestr." },
  { id: "900000175539", name: "Tollensestr." },
  { id: "900000120002", name: "Tunnelstr." },
  { id: "900000002102", name: "Turmstr./Beusselstr." },
  { id: "900000002205", name: "Turmstr./Lübecker Str." },
  { id: "900000002206", name: "Turmstr./Rathenower Str." },
  { id: "900000132025", name: "Uhlandstr./Wilhelmsruher Damm" },
  { id: "900000066103", name: "Unter den Eichen/Drakestr." },
  { id: "900000100513", name: "Unter den Linden/Friedrichstr." },
  { id: "900000016154", name: "Urbanstr./Baerwaldstr." },
  { id: "900000195502", name: "Venusstr." },
  { id: "900000152502", name: "Vincent-van-Gogh-Str." },
  { id: "900000010251", name: "Virchow-Klinikum" },
  { id: "900000094102", name: "Waidmannsluster Damm/Oraniendamm" },
  { id: "900000027306", name: "Waldkrankenhaus" },
  { id: "900000073281", name: "Waldsassener Str." },
  { id: "900000083303", name: "Waltersdorfer Chaussee/Ostburger Weg" },
  { id: "900000196003", name: "Waltersdorfer Str." },
  { id: "900000194504", name: "Walther-Nernst-Str." },
  { id: "900000053291", name: "Wannseebrücke" },
  { id: "900000186002", name: "Wassersportallee" },
  { id: "900000027304", name: "Wasserwerk Spandau" },
  { id: "900000195013", name: "Wegedornstr." },
  { id: "900000079272", name: "Weisestr." },
  { id: "900000152003", name: "Welsestr." },
  { id: "900000018103", name: "Weltlingerbrücke" },
  { id: "900000180015", name: "Wendenschloß" },
  { id: "900000027259", name: "Werderstr." },
  { id: "900000073201", name: "Weskammstr." },
  { id: "900000027453", name: "Westerwaldstr." },
  { id: "900000045103", name: "Wiesbadener Str./Laubacher Str." },
  { id: "900000181001", name: "Wilhelminenhofstr./Edisonstr." },
  { id: "900000053205", name: "Wilhelmplatz" },
  { id: "900000096307", name: "Wilhelmsruher Damm" },
  { id: "900000096305", name: "Wilhelmsruher Damm/Treuenbrietzener Str." },
  { id: "900000002202", name: "Wilsnacker Str." },
  { id: "900000050281", name: "Winfriedstr." },
  { id: "900000064271", name: "Wismarer Str." },
  { id: "900000120518", name: "Wismarplatz" },
  { id: "900000096402", name: "Wittenau Kirche" },
  { id: "900000002151", name: "Wittstocker Str." },
  { id: "900000029201", name: "Wröhmännerpark" },
  { id: "900000074293", name: "Wünsdorfer Str./Blohmstr." },
  { id: "900000017105", name: "Yorckstr./Großbeerenstr." },
  { id: "900000049241", name: "Zehlendorf Eiche" },
  { id: "900000029102", name: "Zeppelinstr./Seegefelder Str." },
  { id: "900000031102", name: "Ziegelhof" },
  { id: "900000151003", name: "Zingster Str." },
  { id: "900000185501", name: "Zum Seeblick" },
  { id: "900000210641", name: "Dallgow-Döberitz, Havelpark" },
  { id: "900000230032", name: "Potsdam, Johannes-Kepler-Platz" },
  {
    id: "900000230011",
    name: "Potsdam, Neuendorfer Str./Mendelssohn-Bartholdy-Str."
  },
  { id: "900000230400", name: "Potsdam, Stern-Center/Nuthestr." },
  { id: "900000200029", name: "Schildow, Kirche" },
  { id: "900000260510", name: "Schönefeld, Waltersdorfer Chaussee" },
  { id: "900000260516", name: "Schönefeld, Wehrmathen" },
  { id: "900000310511", name: "Schöneiche, Goethepark" },
  { id: "900000220077", name: "Teltow, Bürgertreff" },
  { id: "900000220072", name: "Teltow, Jahnstr." },
  { id: "900000220079", name: "Teltow, Rammrath-Brücke" },
  { id: "900000220073", name: "Teltow, Ruhlsdorfer Platz" },
  { id: "900000220121", name: "Teltow, Striewitzweg" },
  { id: "900000220070", name: "Teltow, Warthestr." },
  { id: "900000220068", name: "Teltow, Zehlendorfer Str." },
  { id: "900000320023", name: "Waldesruh, Mahlsdorfer Allee" }
];

export default stops;
