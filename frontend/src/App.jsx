import { createContext, useContext, useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Editor from "./pages/edit"
import Temples from "./pages/temples"

const TempleContext = createContext()

function App() {
  const [temples, setTemples] = useState([])
  const fetchTemples = async () => {
    const response = await fetch("http://localhost:3000/api/data")
    const data = await response.json()
    setTemples(data)
  }

  useEffect(() => {
    fetchTemples()
  }, [])

  return (
    <TempleContext.Provider value={{ temples, fetchTemples }}>
      <Router>
        <Routes>
          <Route path="/" element={<Temples />} />
          <Route path="/edit/:encodedTemple" element={<Editor />} />
          <Route path="/edit/new" element={<Editor isNewEntry={true} />} />
        </Routes>
      </Router>
    </TempleContext.Provider>
  )
}

export default App
export { TempleContext }
