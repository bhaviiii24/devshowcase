const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Make sure body data can be parsed

// MongoDB connection URI
const mongoURI = 'mongodb+srv://admin:yourpassword123@cluster0.w9t8vqh.mongodb.net/devshowcaseDB?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Define Mongoose schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  githubLink: String,
  liveDemo: String,
  screenshot: String
});

// Create model
const Project = mongoose.model('Project', projectSchema);

// Routes

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the DevShowcase API 👋");
});

// Get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Add a new project
app.post('/projects', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to save project" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
