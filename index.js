// Import required modules
const express = require("express")
const cors = require("cors")

// Create an Express app
const app = express()

// Middleware: Enable CORS
app.use(
  cors({
    origin: ["http://localhost:4200", "https://localhost:3000"],
  })
)

app.use(express.json())

// Sample data for demonstration
let data = [
  {
    id: 1,
    name: "Brihadeeswarar Temple",
    location: "Thanjavur, Tamil Nadu",
    description:
      "Built in the 11th century, this temple is known for its massive tower and intricate carvings.",
  },
  {
    id: 2,
    name: "Kailashnath Temple",
    location: "Ellora, Maharashtra",
    description:
      "This temple is famous for its rock-cut architecture and is dedicated to Lord Shiva.",
  },
  {
    id: 3,
    name: "Konark Sun Temple",
    location: "Konark, Odisha",
    description:
      "Built in the 13th century, this temple is dedicated to the Sun God and is known for its intricate carvings.",
  },
  {
    id: 4,
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    description:
      "This temple is dedicated to Goddess Meenakshi and is known for its towering gopurams and intricate carvings.",
  },
  {
    id: 5,
    name: "Somnath Temple",
    location: "Gir Somnath, Gujarat",
    description:
      "This temple is one of the 12 Jyotirlingas and is dedicated to Lord Shiva.",
  },
]

// RESTful API routes

// GET: Retrieve all data
app.get("/api/data", (req, res) => {
  res.json(data)
})

// GET: Retrieve a specific item by ID
app.get("/api/data/:id", (req, res) => {
  const itemId = parseInt(req.params.id)
  const item = data.find((item) => item.id === itemId)

  if (item) {
    res.json(item)
  } else {
    res.status(404).json({ message: "Item not found" })
  }
})

// POST: Create a new item
app.post("/api/data", (req, res) => {
  const newItem = req.body
  newItem.id = data.length + 1
  data.push(newItem)
  console.log(newItem)
  res.status(201).json(newItem)
})

// PUT: Update an existing item by ID
app.patch("/api/data/:id", (req, res) => {
  const itemId = parseInt(req.params.id)
  const updatedItem = req.body
  const index = data.findIndex((item) => item.id === itemId)

  if (index !== -1 && index < data.length) {
    data[index] = updatedItem
    res.json(updatedItem)
  } else {
    res.status(404).json({ message: "Item not found" })
  }
})

// DELETE: Delete an item by ID
app.delete("/api/data/:id", (req, res) => {
  const itemId = parseInt(req.params.id)
  data = data.filter((item) => item.id !== itemId)
  res.json({ message: "Item deleted successfully" })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`👉Server is running on port ${port}⚡`)
})
