const stops = [
  { id: "900000160541", name: "Josef-Orlopp-Str./Vulkanstr." },
  { id: "900000160509", name: "Bernhard-Bästlein-Str." },
  { id: "900000160014", name: "Möllendorffstr./Storkower Str." },
  { id: "900000193002", name: "S Adlershof" },
  { id: "900000170004", name: "S Ahrensfelde" },
  { id: "900000100003", name: "S+U Alexanderplatz" },
  { id: "900000195510", name: "S+U Altglienicke" },
  { id: "900000085105", name: "S Alt-Reinickendorf" },
  { id: "900000012101", name: "S Anhalter Bahnhof" },
  { id: "900000068301", name: "S Attilastr." },
  { id: "900000023202", name: "U Augsburger Str." },
  { id: "900000230000", name: "S Babelsberg" },
  { id: "900000191001", name: "S Baumschulenweg" },
  { id: "900000055102", name: "U Bayerischer Platz" },
  { id: "900000003102", name: "S Bellevue" },
  { id: "900000200011", name: "S Bergfelde" },
  { id: "900000350160", name: "S Bernau" },
  { id: "900000350161", name: "S Bernau-Friedenstal" },
  { id: "900000160002", name: "S Betriebsbahnhof Rummelsburg" },
  { id: "900000193001", name: "S Betriebsbahnhof Schöneweide" },
  { id: "900000020202", name: "S Beusselstr." },
  { id: "900000171001", name: "S Biesdorf" },
  { id: "900000320026", name: "S Birkenstein" },
  { id: "900000200008", name: "S Birkenwerder" },
  { id: "900000024201", name: "U Bismarckstr." },
  { id: "900000142001", name: "S Blankenburg" },
  { id: "900000245027", name: "S Blankenfelde (TF)" },
  { id: "900000200007", name: "S Borgsdorf" },
  { id: "900000110011", name: "S Bornholmer Str." },
  { id: "900000066102", name: "S Botanischer Garten" },
  { id: "900000100025", name: "S+U Brandenburger Tor" },
  { id: "900000051202", name: "U Breitenbachplatz" },
  { id: "900000135001", name: "S Buch" },
  { id: "900000072101", name: "S Buckower Chaussee" },
  { id: "900000056104", name: "U Bülowstr." },
  { id: "900000044202", name: "S+U Bundesplatz" },
  { id: "900000003254", name: "U Bundestag" },
  { id: "900000024101", name: "S Charlottenburg" },
  { id: "900000051303", name: "U Dahlem-Dorf" },
  { id: "900000022201", name: "U Deutsche Oper" },
  { id: "900000110006", name: "U Eberswalder Str." },
  { id: "900000096405", name: "S Eichborndamm" },
  { id: "900000260004", name: "S Eichwalde" },
  { id: "900000310004", name: "S Erkner" },
  { id: "900000023101", name: "U Ernst-Reuter-Platz" },
  { id: "900000041101", name: "U Fehrbelliner Platz" },
  { id: "900000063101", name: "S Feuerbachstr." },
  { id: "900000260005", name: "S Flughafen Berlin-Schönefeld" },
  { id: "900000120001", name: "S+U Frankfurter Allee" },
  { id: "900000320006", name: "S Fredersdorf" },
  { id: "900000051201", name: "U Freie Universität (Thielplatz)" },
  { id: "900000060101", name: "S Friedenau" },
  { id: "900000171002", name: "S Friedrichsfelde Ost" },
  { id: "900000182002", name: "S Friedrichshagen" },
  { id: "900000100001", name: "S+U Friedrichstr." },
  { id: "900000092201", name: "S Frohnau" },
  { id: "900000152002", name: "S Gehrenseestr." },
  { id: "900000007102", name: "S+U Gesundbrunnen" },
  { id: "900000017103", name: "U Gleisdreieck" },
  { id: "900000014101", name: "U Görlitzer Bahnhof" },
  { id: "900000110003", name: "S Greifswalder Str." },
  { id: "900000230003", name: "S Griebnitzsee" },
  { id: "900000186001", name: "S Grünau" },
  { id: "900000196001", name: "S Grünbergallee" },
  { id: "900000048101", name: "S Grunewald" },
  { id: "900000100002", name: "S Hackescher Markt" },
  { id: "900000040101", name: "S Halensee" },
  { id: "900000012103", name: "U Hallesches Tor" },
  { id: "900000003201", name: "S+U Hauptbahnhof" },
  { id: "900000100012", name: "U Hausvogteiplatz" },
  { id: "900000026105", name: "S Heerstr." },
  { id: "900000320003", name: "S Hegermühle" },
  { id: "900000045102", name: "S+U Heidelberger Platz" },
  { id: "900000091203", name: "S Heiligensee" },
  { id: "900000200000", name: "S Hennigsdorf" },
  { id: "900000079221", name: "S+U Hermannstr." },
  { id: "900000093201", name: "S Hermsdorf" },
  { id: "900000182001", name: "S Hirschgarten" },
  { id: "900000200009", name: "S Hohen Neuendorf" },
  { id: "900000152001", name: "S Hohenschönhausen" },
  { id: "900000044101", name: "S Hohenzollerndamm" },
  { id: "900000043101", name: "U Hohenzollernplatz" },
  { id: "900000320008", name: "S Hoppegarten" },
  { id: "900000008101", name: "S Humboldthain" },
  { id: "900000054105", name: "S+U Innsbrucker Platz" },
  { id: "900000100004", name: "S+U Jannowitzbrücke" },
  { id: "900000057104", name: "S Julius-Leber-Brücke" },
  { id: "900000020201", name: "S+U Jungfernheide" },
  { id: "900000026202", name: "U Kaiserdamm" },
  { id: "900000096458", name: "S+U Karl-Bonhoeffer-Nervenklinik" },
  { id: "900000162001", name: "S Karlshorst" },
  { id: "900000143001", name: "S Karow" },
  { id: "900000175002", name: "S Kaulsdorf" },
  { id: "900000100015", name: "U Klosterstr." },
  { id: "900000077155", name: "S Köllnische Heide" },
  { id: "900000260001", name: "S Königs Wusterhausen" },
  { id: "900000180001", name: "S Köpenick" },
  { id: "900000013102", name: "U Kottbusser Tor" },
  { id: "900000050201", name: "U Krumme Lanke" },
  { id: "900000023203", name: "U Kurfürstendamm" },
  { id: "900000005201", name: "U Kurfürstenstr." },
  { id: "900000110004", name: "S Landsberger Allee" },
  { id: "900000067221", name: "S Lankwitz" },
  { id: "900000200006", name: "S Lehnitz" },
  { id: "900000160004", name: "S+U Lichtenberg" },
  { id: "900000074201", name: "S Lichtenrade" },
  { id: "900000064301", name: "S Lichterfelde Ost" },
  { id: "900000064201", name: "S Lichterfelde Süd" },
  { id: "900000066101", name: "S Lichterfelde West" },
  { id: "900000245028", name: "S Mahlow" },
  { id: "900000176001", name: "S Mahlsdorf" },
  { id: "900000073101", name: "S Marienfelde" },
  { id: "900000100014", name: "U Märkisches Museum" },
  { id: "900000170001", name: "S Marzahn" },
  { id: "900000170003", name: "S Mehrower Allee" },
  { id: "900000005252", name: "U Mendelssohn-Bartholdy-Park" },
  { id: "900000024106", name: "S Messe Nord/ICC" },
  { id: "900000025423", name: "S Messe Süd" },
  { id: "900000050301", name: "S Mexikoplatz" },
  { id: "900000017104", name: "U Möckernbrücke" },
  { id: "900000100010", name: "U Mohrenstr." },
  { id: "900000200013", name: "S Mühlenbeck-Mönchmühle" },
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
  { id: "900000064256", name: "S Osdorfer Str." },
  { id: "900000051301", name: "U Oskar-Helene-Heim" },
  { id: "900000120005", name: "S Ostbahnhof" },
  { id: "900000120003", name: "S Ostkreuz" },
  { id: "900000130002", name: "S+U Pankow" },
  { id: "900000130001", name: "S Pankow-Heinersdorf" },
  { id: "900000320005", name: "S Petershagen Nord" },
  { id: "900000025424", name: "S Pichelsberg" },
  { id: "900000170005", name: "S Poelchaustr." },
  { id: "900000191002", name: "S Plänterwald" },
  { id: "900000051302", name: "U Podbielskiallee" },
  { id: "900000100020", name: "S+U Potsdamer Platz" },
  { id: "900000230999", name: "S Potsdam Hauptbahnhof" },
  { id: "900000110002", name: "S Prenzlauer Allee" },
  { id: "900000058102", name: "S Priesterweg" },
  { id: "900000013103", name: "U Prinzenstr." },
  { id: "900000183001", name: "S Rahnsdorf" },
  { id: "900000170002", name: "S Raoul-Wallenberg-Str." },
  { id: "900000054101", name: "U Rathaus Schöneberg" },
  { id: "900000029302", name: "S+U Rathaus Spandau" },
  { id: "900000062202", name: "S+U Rathaus Steglitz" },
  { id: "900000350162", name: "S Röntgental" },
  { id: "900000100016", name: "U Rosa-Luxemburg-Platz" },
  { id: "900000045101", name: "U Rüdesheimer Platz" },
  { id: "900000025202", name: "U Ruhleben" },
  { id: "900000160001", name: "S Rummelsburg" },
  { id: "900000024203", name: "S Savignyplatz" },
  { id: "900000074202", name: "S Schichauweg" },
  { id: "900000050355", name: "S Schlachtensee" },
  { id: "900000014102", name: "U Schlesisches Tor" },
  { id: "900000054104", name: "S Schöneberg" },
  { id: "900000192001", name: "S Schöneweide" },
  { id: "900000200012", name: "S Schönfließ" },
  { id: "900000110001", name: "S+U Schönhauser Allee" },
  { id: "900000085201", name: "S Schönholz" },
  { id: "900000091205", name: "S Schulzendorf" },
  { id: "900000110005", name: "U Senefelderplatz" },
  { id: "900000077106", name: "S Sonnenallee" },
  { id: "900000022101", name: "U Sophie-Charlotte-Platz" },
  { id: "900000042101", name: "U Spichernstr." },
  { id: "900000180003", name: "S Spindlersfeld" },
  { id: "900000100013", name: "U Spittelmarkt" },
  { id: "900000171003", name: "S Springpfuhl" },
  { id: "900000100011", name: "U Stadtmitte" },
  { id: "900000110012", name: "S Storkower Str." },
  { id: "900000320004", name: "S Strausberg" },
  { id: "900000320001", name: "S Strausberg Nord" },
  { id: "900000320002", name: "S Strausberg Stadt" },
  { id: "900000030202", name: "S Stresow" },
  { id: "900000063452", name: "S Südende" },
  { id: "900000058101", name: "S Südkreuz" },
  { id: "900000049202", name: "S Sundgauer Str." },
  { id: "900000089303", name: "S Tegel" },
  { id: "900000220114", name: "S Teltow Stadt" },
  { id: "900000068201", name: "S Tempelhof" },
  { id: "900000026201", name: "U Theodor-Heuss-Platz" },
  { id: "900000003103", name: "S Tiergarten" },
  { id: "900000190001", name: "S Treptower Park" },
  { id: "900000023301", name: "U Uhlandstr." },
  { id: "900000055101", name: "U Viktoria-Luise-Platz" },
  { id: "900000130011", name: "U Vinetastr." },
  { id: "900000094101", name: "S Waidmannslust" },
  { id: "900000053301", name: "S Wannsee" },
  { id: "900000120004", name: "S+U Warschauer Str." },
  { id: "900000151001", name: "S Wartenberg" },
  { id: "900000009104", name: "S+U Wedding" },
  { id: "900000026207", name: "S Westend" },
  { id: "900000001201", name: "S+U Westhafen" },
  { id: "900000024102", name: "S Westkreuz" },
  { id: "900000260002", name: "S Wildau" },
  { id: "900000183002", name: "S Wilhelmshagen" },
  { id: "900000084101", name: "S Wilhelmsruh" },
  { id: "900000096101", name: "S+U Wittenau" },
  { id: "900000056101", name: "U Wittenbergplatz" },
  { id: "900000130003", name: "S Wollankstr." },
  { id: "900000175001", name: "S+U Wuhletal" },
  { id: "900000180002", name: "S Wuhlheide" },
  { id: "900000057103", name: "S+U Yorckstr." },
  { id: "900000049201", name: "S Zehlendorf" },
  { id: "900000350163", name: "S Zepernick" },
  { id: "900000260003", name: "S Zeuthen" },
  { id: "900000023201", name: "S+U Zoologischer Garten" }
];

export default stops;