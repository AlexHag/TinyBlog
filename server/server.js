import express from 'express';
import fs from 'fs';
import cors from 'cors';

const thePostData = JSON.parse(fs.readFileSync('C:\\proj\\tinyFullStack\\server\\theData\\posts.json'));
const theCommentData =  JSON.parse(fs.readFileSync('C:\\proj\\tinyFullStack\\server\\theData\\comments_and_users.json'));

const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.send("HELLOOOO")
});

app.get('/posts', (req, res) => {
    res.send(thePostData);
});

app.get('/posts/:id', (req, res) => {
    res.send(thePostData.find(p => p.id == req.params.id));
});

app.get('/posts/:id/comments', (req, res) => {
    res.send(theCommentData.find(p => p['postId'] == req.params.id)['comments']);
});

app.get('/u/:username', (req, res) => {
    res.send(thePostData.filter(p => p['username'] == req.params.username));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
