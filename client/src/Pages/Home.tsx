import PostCard from "../Components/PostCard";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import '../css/Home.css';
import { JsonPost } from "../App";


function Home(): JSX.Element {
  const [allPost, setAllPost] = useState<JsonPost[]>([]);
  const [displayPost, setDisplayPost] = useState<JsonPost[]>([]);
  const [currentTag, setCurrentTag] = useState("classic");

  useEffect(() => {
    fetch('http://localhost:8080/posts')
    .then(p => p.json())
    .then(p => {
      setAllPost(p);
      setDisplayPost((p as JsonPost[]).filter(k => k.tags.includes(currentTag)))
    });
  }, [])

  const DoStuff = () => {
    console.log(displayPost);
    console.log(currentTag)
  }

  const ChangeTag = (theTag: string) => {
    setCurrentTag(theTag)
    setDisplayPost(allPost.filter(k => k.tags.includes(theTag)));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <div className="home">
      <h1>Tiny Blog</h1>
      <div className="post-tags-options">
        <button onClick={() => ChangeTag('classic')} className={currentTag == 'classic' ? 'active' : ''}>Classic</button>
        <button onClick={() => ChangeTag('mystery')} className={currentTag == 'mystery' ? 'active' : ''}>Mystery</button>
        <button onClick={() => ChangeTag('french')} className={currentTag == 'french' ? 'active' : ''}>French</button>
        <button onClick={() => ChangeTag('love')} className={currentTag == 'love' ? 'active' : ''}>Love</button>
        <button onClick={() => ChangeTag('fiction')} className={currentTag == 'fiction' ? 'active' : ''}>Fiction</button>
      </div>
      {displayPost.map(p => <PostCard key={p.id} PostData={p}/>)}
      <button onClick={DoStuff}>Do Stuff</button>
    </div>
    </motion.div>
  )
}

export default Home;