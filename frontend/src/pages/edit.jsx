import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TempleContext } from "../App"

export default function Editor({ isNewEntry }) {
  const navigate = useNavigate()

  const { fetchTemples } = useContext(TempleContext)

  let temple
  if (!isNewEntry) {
    const { encodedTemple } = useParams()
    temple = JSON.parse(decodeURIComponent(encodedTemple))
  } else {
    temple = {
      name: "",
      location: "",
      description: "",
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    const form = event.target
    const body = {
      name: form.name.value,
      location: form.location.value,
      description: form.description.value,
    }

    let serverReqParams = [
      "http://localhost:3000/api/data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    ]
    if (!isNewEntry) {
      serverReqParams[0] = `${serverReqParams[0]}/${temple.id}`
      serverReqParams[1].method = "PUT"
    }

    fetch(...serverReqParams).then((res) => {
      navigate("/")
      fetchTemples()
    })
  }

  return (
    <form onSubmit={handleFormSubmit} className="editor">
      <h1>
        {isNewEntry ? "Enter Temple Details" : `Edit ${temple.name} details`}
      </h1>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" defaultValue={temple.name} />
      <label htmlFor="location">Location</label>
      <input id="location" type="text" defaultValue={temple.location} />
      <label htmlFor="description">Description</label>
      <textarea id="description" defaultValue={temple.description} />
      <button>Save</button>
    </form>
  )
}
