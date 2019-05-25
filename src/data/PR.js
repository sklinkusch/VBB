import stopsUnsorted from "./unsorted";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Abbendorf,") ||
    stop.name === "Alt Krüssow" ||
    stop.name === "Alt Pinnow" ||
    stop.name === "Alt Pröttlin" ||
    stop.name === "Baarz" ||
    stop.name === "Babekuhl" ||
    stop.name.startsWith("Bad Wilsnack,") ||
    stop.name.startsWith("Baek,") ||
    stop.name.startsWith("Bälow,") ||
    stop.name.startsWith("Bärensprung,") ||
    stop.name.startsWith("Barenthin,") ||
    stop.name === "Beckenthin" ||
    stop.name === "Bendelin" ||
    stop.name.startsWith("Bentwisch,") ||
    stop.name.startsWith("Berge (PR)") ||
    stop.name.startsWith("Bergsoll,") ||
    stop.name.startsWith("Bernheide,") ||
    stop.name === "Besandten" ||
    stop.name.startsWith("Beveringen,") ||
    stop.name === "Birkenfelde" ||
    stop.name === "Birkholz (PR)" ||
    stop.name.startsWith("Blüthen,") ||
    stop.name === "Boberow" ||
    stop.name.startsWith("Boddin,") ||
    stop.name === "Bootz" ||
    stop.name.startsWith("Breese,") ||
    stop.name === "Breetz" ||
    stop.name === "Breitenfeld" ||
    stop.name.startsWith("Bresch,") ||
    stop.name.startsWith("Brügge,") ||
    stop.name === "Brünkendorf" ||
    stop.name.startsWith("Brüsenhagen,") ||
    stop.name.startsWith("Buchholz (PR)") ||
    stop.name.startsWith("Buckow (PR)") ||
    stop.name.startsWith("Buddenhagen (PR)") ||
    stop.name === "Bullendorf" ||
    stop.name === "Burghagen" ||
    stop.name.startsWith("Burow,") ||
    stop.name.startsWith("Cumlosen,") ||
    stop.name.startsWith("Dallmin,") ||
    stop.name.startsWith("Dannenwalde (PR)") ||
    stop.name === "Dannhof" ||
    stop.name === "Dargardt" ||
    stop.name.startsWith("Demerthin,") ||
    stop.name.startsWith("Dergenthin,") ||
    stop.name.startsWith("Döllen,") ||
    stop.name.startsWith("Düpow,") ||
    stop.name === "Eggersdorf (bei Pritzwalk)" ||
    stop.name === "Eldenburg" ||
    stop.name.startsWith("Ellershagen,") ||
    stop.name.startsWith("Falkenhagen (PR)") ||
    stop.name === "Felsenhagen" ||
    stop.name === "Ferbitz" ||
    stop.name.startsWith("Frehne,") ||
    stop.name.startsWith("Friedheim,") ||
    stop.name === "Gaarz" ||
    stop.name.startsWith("Gadow (PR)") ||
    stop.name === "Gandow" ||
    stop.name.startsWith("Garlin,") ||
    stop.name.startsWith("Garz (PR)") ||
    stop.name.startsWith("Gerdshagen,") ||
    stop.name.startsWith("Giesenhagen,") ||
    stop.name.startsWith("Giesensdorf (PR)") ||
    stop.name === "Glövzin" ||
    stop.name.startsWith("Glöwen,") ||
    stop.name.startsWith("Gnevsdorf,") ||
    stop.name.startsWith("Görike,") ||
    stop.name === "Grabow (bei Buckow)" ||
    stop.name.startsWith("Gramzow (PM)") ||
    stop.name.startsWith("Granzow,") ||
    stop.name.startsWith("Grenzheim,") ||
    stop.name === "Griffenhagen" ||
    stop.name.startsWith("Groß Breese,") ||
    stop.name === "Groß Buchholz" ||
    stop.name === "Groß Gottschow" ||
    stop.name.startsWith("Groß Langerwisch,") ||
    stop.name === "Groß Leppin" ||
    stop.name === "Groß Linde" ||
    stop.name === "Groß Lüben" ||
    stop.name.startsWith("Groß Pankow,") ||
    stop.name.startsWith("Groß Warnow,") ||
    stop.name === "Groß Welle" ||
    stop.name.startsWith("Groß Werzin,") ||
    stop.name === "Groß Woltersdorf (PR)" ||
    stop.name === "Grube" ||
    stop.name === "Guhlsdorf" ||
    stop.name.startsWith("Gülitz,") ||
    stop.name.startsWith("Gulow,") ||
    stop.name.startsWith("Gumtow,") ||
    stop.name === "Haaren" ||
    stop.name.startsWith("Halenbeck,") ||
    stop.name.startsWith("Hasenwinkel,") ||
    stop.name === "Heidelberg (PR)" ||
    stop.name === "Hellburg" ||
    stop.name === "Helle" ||
    stop.name === "Hinzdorf" ||
    stop.name.startsWith("Hohenvier,") ||
    stop.name === "Hoppenrade (PR)" ||
    stop.name === "Horst (bei Wolfshagen)" ||
    stop.name.startsWith("Hülsebeck,") ||
    stop.name === "Jagel" ||
    stop.name.startsWith("Jännersdorf,") ||
    stop.name.startsWith("Jungfernkrug,") ||
    stop.name.startsWith("Kammermark,") ||
    stop.name === "Karlshof (bei Putlitz)" ||
    stop.name.startsWith("Karstädt (PR)") ||
    stop.name.startsWith("Karthan,") ||
    stop.name.startsWith("Karwe (PR)") ||
    stop.name.startsWith("Kehrberg,") ||
    stop.name.startsWith("Kemnitz (PR)") ||
    stop.name.startsWith("Kietz (PR)") ||
    stop.name === "Kleeste" ||
    stop.name === "Klein Breese" ||
    stop.name === "Klein Gottschow" ||
    stop.name === "Klein Leppin" ||
    stop.name.startsWith("Klein Lüben,") ||
    stop.name.startsWith("Klein Schönhagen,") ||
    stop.name.startsWith("Klein Warnow,") ||
    stop.name === "Klein Woltersdorf" ||
    stop.name.startsWith("Kleinow (PR)") ||
    stop.name === "Klenzenhof" ||
    stop.name.startsWith("Kletzke,") ||
    stop.name === "Klockow (PR)" ||
    stop.name.startsWith("Kolrep,") ||
    stop.name === "Könkendorf" ||
    stop.name === "Krampfer" ||
    stop.name === "Krams" ||
    stop.name === "Krempendorf" ||
    stop.name.startsWith("Kreuzburg,") ||
    stop.name === "Kribbe" ||
    stop.name === "Krumbeck" ||
    stop.name.startsWith("Kuhbier,") ||
    stop.name.startsWith("Kuhblank,") ||
    stop.name === "Kuhsdorf" ||
    stop.name.startsWith("Kunow (PR)") ||
    stop.name.startsWith("Laaske,") ||
    stop.name === "Laaslich" ||
    stop.name.startsWith("Langnow,") ||
    stop.name.startsWith("Lanz,") ||
    stop.name.startsWith("Legde,") ||
    stop.name.startsWith("Lennewitz,") ||
    stop.name.startsWith("Lenzen,") ||
    stop.name.startsWith("Lenzersilge,") ||
    stop.name.startsWith("Lindenberg (PR)") ||
    stop.name.startsWith("Lindenberg (bei Wittenberge)") ||
    stop.name === "Lockstädt" ||
    stop.name === "Lübzow" ||
    stop.name === "Luggendorf" ||
    stop.name.startsWith("Lütkendorf,") ||
    stop.name === "Lütkenwisch" ||
    stop.name.startsWith("Lütkenwisch,") ||
    stop.name === "Mankmuß" ||
    stop.name === "Mansfeld" ||
    stop.name.startsWith("Mellen,") ||
    stop.name.startsWith("Mertensdorf,") ||
    stop.name === "Mesekow" ||
    stop.name.startsWith("Mesendorf,") ||
    stop.name.startsWith("Meyenburg,") ||
    stop.name.startsWith("Mödlich,") ||
    stop.name === "Mollnitz" ||
    stop.name === "Moor (PR)" ||
    stop.name === "Motrich" ||
    stop.name === "Müggendorf" ||
    stop.name.startsWith("Muggerkuhl,")
);

export { stops };
