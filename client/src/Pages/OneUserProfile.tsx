import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { JsonPost } from "../App";
import { motion } from "framer-motion";
import PostCard from "../Components/PostCard";
import { useNavigate } from "react-router-dom";
import "../css/OneUserProfile.css";

function OneUserProfile(): JSX.Element {
  let { username } = useParams();
  const navigate = useNavigate();

  const [theUsersPosts, setTheUsersPost] = useState<JsonPost[]>();

  useEffect(() => {
    fetch(`http://localhost:8080/u/${username}`)
      .then((p) => p.json())
      .then((p) => {
        console.log(p.length);
        if (p.length == 0) {
          navigate("/error");
        } else {
          setTheUsersPost(p);
        }
      });
  }, []);

  const DoStuff = () => {
    console.log(theUsersPosts);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="back-button">
        <Link to="/" className="back-a">
          BACK
        </Link>
      </div>
      <div className="profile-header">
        <img src={theUsersPosts && theUsersPosts[0].profile_picture} />
        <h1>{username}</h1>
      </div>
      <h2 className="usernames-post-text-header">{username}'s posts:</h2>

      {/* <button onClick={DoStuff}>Do stuff</button> */}
      {theUsersPosts &&
        theUsersPosts.map((p) => <PostCard key={p.id} PostData={p} />)}
    </motion.div>
  );
}

export default OneUserProfile;
