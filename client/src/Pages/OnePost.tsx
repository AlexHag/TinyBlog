import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { JsonPost, JsonComment } from "../App";
import { motion } from 'framer-motion'
import PostCard from "../Components/PostCard";
import CommentCard from "../Components/CommentCard";

function OnePost(): JSX.Element {
  let { id } = useParams();

  const [thePost, setThePost] = useState<JsonPost>();
  const [theComments, setTheComments] = useState<JsonComment[]>();

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id}`)
    .then(p => p.json())
    .then(p => setThePost(p));
    fetch(`http://localhost:8080/posts/${id}/comments`)
    .then(p => p.json())
    .then(p => setTheComments(p));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="one-post-container">
        <div className="back-button"><Link to="/" className="back-a">BACK</Link></div>
        {thePost && <PostCard key={thePost.id} PostData={thePost}/>}
        <h2 className={"the-comments-header-text"}>Comments:</h2>
        {theComments && theComments.map(p => <CommentCard key={p.id} CommentData={p} />)}
      </div>
    </motion.div>
  );
}

export default OnePost;
