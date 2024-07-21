const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
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


const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  content: { type: String, required: true },
  image: String, // URL or path to image
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);


app.get('/api/blogs', async (req, res) => {
    const { page = 1, limit = 9 } = req.query;
    
    
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    try {
       
        if (isNaN(pageNumber) || isNaN(limitNumber) || pageNumber < 1 || limitNumber < 1) {
            return res.status(400).json({ message: 'Invalid page or limit values' });
        }

        
        const skip = (pageNumber - 1) * limitNumber;

        
        const blogs = await Blog.find().skip(skip).limit(limitNumber);

     
        const totalBlogs = await Blog.countDocuments();

        
        const totalPages = Math.ceil(totalBlogs / limitNumber);

        
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
