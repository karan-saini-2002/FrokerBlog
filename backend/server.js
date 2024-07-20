// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://karansaini452002:4Sg0sN1AwvBhd7jY@cluster0.e6sp83k.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  content: { type: String, required: true },
  image: String, // URL or path to image
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

// Route to get all blogs with pagination
app.get('/api/blogs', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const skip = (page - 1) * limit;
    const blogs = await Blog.find().skip(skip).limit(Number(limit));
    const totalBlogs = await Blog.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);
    res.json({ blogs, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
