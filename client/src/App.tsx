import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Error from './Components/Error';
import OnePost from './Pages/OnePost';
import OneUserProfile from './Pages/OneUserProfile';

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
          <Route path="/u/:username" element={<OneUserProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
