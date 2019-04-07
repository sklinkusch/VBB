const stops = [
  { id: "900000160541", name: "Josef-Orlopp-Str./Vulkanstr." },
  { id: "900000023302", name: "U Adenauerplatz" },
  { id: "900000193002", name: "S Adlershof" },
  { id: "900000011102", name: "U Afrikanische Str." },
  { id: "900000170004", name: "S Ahrensfelde" },
  { id: "900000037168", name: "Bf Albrechtshof" },
  { id: "900000100003", name: "S+U Alexanderplatz" },
  { id: "900000195510", name: "S+U Altglienicke" },
  { id: "900000070301", name: "U Alt-Mariendorf" },
  { id: "900000085105", name: "S Alt-Reinickendorf" },
  { id: "900000029301", name: "U Altstadt Spandau" },
  { id: "900000089301", name: "U Alt-Tegel" },
  { id: "900000068202", name: "U Alt-Tempelhof" },
  { id: "900000009101", name: "U Amrumer Str." },
  { id: "900000012101", name: "S Anhalter Bahnhof" },
  { id: "900000068301", name: "S Attilastr." },
  { id: "900000023202", name: "U Augsburger Str." },
  { id: "900000230000", name: "S Babelsberg" },
  { id: "900000191001", name: "S Baumschulenweg" },
  { id: "900000055102", name: "U Bayerischer Platz" },
  { id: "900000003102", name: "S Bellevue" },
  { id: "900000200011", name: "S Bergfelde" },
  { id: "900000044201", name: "U Berliner Str." },
  { id: "900000350160", name: "S Bernau" },
  { id: "900000007110", name: "U Bernauer Str." },
  { id: "900000350161", name: "S Bernau-Friedenstal" },
  { id: "900000160002", name: "S Betriebsbahnhof Rummelsburg" },
  { id: "900000193001", name: "S Betriebsbahnhof Schöneweide" },
  { id: "900000020202", name: "S Beusselstr." },
  { id: "900000171001", name: "S Biesdorf" },
  { id: "900000171005", name: "U Biesdorf-Süd" },
  { id: "900000320026", name: "S Birkenstein" },
  { id: "900000002201", name: "U Birkenstr." },
  { id: "900000200008", name: "S Birkenwerder" },
  { id: "900000024201", name: "U Bismarckstr." },
  { id: "900000142001", name: "S Blankenburg" },
  { id: "900000245027", name: "S Blankenfelde (TF)" },
  { id: "900000080201", name: "U Blaschkoallee" },
  { id: "900000041102", name: "U Blissestr." },
  { id: "900000079202", name: "U Boddinstr." },
  { id: "900000200007", name: "S Borgsdorf" },
  { id: "900000110011", name: "S Bornholmer Str." },
  { id: "900000088202", name: "U Borsigwerke" },
  { id: "900000066102", name: "S Botanischer Garten" },
  { id: "900000100025", name: "S+U Brandenburger Tor" },
  { id: "900000051202", name: "U Breitenbachplatz" },
  { id: "900000080402", name: "U Britz-Süd" },
  { id: "900000135001", name: "S Buch" },
  { id: "900000072101", name: "S Buckower Chaussee" },
  { id: "900000056104", name: "U Bülowstr." },
  { id: "900000044202", name: "S+U Bundesplatz" },
  { id: "900000003254", name: "U Bundestag" },
  { id: "900000024101", name: "S Charlottenburg" },
  { id: "900000175006", name: "U Cottbusser Platz" },
  { id: "900000051303", name: "U Dahlem-Dorf" },
  { id: "900000022201", name: "U Deutsche Oper" },
  { id: "900000110006", name: "U Eberswalder Str." },
  { id: "900000096405", name: "S Eichborndamm" },
  { id: "900000260004", name: "S Eichwalde" },
  { id: "900000054103", name: "U Eisenacher Str." },
  { id: "900000171006", name: "U Elsterwerdaer Platz" },
  { id: "900000310004", name: "S Erkner" },
  { id: "900000023101", name: "U Ernst-Reuter-Platz" },
  { id: "900000041101", name: "U Fehrbelliner Platz" },
  { id: "900000063101", name: "S Feuerbachstr." },
  { id: "900000260005", name: "S Flughafen Berlin-Schönefeld" },
  { id: "900000120001", name: "S+U Frankfurter Allee" },
  { id: "900000120008", name: "U Frankfurter Tor" },
  { id: "900000085202", name: "U Franz-Neumann-Platz (Am Schäfersee)" },
  { id: "900000100027", name: "U Französische Str." },
  { id: "900000320006", name: "S Fredersdorf" },
  { id: "900000051201", name: "U Freie Universität (Thielplatz)" },
  { id: "900000060101", name: "S Friedenau" },
  { id: "900000161512", name: "U Friedrichsfelde" },
  { id: "900000171002", name: "S Friedrichsfelde Ost" },
  { id: "900000182002", name: "S Friedrichshagen" },
  { id: "900000100001", name: "S+U Friedrichstr." },
  { id: "900000061102", name: "U Friedrich-Wilhelm-Platz" },
  { id: "900000092201", name: "S Frohnau" },
  { id: "900000152002", name: "S Gehrenseestr." },
  { id: "900000007102", name: "S+U Gesundbrunnen" },
  { id: "900000017103", name: "U Gleisdreieck" },
  { id: "900000016101", name: "U Gneisenaustr." },
  { id: "900000014101", name: "U Görlitzer Bahnhof" },
  { id: "900000110003", name: "S Greifswalder Str." },
  { id: "900000080202", name: "U Grenzallee" },
  { id: "900000230003", name: "S Griebnitzsee" },
  { id: "900000186001", name: "S Grünau" },
  { id: "900000196001", name: "S Grünbergallee" },
  { id: "900000048101", name: "S Grunewald" },
  { id: "900000043201", name: "U Güntzelstr." },
  { id: "900000100002", name: "S Hackescher Markt" },
  { id: "900000018102", name: "U Halemweg" },
  { id: "900000040101", name: "S Halensee" },
  { id: "900000012103", name: "U Hallesches Tor" },
  { id: "900000003101", name: "U Hansaplatz" },
  { id: "900000034102", name: "U Haselhorst" },
  { id: "900000003201", name: "S+U Hauptbahnhof" },
  { id: "900000100012", name: "U Hausvogteiplatz" },
  { id: "900000026105", name: "S Heerstr." },
  { id: "900000320003", name: "S Hegermühle" },
  { id: "900000045102", name: "S+U Heidelberger Platz" },
  { id: "900000091203", name: "S Heiligensee" },
  { id: "900000100008", name: "U Heinrich-Heine-Str." },
  { id: "900000175007", name: "U Hellersdorf" },
  { id: "900000200000", name: "S Hennigsdorf" },
  { id: "900000078101", name: "U Hermannplatz" },
  { id: "900000079221", name: "S+U Hermannstr." },
  { id: "900000093201", name: "S Hermsdorf" },
  { id: "900000182001", name: "S Hirschgarten" },
  { id: "900000200009", name: "S Hohen Neuendorf" },
  { id: "900000152001", name: "S Hohenschönhausen" },
  { id: "900000044101", name: "S Hohenzollerndamm" },
  { id: "900000043101", name: "U Hohenzollernplatz" },
  { id: "900000088201", name: "U Holzhauser Str." },
  { id: "900000175010", name: "U Hönow" },
  { id: "900000320008", name: "S Hoppegarten" },
  { id: "900000008101", name: "S Humboldthain" },
  { id: "900000054105", name: "S+U Innsbrucker Platz" },
  { id: "900000018101", name: "U Jakob-Kaiser-Platz" },
  { id: "900000100004", name: "S+U Jannowitzbrücke" },
  { id: "900000082202", name: "U Johannisthaler Chaussee" },
  { id: "900000057104", name: "S Julius-Leber-Brücke" },
  { id: "900000020201", name: "S+U Jungfernheide" },
  { id: "900000026202", name: "U Kaiserdamm" },
  { id: "900000068302", name: "U Kaiserin-Augusta-Str." },
  { id: "900000096458", name: "S+U Karl-Bonhoeffer-Nervenklinik" },
  { id: "900000078103", name: "U Karl-Marx-Str." },
  { id: "900000162001", name: "S Karlshorst" },
  { id: "900000143001", name: "S Karow" },
  { id: "900000175002", name: "S Kaulsdorf" },
  { id: "900000175004", name: "U Kaulsdorf-Nord" },
  { id: "900000175005", name: "U Kienberg (Gärten der Welt)" },
  { id: "900000054102", name: "U Kleistpark" },
  { id: "900000100015", name: "U Klosterstr." },
  { id: "900000012102", name: "U Kochstr./Checkpoint Charlie" },
  { id: "900000077155", name: "S Köllnische Heide" },
  { id: "900000260001", name: "S Königs Wusterhausen" },
  { id: "900000041201", name: "U Konstanzer Str." },
  { id: "900000180001", name: "S Köpenick" },
  { id: "900000013102", name: "U Kottbusser Tor" },
  { id: "900000050201", name: "U Krumme Lanke" },
  { id: "900000023203", name: "U Kurfürstendamm" },
  { id: "900000005201", name: "U Kurfürstenstr." },
  { id: "900000086102", name: "U Kurt-Schumacher-Platz" },
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
  { id: "900000170515", name: "Adersleber Weg" },
  { id: "900000170006", name: "Ahrensfelde/Stadtgrenze" },
  { id: "900000170019", name: "Allee der Kosmonauten/Poelchaustr." },
  { id: "900000171008", name: "Allee der Kosmonauten/Rhinstr." },
  { id: "900000081201", name: "Alt-Buckow" },
  { id: "900000181513", name: "Alte Försterei" },
  { id: "900000182005", name: "Altes Wasserwerk" },
  { id: "900000161004", name: "Alt-Friedrichsfelde/Rhinstr." },
  { id: "900000170516", name: "Alt-Marzahn" },
  { id: "900000032402", name: "Alt-Pichelsdorf" },
  { id: "900000185001", name: "Alt-Schmöckwitz" },
  { id: "900000100038", name: "Am Kupfergraben" },
  { id: "900000096406", name: "Am Nordgraben/Oranienburger Str." },
  { id: "900000024104", name: "Amtsgerichtsplatz" },
  { id: "900000141504", name: "Am Wasserturm" },
  { id: "900000056105", name: "An der Urania" },
  { id: "900000140011", name: "Antonplatz" },
  { id: "900000180008", name: "Bahnhofstr./Lindenstr." },
  { id: "900000180009", name: "Bahnhofstr./Seelenbinderstr." },
  { id: "900000170011", name: "Barnimplatz" },
  { id: "900000140006", name: "Berliner Allee/Indira-Gandhi-Str." },
  { id: "900000140013", name: "Berliner Allee/Rennbahnstr." },
  { id: "900000120516", name: "Bersarinplatz" },
  { id: "900000150518", name: "Betriebshof Indira-Gandhi-Str." },
  { id: "900000180514", name: "Betriebshof Köpenick" },
  { id: "900000160522", name: "Betriebshof Lichtenberg" },
  { id: "900000170010", name: "Betriebshof Marzahn" },
  { id: "900000134500", name: "Blankenfelder Str." },
  { id: "900000171517", name: "Boschpoler Str." },
  { id: "900000120013", name: "Boxhagener Str./Holteistr." },
  { id: "900000180512", name: "Brandenburgplatz" },
  { id: "900000140519", name: "Buschallee" },
  { id: "900000140007", name: "Buschallee/Hansastr." },
  { id: "900000066407", name: "Drakestr./Ringstr." },
  { id: "900000152007", name: "Falkenberg" },
  { id: "900000152006", name: "Falkenberger Chaussee/Prendener Str." },
  { id: "900000025301", name: "Flatowallee/Olympiastadion" },
  { id: "900000181003", name: "Freizeit- und Erholungszentrum" },
  { id: "900000032106", name: "Gatower Str./Heerstr." },
  { id: "900000150504", name: "Gehrenseestr." },
  { id: "900000140014", name: "Giersstr." },
  { id: "900000020281", name: "Goerdelersteg" },
  { id: "900000066401", name: "Goerzallee/Drakestr." },
  { id: "900000131528", name: "Grabbeallee/Pastor-Niemöller-Platz" },
  { id: "900000110020", name: "Greifswalder Str./Danziger Str." },
  { id: "900000110016", name: "Greifswalder Str./Ostseestr." },
  { id: "900000120014", name: "Grünberger Str./Warschauer Str." },
  { id: "900000134511", name: "Guyotstr." },
  { id: "900000130005", name: "Hadlichstr." },
  { id: "900000194012", name: "Haeckelstr." },
  { id: "900000048107", name: "Hagenplatz" },
  { id: "900000037203", name: "Hahneberg" },
  { id: "900000150002", name: "Hansastr./Malchower Weg" },
  { id: "900000132010", name: "Hauptstr./Friedrich-Engels-Str." },
  { id: "900000150020", name: "Hauptstr./Rhinstr." },
  { id: "900000026251", name: "Haus des Rundfunks" },
  { id: "900000037207", name: "Heerstr./Magistratsweg" },
  { id: "900000037211", name: "Heerstr./Nennhauser Damm" },
  { id: "900000032102", name: "Heerstr./Wilhelmstr." },
  { id: "900000141001", name: "Heinersdorf" },
  { id: "900000141002", name: "Heinersdorf Kirche" },
  { id: "900000131527", name: "Hermann-Hesse-Str./Waldstr." },
  { id: "900000004181", name: "Hertzallee" },
  { id: "900000160012", name: "Herzbergstr./Siegfriedstr." },
  { id: "900000180016", name: "Hirtestr." },
  { id: "900000150011", name: "Hohenschönhauser Str./Weißenseer Weg" },
  { id: "900000134509", name: "Hugenottenplatz" },
  { id: "900000176512", name: "Hultschiner Damm/Seestr." },
  { id: "900000170517", name: "Jan-Petersen-Str." },
  { id: "900000064352", name: "Jungfernstieg" },
  { id: "900000024108", name: "Kaiser-Friedrich-Str./Kantstr." },
  { id: "900000024207", name: "Kantstr./Leibnizstr." },
  { id: "900000194016", name: "Karl-Ziegler-Str." },
  { id: "900000110021", name: "Kniprodestr./Danziger Str." },
  { id: "900000180012", name: "Köllnischer Platz" },
  { id: "900000180022", name: "Krankenhaus Köpenick/Südseite" },
  { id: "900000170013", name: "Landsberger Allee/Blumberger Damm" },
  { id: "900000120016", name: "Landsberger Allee/Petersburger Str." },
  { id: "900000171011", name: "Landsberger Allee/Rhinstr." },
  { id: "900000082205", name: "Lipschitzallee/Fritz-Erler-Allee" },
  { id: "900000160017", name: "Loeperplatz" },
  { id: "900000051251", name: "Löhleinstr." },
  { id: "900000011201", name: "Louise-Schroeder-Platz" },
  { id: "900000074101", name: "Mariendorfer Damm/Buckower Chaussee" },
  { id: "900000083202", name: "Massantebrücke" },
  { id: "900000026208", name: "Masurenallee/ZOB" },
  { id: "900000160014", name: "Möllendorffstr./Storkower Str." },
  { id: "900000100040", name: "Mollstr./Otto-Braun-Str." },
  { id: "900000110022", name: "Mollstr./Prenzlauer Allee" },
  { id: "900000180014", name: "Müggelbergallee" },
  { id: "900000180005", name: "Müggelheimer Str./Wendenschloßstr." },
  { id: "900000073241", name: "Nahmitzer Damm/Marienfelder Allee" },
  { id: "900000083181", name: "Neuköllner Str./Zwickauer Damm" },
  { id: "900000131006", name: "Nordend" },
  { id: "900000023304", name: "Olivaer Platz" },
  { id: "900000086105", name: "Ollenhauerstr./Lindauer Allee" },
  { id: "900000009204", name: "Osloer Str./Prinzenallee" },
  { id: "900000064101", name: "Ostpreußendamm/Königsberger Str." },
  { id: "900000130013", name: "Pankow Kirche" },
  { id: "900000140002", name: "Pasedagplatz" },
  { id: "900000134503", name: "Pasewalker Str./Blankenburger Weg" },
  { id: "900000131005", name: "Pastor-Niemöller-Platz" },
  { id: "900000120019", name: "Platz der Vereinten Nationen" },
  { id: "900000110017", name: "Prenzlauer Allee/Danziger Str." },
  { id: "900000110013", name: "Prenzlauer Allee/Ostseestr." },
  { id: "900000141507", name: "Prenzlauer Promenade/Am Steinberg" },
  { id: "900000151006", name: "Prerower Platz" },
  { id: "900000081101", name: "Quarzweg/Marienfelder Chaussee" },
  { id: "900000183003", name: "Rahnsdorf/Waldschänke" },
  { id: "900000176525", name: "Rahnsdorfer Str." },
  { id: "900000048103", name: "Rathenauplatz" },
  { id: "900000037204", name: "Reimerweg" },
  { id: "900000120021", name: "Revaler Str." },
  { id: "900000175013", name: "Riesaer Str." },
  { id: "900000175014", name: "Riesaer Str./Louis-Lewin-Str." },
  { id: "900000160010", name: "Roederplatz" },
  { id: "900000132014", name: "Rosenthal Nord" },
  { id: "900000037202", name: "Sandstr." },
  { id: "900000120540", name: "Scharnweberstr./Weichselstr." },
  { id: "900000131001", name: "Schillerstr." },
  { id: "900000025101", name: "Scholzplatz" },
  { id: "900000110007", name: "Schönhauser Allee/Bornholmer Str." },
  { id: "900000009105", name: "Seestr./Amrumer Str." },
  { id: "900000100515", name: "Spandauer Str./Marienkirche" },
  { id: "900000140517", name: "Stadion Buschallee/Hansastr." },
  { id: "900000048158", name: "Taubertstr." },
  { id: "900000002102", name: "Turmstr./Beusselstr." },
  { id: "900000132025", name: "Uhlandstr./Wilhelmsruher Damm" },
  { id: "900000066103", name: "Unter den Eichen/Drakestr." },
  { id: "900000010251", name: "Virchow-Klinikum" },
  { id: "900000186002", name: "Wassersportallee" },
  { id: "900000180015", name: "Wendenschloß" },
  { id: "900000073201", name: "Weskammstr." },
  { id: "900000181001", name: "Wilhelminenhofstr./Edisonstr." },
  { id: "900000096305", name: "Wilhelmsruher Damm/Treuenbrietzener Str." },
  { id: "900000120518", name: "Wismarplatz" },
  { id: "900000151003", name: "Zingster Str." },
  { id: "900000185501", name: "Zum Seeblick" }
];

export default stops;
