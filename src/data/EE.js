import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Ahlsdorf,") ||
    stop.name === "Hohenkuhnsdorf" ||
    stop.name === "Altbelgern" ||
    stop.name === "Altenau (EE)" ||
    stop.name.startsWith("Arenzhain,") ||
    stop.name === "Arnsnesta" ||
    stop.name.startsWith("Babben,") ||
    stop.name === "Bad Erna" ||
    stop.name.startsWith("Bad Liebenwerda") ||
    stop.name.startsWith("Bahnsdorf (EE)") ||
    stop.name.startsWith("Beiersdorf (EE)") ||
    stop.name.startsWith("Bernsdorf,") ||
    stop.name.startsWith("Betten,") ||
    stop.name.startsWith("Beutersitz,") ||
    stop.name === "Beyern" ||
    stop.name === "Bicking" ||
    stop.name.startsWith("Birkwalde,") ||
    stop.name.startsWith("Bomsdorf,") ||
    stop.name.startsWith("Bönitz,") ||
    stop.name.startsWith("Borken (EE)") ||
    stop.name.startsWith("Brandis,") ||
    stop.name.startsWith("Horst (EE)") ||
    stop.name === "Breitenau" ||
    stop.name.startsWith("Brenitz,") ||
    stop.name === "Brottewitz" ||
    stop.name.startsWith("Buchhain,") ||
    stop.name.startsWith("Buckau (EE)") ||
    stop.name === "Burxdorf" ||
    stop.name === "Buschmühle" ||
    stop.name.startsWith("Buschmühle,") ||
    stop.name.startsWith("Crinitz,") ||
    stop.name === "Dabern" ||
    stop.name.startsWith("Doberlug (EE)") ||
    stop.name.startsWith("Doberlug-Kirchhain,") ||
    stop.name.startsWith("Dobra,") ||
    stop.name.startsWith("Dollenchen,") ||
    stop.name === "Döllingen" ||
    stop.name.startsWith("Domsdorf (EE)") ||
    stop.name.startsWith("Drasdo,") ||
    stop.name.startsWith("Dreska,") ||
    stop.name === "Drößig" ||
    stop.name === "Dübrichen" ||
    stop.name.startsWith("Dübrichen,") ||
    stop.name.startsWith("Dubro,") ||
    stop.name === "Eichholz" ||
    stop.name.startsWith("Elsterwerda,") ||
    stop.name.startsWith("Elsterwerda-Biehla,") ||
    stop.name.startsWith("Falkenberg/E.,") ||
    stop.name.startsWith("Fermerswalde,") ||
    stop.name.startsWith("Fichtenberg,") ||
    stop.name.startsWith("Finsterwalde,") ||
    stop.name.startsWith("Fischwasser,") ||
    stop.name.startsWith("Frankena,") ||
    stop.name.startsWith("Frankenhain,") ||
    stop.name === "Frauenhorst" ||
    stop.name.startsWith("Freileben,") ||
    stop.name.startsWith("Freywalde,") ||
    stop.name.startsWith("Friedersdorf (bei Oppelhain)") ||
    stop.name === "Friedersdorf (bei Brenitz)" ||
    stop.name.startsWith("Friedersdorf (bei Herzberg)") ||
    stop.name.startsWith("Friedrichsluga,") ||
    stop.name.startsWith("Gahro,") ||
    stop.name === "Göllnitz" ||
    stop.name.startsWith("Gorden,") ||
    stop.name.startsWith("Goßmar,") ||
    stop.name.startsWith("Gräfendorf (EE)") ||
    stop.name.startsWith("Grassau (EE)") ||
    stop.name === "Grauwinkel" ||
    stop.name.startsWith("Gröbitz,") ||
    stop.name.startsWith("Gröden,") ||
    stop.name === "Großbahren" ||
    stop.name.startsWith("Großkrausnik,") ||
    stop.name === "Großrössen" ||
    stop.name.startsWith("Großthiemig") ||
    stop.name === "Gruhno" ||
    stop.name.startsWith("Haida,") ||
    stop.name.startsWith("Hartmannsdorf (EE)") ||
    stop.name.startsWith("Hennersdorf,") ||
    stop.name.startsWith("Herzberg (Elster),") ||
    stop.name.startsWith("Hillmersdorf,") ||
    stop.name.startsWith("Hirschfeld,") ||
    stop.name.startsWith("Hohenbucko,") ||
    stop.name === "Hohenkuhnsdorf" ||
    stop.name.startsWith("Hohenleipisch,") ||
    stop.name === "Jagsal" ||
    stop.name.startsWith("Jeßnigk,") ||
    stop.name.startsWith("Kahla,") ||
    stop.name.startsWith("Kauxdorf,") ||
    stop.name.startsWith("Kirchhain,") ||
    stop.name === "Kleinbahren" ||
    stop.name === "Kleinkrausnik" ||
    stop.name === "Kleinrössen" ||
    stop.name.startsWith("Klingmühl,") ||
    stop.name.startsWith("Knippelsdorf,") ||
    stop.name.startsWith("Kolochau,") ||
    stop.name.startsWith("Kölsa,") ||
    stop.name.startsWith("Körba,") ||
    stop.name === "Kosilenzien" ||
    stop.name.startsWith("Koßdorf,") ||
    stop.name.startsWith("Krassig,") ||
    stop.name.startsWith("Kraupa,") ||
    stop.name === "Kröbeln" ||
    stop.name.startsWith("Langennaundorf,") ||
    stop.name === "Langenrieth" ||
    stop.name.startsWith("Lausitz,") ||
    stop.name.startsWith("Lebusa,") ||
    stop.name === "Lichtena" ||
    stop.name.startsWith("Lichterfeld,") ||
    stop.name === "Lieskau" ||
    stop.name.startsWith("Lindena,") ||
    stop.name.startsWith("Lindthal,") ||
    stop.name === "Löhsten" ||
    stop.name === "Lönnewitz" ||
    stop.name.startsWith("Lugau,") ||
    stop.name.startsWith("Maasdorf,") ||
    stop.name === "Mahdel" ||
    stop.name === "Malitschkendorf" ||
    stop.name.startsWith("Martinskirchen,") ||
    stop.name.startsWith("Marxdorf,") ||
    stop.name.startsWith("Massen,") ||
    stop.name.startsWith("Merzdorf (EE)") ||
    stop.name.startsWith("Möglenz,") ||
    stop.name.startsWith("Möllendorf,") ||
    stop.name.startsWith("Mühlberg (Elbe)") ||
    stop.name.startsWith("München (EE)") ||
    stop.name.startsWith("Münchhausen,") ||
    stop.name.startsWith("Naundorf (bei Fichtwald)") ||
    stop.name === "Neuburxdorf" ||
    stop.name === "Neudeck" ||
    stop.name === "Neunaundorf" ||
    stop.name.startsWith("Nexdorf,") ||
    stop.name.startsWith("Oelsig,") ||
    stop.name.startsWith("Oppelhain,") ||
    stop.name === "Oschätzchen" ||
    stop.name.startsWith("Osteroda,") ||
    stop.name === "Pahlsdorf" ||
    stop.name === "Pießig" ||
    stop.name.startsWith("Plessa,") ||
    stop.name === "Plessa Süd" ||
    stop.name.startsWith("Poley,") ||
    stop.name.startsWith("Polzen,") ||
    stop.name.startsWith("Ponnsdorf,") ||
    stop.name.startsWith("Prestewitz,") ||
    stop.name.startsWith("Prieschka,") ||
    stop.name.startsWith("Prießen,") ||
    stop.name.startsWith("Prösen,") ||
    stop.name.startsWith("Proßmarke,") ||
    stop.name === "Rahnisdorf" ||
    stop.name === "Redlin (EE)" ||
    stop.name.startsWith("Rehfeld (EE)") ||
    stop.name.startsWith("Reichenhain,") ||
    stop.name === "Reißdamm" ||
    stop.name.startsWith("Rothstein,") ||
    stop.name.startsWith("Rückersdorf,") ||
    stop.name === "Saathain" ||
    stop.name.startsWith("Sallgast,") ||
    stop.name.startsWith("Saxdorf,") ||
    stop.name === "Schacksdorf" ||
    stop.name.startsWith("Schacksdorf,") ||
    stop.name === "Schadewitz" ||
    stop.name.startsWith("Schilda,") ||
    stop.name.startsWith("Schlieben,") ||
    stop.name === "Schmerkendorf" ||
    stop.name.startsWith("Schmielsdorf,") ||
    stop.name.startsWith("Schönborn,") ||
    stop.name.startsWith("Schönewalde (bei Herzberg)") ||
    stop.name.startsWith("Schraden,") ||
    stop.name.startsWith("Sonnewalde,") ||
    stop.name.startsWith("Staupitz,") ||
    stop.name.startsWith("Stechau,") ||
    stop.name.startsWith("Stolzenhain,") ||
    stop.name.startsWith("Stolzenhain a.d.Röder,") ||
    stop.name.startsWith("Striesa,") ||
    stop.name.startsWith("Tanneberg,") ||
    stop.name.startsWith("Thalberg,") ||
    stop.name.startsWith("Theisa,") ||
    stop.name.startsWith("Trebbus,") ||
    stop.name.startsWith("Tröbitz,") ||
    stop.name.startsWith("Uebigau,") ||
    stop.name.startsWith("Wahrenbrück,") ||
    stop.name.startsWith("Wainsdorf,") ||
    stop.name.startsWith("Wehrhain,") ||
    stop.name === "Werchau" ||
    stop.name.startsWith("Werenzhain,") ||
    stop.name.startsWith("Wiederau,") ||
    stop.name.startsWith("Wiepersdorf (EE)") ||
    stop.name.startsWith("Wildenau,") ||
    stop.name.startsWith("Wildgrube,") ||
    stop.name.startsWith("Winkel,") ||
    stop.name === "Würdenhain" ||
    stop.name.startsWith("Zeckerin,") ||
    stop.name.startsWith("Zeischa,") ||
    stop.name === "Zinsdorf" ||
    stop.name.startsWith("Zobersdorf,") ||
    stop.name.startsWith("Züllsdorf,") ||
    stop.name.startsWith("Zürchel,")
);

export { stops };
