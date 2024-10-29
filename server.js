const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

// Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get a single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // res.status(200).json(posts.filter((post) => post.id === id));
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ message: `A post with id ${id} not found.` });
  }

  res.status(200).json(post);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
