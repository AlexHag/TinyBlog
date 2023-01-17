import express from 'express';
import fs from 'fs';
import cors from 'cors';


// const theJsonData = JSON.parse(fs.readFileSync('./data/posts_with_userinfo.json'));
// const theJsonDataWithComments = JSON.parse(fs.readFileSync('./data/posts_with_comments.json'));

const thePostData = JSON.parse(fs.readFileSync('C:\\proj\\tinyFullStack\\server\\data2\\posts.json'));
const theCommentData =  JSON.parse(fs.readFileSync('C:\\proj\\tinyFullStack\\server\\data2\\comments_and_users.json'));

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







// app.get('/ogposts', (req, res) => {
//     res.sendFile('C:\\proj\\tinyFullStack\\server\\data\\og_posts.json');
// });

// app.get('/postsusers', (req, res) => {
//     res.sendFile('C:\\proj\\tinyFullStack\\server\\data\\posts_with_userinfo.json');
// });

// app.get('/post/:id', (req, res) => {
//     res.send(theJsonData['posts'].find(p => p.id == req.params.id));
// });

// app.get('/posts/:id/comments', (req, res) => {
//     res.send(theJsonDataWithComments['posts'].find(p => p.id == req.params.id)['comments']);
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
