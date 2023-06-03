/** @jsxImportSource theme-ui */
import train from "../../images/express.svg"
import regional from "../../images/regional.svg"
import suburban from "../../images/suburban.svg"
import subway from "../../images/subway.svg"
import tram from "../../images/tram.svg"
import bus from "../../images/bus.svg"
import ferry from "../../images/ferry.svg"

const prods = [
  {
    id: "express",
    logo: train,
    title: "long distance trains (ICE/IC/EC)"
  },
  {
    id: "regional",
    logo: regional,
    title: "regional trains (RE/RB)"
  },
  {
    id: "suburban",
    logo: suburban,
    title: "suburban trains (S)"
  },
  {
    id: "subway",
    logo: subway,
    title: "subways (U)"
  },
  {
    id: "tram",
    logo: tram,
    title: "trams"
  },
  {
    id: "bus",
    logo: bus,
    title: "buses"
  },
  {
    id: "ferry",
    logo: ferry,
    title: "ferries"
  }
]

type Props = {
  products: boolean[]
  productSetters: Function[]
  getData: Function
}

function ProductsFilter({ products, productSetters, getData }: Props ) {
  const handleChange = (index: number) => {
    const oldValue = products[index]
    const newValue = !oldValue
    const optionsObject: { [key: string]: any } = prods.reduce((acc, curr, idx) => {
      const key = curr.id
      let obj: { [key: string]: any } = {}
      obj[key] = idx === index ? newValue : products[idx]
      const accCopy = Object.assign(acc, obj)
      return accCopy
    }, {})
    productSetters[index](newValue)
    getData(optionsObject)
  }
  return (
    <div>
      {prods.map((el, index) => (
      <span key={el.id}>
        <input type="checkbox" name="product" id={el.id} checked={products[index]} onChange={() => handleChange(index)} />
        <label htmlFor={el.id}>
          <img src={el.logo} alt={el.title} title={el.title} sx={{ width: "1.2rem", ml: "0.5rem", mr: "1rem" }} />
        </label>
      </span>
      ))}
    </div>
  )
}

export default ProductsFilter