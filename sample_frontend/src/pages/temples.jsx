import { useContext } from "react"
import { TempleContext } from "../App"
import NewTemple from "../components/NewTemple"
import Card from "../components/card"

export default function Temples() {
  const { temples } = useContext(TempleContext)

  console.log(temples)

  return (
    <div className="data">
      <NewTemple />

      {temples.map((temple, index) => {
        return (
          <Card
            key={index}
            id={temple.id}
            name={temple.name}
            location={temple.location}
            description={temple.description}
          />
        )
      })}
    </div>
  )
}
