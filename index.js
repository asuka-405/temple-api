if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

// Import required modules
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const History = require("./history.schema")

// Connect to the local MongoDB database
mongoose.connect(process.env.DATABASE_URL)
// Check if the connection is successful
const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection error:"))
db.once("open", () => {
  console.log("Connected to the database")
})

const app = express()

// Middleware: Enable CORS
app.use(
  cors({
    origin: ["http://localhost:4200", "https://localhost:3000"],
  })
)

app.use(express.json())
app.use(saveHistory)
// Error middleware
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: "Internal server error" })
})

// Sample data for demonstration
let data = require("./sample-data.json")

// RESTful API routes

// GET: Retrieve all data
app.get("/api/data", (req, res) => {
  res.json(data)
})

// GET: Retrieve a specific item by ID
app.get("/api/data/:id", (req, res) => {
  const itemId = parseInt(req.params.id)
  const item = data.find((item) => item.id === itemId)

  if (item) res.json(item)
  else res.status(404).json({ message: "Item not found" })
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
  console.log(`👉 Server is running on port ${port}⚡`)
})

async function saveHistory(req, res, next) {
  const History = require("./history.schema") // Import the History model

  const history = new History({
    method: req.method,
    path: req.url,
  })

  try {
    await history.save()
    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
}

// GET: Retrieve all saved history
app.get("/api/history", async (req, res) => {
  try {
    const history = await History.find({})
    res.json(history)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})
// Add a new API route to clear the history
app.delete("/api/history", async (req, res) => {
  try {
    await History.deleteMany({})
    res.json({ message: "History cleared successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})
