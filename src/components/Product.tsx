/** @jsxImportSource theme-ui */
const train = require("../images/express.svg");
const regional = require("../images/regional.svg");
const suburban = require("../images/suburban.svg");
const subway = require("../images/subway.svg");
const metrotram = require("../images/metro-tram.svg");
const tram = require("../images/tram.svg");
const metrobus = require("../images/metro-bus.svg");
const expressbus = require("../images/express-bus.svg");
const bus = require("../images/bus.svg");
const specialbus = require("../images/special-bus.svg");
const nightbus = require("../images/night-bus.svg");
const ferry = require("../images/ferry.svg");

type Props = {
  line: {
    adminCode: string,
    color: {
      bg: string,
      fg: string
    },
    express: boolean,
    fahrtNr: string,
    id: string,
    metro: boolean,
    name: string,
    night: boolean,
    product: string
  }
}

const Product = (props: Props) => {
  const { line } = props;
  const { express, metro, name, night, product } = line;
  switch (product) {
    case "express":
      return (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={train} alt="express" sx={{ width: "18px" }} />
        </div>
      );
    case "regional":
      return (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={regional} alt="regional" sx={{ width: "18px" }} />
        </div>
      );
    case "suburban":
      return (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={suburban} alt="suburban" sx={{ width: "18px" }} />
        </div>
      );
    case "subway":
      return (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={subway} alt="subway" sx={{ width: "18px" }} />
        </div>
      );
    case "tram":
      return metro ? (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={metrotram} alt="metro-tram" sx={{ width: "18px" }} />
        </div>
      ) : (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={tram} alt="tram" sx={{ width: "18px" }} />
        </div>
      );
    case "bus":
      return express ? (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={expressbus} alt="express-bus" sx={{ width: "18px" }} />
        </div>
      ) : metro ? (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={metrobus} alt="metro-bus" sx={{ width: "18px" }} />
        </div>
      ) : night ? (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={nightbus} alt="night-bus" sx={{ width: "18px" }} />
        </div>
      ) : name === "A05" ? (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={specialbus} alt="special-bus" sx={{ width: "18px" }} />
        </div>
      ) : (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={bus} alt="bus" sx={{ width: "18px" }} />
        </div>
      );
    case "ferry":
      return (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={ferry} alt="ferry" sx={{ width: "18px" }} />
        </div>
      );
    default:
      return (
        <div className="mean" sx={{ textAlign: "center", gridColumn: ["1 / span 1", "7 / span 1"] }}>
          <img src={bus} alt="bus" sx={{ width: "18px" }} />
        </div>
      );
  }
};

export default Product;
