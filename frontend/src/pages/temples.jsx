import { useContext } from "react"
import { TempleContext } from "../App"
import Card from "../components/card"
import { HistoryButton } from "./History"
import { NewTemple } from "./edit"

export default function Temples() {
  const { temples } = useContext(TempleContext)

  console.log(temples)

  return (
    <>
      <div className="title">
        <h1 style={{ textDecoration: "underline" }}>Temples</h1>
      </div>
      <div className="data">
        <HistoryButton />
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
    </>
  )
}
