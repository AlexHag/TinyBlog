import React from "react";
import { useNavigate } from "react-router-dom";
import CommentIcon from '../img/CommentIcon.svg';
import ThumbsUpIcon from '../img/ThumbsUpIcon.svg';
import '../css/Post.css';

import { JsonPost } from "../App";

//interface JsonPost {
//   id: number,
//   title: string,
//   body: string,
//   userId: number,
//   tags: string[],
//   reactions: number,
//   number_of_comments: number,
//   username: string,
//   profile_picture: string
// };


function PostCard({PostData}: {PostData: JsonPost} ): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="one-post" onClick={() => navigate(`/post/${PostData.id}`)}>
      <div className="post-left">
        <img src={PostData.profile_picture} className="post-profile-pic"></img>
      </div>

      <div className="post-right">
        <h1>{PostData.title}</h1>
        <h2 onClick={(e) => {e.stopPropagation(); navigate(`/u/${PostData.username}`)}}>@{PostData.username}</h2>
        <p>{PostData.body}</p>

        <div className="post-hashtag">
          {PostData.tags.map(p => <span>#{p}</span>)}
        </div>

        <div className="post-actions">
          <p className="amout-of-action">{PostData.reactions}</p>
          <img src={CommentIcon} className="comment-icon"/>
          <div className="empty-item"></div>
          <p className="amout-of-action">{PostData.number_of_comments}</p>
          <img src={ThumbsUpIcon} className="thubs-up-icon-icon"/>
        </div>
      </div>
    </div>
  ) 
}

export default PostCard;