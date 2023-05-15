/** @jsxImportSource theme-ui */
import Abellio from "../../images/carriers/abellio.svg"
import Anger from "../../images/carriers/busbetrieb-anger.png"
import AReich from "../../images/carriers/AReich.svg"
import BBG from "../../images/carriers/bbg.svg"
import BOS from "../../images/carriers/bos.svg"
import BVG from '../../images/carriers/bvg.svg'
import Cottbusverkehr from "../../images/carriers/cottbusverkehr.svg"
import DB from "../../images/carriers/db.svg"
import FlixTrain from "../../images/carriers/flixtrain.svg"
import FBehrendt from "../../images/carriers/fritz-behrendt.svg"
import GSchmidt from "../../images/carriers/gerd-schmidt.png"
import HANS from "../../images/carriers/hans.svg"
import Havelbus from "../../images/carriers/havelbus.svg"
import Mobus from "../../images/carriers/mobus.svg"
import MRB from "../../images/carriers/mrb.svg"
import NEB from "../../images/carriers/neb.svg"
import ODEG from "../../images/carriers/odeg.svg"
import OVG from "../../images/carriers/ovg.svg"
import Prignitzbus from "../../images/carriers/prignitzbus.svg"
import RPM from "../../images/carriers/rpm.svg"
import RVS from "../../images/carriers/rvs.svg"
import SBahn from "../../images/carriers/sbahn.svg"
import SRS from "../../images/carriers/srs.svg"
import STE from "../../images/carriers/ste.svg"
import VerkehrsbetriebPotsdam from "../../images/carriers/VerkehrsbetriebPotsdam.jpg"
import VTF from "../../images/carriers/vtf.svg"

type Operator = {
  type: "operator",
  id: string,
  name: string
}

type Props = {
  operator: Operator
}

const Carrier = ({operator}: Props) => {
  const styles = { maxHeight: "1em", maxWidth: "100%" }
  switch (operator.id) {
    case "abellio-rail-mitteldeutschland-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={Abellio} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "gunter-anger-guterverkehrs-gmbh-co-omnibusvermietung-kg":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={Anger} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "a-reich-gmbh-busbetrieb":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={AReich} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "barnimer-busgesellschaft-mbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={BBG} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "busverkehr-oder-spree-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={BOS} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "berliner-verkehrsbetriebe":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={BVG} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "busverkehr-gerd-schmidt":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={GSchmidt} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "cottbusverkehr-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={Cottbusverkehr} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "db-regio-ag":
    case "db-regio-bus-ost-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={DB} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "flixtrain-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={FlixTrain} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "fritz-behrendt-ohg":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={FBehrendt} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "hanseatische-eisenbahn":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={HANS} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "havelbus-verkehrsgesellschaft-mbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={Havelbus} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "bayerische-oberlandbahn-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={MRB} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "mobus-markisch-oderland-bus-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={Mobus} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "neb-betriebsgesellschaft-mbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={NEB} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "oberhavel-verkehrsgesellschaft-mbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={OVG} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "odeg-ostdeutsche-eisenbahn-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={ODEG} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "prignitzbus":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={Prignitzbus} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "regiobus-potsdam-mittelmark-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={RPM} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "regionale-verkehrsgesellschaft-dahme-spreewald-mbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={RVS} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "s-bahn-berlin-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={SBahn} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "schoneicher-rudersdorfer-strassenbahn-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={SRS} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "strausberger-eisenbahn-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={STE} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "verkehrsbetrieb-potsdam-gmbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={VerkehrsbetriebPotsdam} alt={operator.name} sx={ styles } /> 
        </div>
      )
    case "verkehrsgesellschaft-teltow-flaming-mbh":
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"] }} title={operator.name}>
          <img src={VTF} alt={operator.name} sx={ styles } /> 
        </div>
      )
    default:
      if (operator && operator.id && operator.name) {
        return <div sx={{ gridColumn: ["21 / span 4", "21 / span 4", "25 / span 2"]}} title={operator.name} />
      }
      return (
        <div sx={{ gridColumn: ["21 / span 4", "21 / span 4","25 / span 2"]}} />
      )
  }
}

export default Carrier