// index.js
const express = require('express');
const { PrismaClient } = require('./prisma/generated/client');
const app = express();
const prisma = new PrismaClient();
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(express.json());
app.use(cors())
// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  },
});

const upload = multer({ storage: storage });

// // Middleware
// app.use(bodyParser.json());


// API endpoint for image upload with additional data (Title, Author)
app.post('/upload', upload.single('coverImages'), async (req, res) => {
  // const { filename } = req.file;
  const { title, author, synopsis, category,tags,status } = req.body;
  const coverImage = req.file.filename;

  try {
    // Insert data into the database using Prisma
    await prisma.story.create({
      data: {
        title: title,
        author: author,
        synopsis: synopsis,
        category:category,
        tags:tags,
        coverImages: coverImage,
        status:status
      },
    });

    res.status(200).json({ message: 'Image uploaded successfully with additional data' });
  } catch (error) {
    console.error('Error inserting data into the database: ' + error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/stories', async (req, res) => {
  const stories = await prisma.story.findMany();
  res.json(stories);
});

app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: { title, content },
  });
  res.json(post);
});

// Get all posts
app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

// Get a specific post by ID
app.get('/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });
  res.json(post);
});

// Update a post by ID
app.put('/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const updatedPost = await prisma.post.update({
    where: { id: postId },
    data: { title, content },
  });
  res.json(updatedPost);
});

// Delete a post by ID
app.delete('/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  await prisma.post.delete({
    where: { id: postId },
  });
  res.json({ message: 'Post deleted successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
