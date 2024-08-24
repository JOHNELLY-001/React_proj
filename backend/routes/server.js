const express = require('express');
const db = require('../config/db');
const router = express.Router();

// READ - Get all books
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM books';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// READ - Get a book by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM books WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result[0]);
  });
});

// CREATE - Add a new book
router.post('/', (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const newBook = { title, author, completed: false };
  
  console.log(newBook.title);  // Debugging output
  const sql = 'INSERT INTO books (title, author, completed) VALUES (?, ?, ?)';
  db.query(sql, [title, author, false], (err, result) => {
    if (err) {
      throw err;
    }
    newBook.id = result.insertId;
    res.json(newBook);
  });
});

// UPDATE - Update a book by ID
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const author = req.body.author;
  const completed = req.body.completed;
  const sql = 'UPDATE books SET title = ?, author = ?, completed = ? WHERE id = ?';

  db.query(sql, [title, author, completed, id], (err, result) => {
    if (err) {
      throw err;
    }

    const updatedBook = { id: parseInt(id), title, author, completed };
    res.json(updatedBook);
  });
});

// DELETE - Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM books WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }

    res.json({ message: 'Row has been deleted' });
  });
});

module.exports = router;
