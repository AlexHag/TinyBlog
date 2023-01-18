import { JsonComment } from "../App";
import '../css/Post.css';

// id: number,
// body: string,
// postId: number;
// user: {
//   id: number,
//   username: string,
//   profile_picture: string,
// },

function CommentCard({CommentData}: {CommentData: JsonComment}): JSX.Element {
  return (
    <div className="one-comment">
      <div className="one-comment-grid">
        <img src={CommentData.user.profile_picture} />
        <h2 className="one-comment-username">@{CommentData.user.username}</h2>
        
        <div className="empty-item"></div>
        <p className="one-comment-content-body-p">{CommentData.body}</p>
      </div>
    </div>
  );
};

export default CommentCard;