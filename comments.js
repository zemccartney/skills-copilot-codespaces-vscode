// Create web server 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const comments = require('./comments.json');

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment
    }
    comments.push(newComment);
    res.json(newComment);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const index = comments.findIndex(comment => comment.id == id);
    comments.splice(index, 1);
    res.json(comments);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
