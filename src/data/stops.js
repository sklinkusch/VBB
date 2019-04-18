import SUBerlin from "./SUBerlin/SUBerlin";
import TBBerlin from "./TBBerlin/TBBerlin";

const stops = [
  { id: "900000160541", name: "Josef-Orlopp-Str./Vulkanstr." },
  ...SUBerlin,
  ...TBBerlin,
  { id: "900000210641", name: "Dallgow-Döberitz, Havelpark" },
  { id: "900000203369", name: "Hennigsdorf, Edisonstr." },
  { id: "900000203368", name: "Hennigsdorf, Humboldtstr." },
  { id: "900000203872", name: "Hennigsdorf, Kleiststr." },
  { id: "900000203376", name: "Hennigsdorf, Poststr." },
  { id: "900000203378", name: "Hennigsdorf, Stauffenbergstr." },
  { id: "900000203873", name: "Hennigsdorf, Voltastr." },
  { id: "900000350155", name: "Lindenberg (BAR), Bernauer Str." },
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
  { id: "900000350166", name: "Schwanebeck (BAR), Dorf" },
  { id: "900000350909", name: "Schwanebeck (BAR), Neue Kärntner Str." },
  { id: "900000350694", name: "Schwanebeck (BAR), Schule" },
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
