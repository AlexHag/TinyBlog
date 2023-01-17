import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Post.css';

import { JsonPost } from "../App";

// interface PostData {
//   id: number,
//   title: string,
//   body: string,
//   tags: string[],
//   userName: string,
//   picture: string,
// }


function PostCard({PostData}: {PostData: JsonPost}): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="one-post" onClick={() => navigate(`/post/${PostData.id}`)}>
      <div className="post-left">
        <img src={PostData.profile_picture} className="post-profile-pic"></img>
        {/* <div className="post-profile-pic"></div> */}
      </div>
      <div className="post-right">
        <h1>{PostData.title}</h1>
        <h2>@{PostData.username}</h2>
        <p>{PostData.body}</p>
        <div className="post-hashtag">
          {PostData.tags.map(p => <span>#{p}</span>)}
        </div>
        <div className="post-actions">
          <span>412</span>
          <span>12</span>
          <span>69</span>
        </div>
      </div>
    </div>
  ) 
}

export default PostCard;