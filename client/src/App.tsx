import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PostCard from './Components/PostCard';
import Home from './Pages/Home';
import Error from './Components/Error';
import OnePost from './Pages/OnePost';

export interface JsonPost {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number,
  number_of_comments: number,
  username: string,
  profile_picture: string
};

export interface JsonComment {
  id: number,
  body: string,
  postId: number;
  user: {
    id: number,
    username: string,
    profile_picture: string,
  },
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<OnePost />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
