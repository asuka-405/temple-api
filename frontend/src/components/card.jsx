import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TempleContext } from "../App"

export default function Card(data) {
  const encodedData = encodeURIComponent(JSON.stringify(data))
  const { fetchTemples } = useContext(TempleContext)

  function handleDelete(e) {
    e.preventDefault()
    console.log(data)
    fetch(`http://localhost:3000/api/data/${data.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        fetchTemples()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="card">
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <p>{data.description}</p>
      <Link to="/">
        <button className="delete" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 72"
            width="50%"
            height="50%"
          >
            <path
              d="M 32 13 C 30.895 13 30 13.895 30 15 L 30 16 L 17 16 C 14.791 16 13 17.791 13 20 C 13 21.973645 14.432361 23.602634 16.3125 23.929688 L 18.707031 52.664062 C 19.053031 56.811062 22.520641 60 26.681641 60 L 45.318359 60 C 49.479359 60 52.945969 56.811062 53.292969 52.664062 L 55.6875 23.929688 C 57.567639 23.602634 59 21.973645 59 20 C 59 17.791 57.209 16 55 16 L 42 16 L 42 15 C 42 13.895 41.105 13 40 13 L 32 13 z M 24.347656 24 L 47.652344 24 L 45.396484 51.082031 C 45.352484 51.600031 44.918438 52 44.398438 52 L 27.601562 52 C 27.081562 52 26.647469 51.600031 26.605469 51.082031 L 24.347656 24 z"
              fill="#FF7F50"
            />
          </svg>
        </button>
      </Link>
      <Link to={`/edit/${encodedData}`}>
        <button className="edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 72"
            width="50%"
            height="50%"
          >
            <path
              d="M38.406 22.234l11.36 11.36L28.784 54.576l-12.876 4.307c-1.725.577-3.367-1.065-2.791-2.79l4.307-12.876L38.406 22.234zM41.234 19.406l5.234-5.234c1.562-1.562 4.095-1.562 5.657 0l5.703 5.703c1.562 1.562 1.562 4.095 0 5.657l-5.234 5.234L41.234 19.406z"
              fill="#FF7F50"
            />
          </svg>
        </button>
      </Link>
    </div>
  )
}
