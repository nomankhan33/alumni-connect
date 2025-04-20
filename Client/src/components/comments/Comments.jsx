import { useContext, useState, useEffect } from "react";
import "./comments.css";
import { AuthContext } from "../../context/authContext";
import { useQueryClient, useMutation } from 'react-query';
import { makeRequest } from "../../axios";
import moment from 'moment';
import { Avatar, CircularProgress } from "@mui/material";

const API_URL = process.env.REACT_APP_API_URL;

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;
  const queryClient = useQueryClient();
  
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/api/comments?postId=${postId}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchComments();
  }, [postId]);

  // Add new comment
  const mutation = useMutation((newComment) => {
    return makeRequest.post("/comments", newComment);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
      // Refresh comments after adding a new one
      fetch(`${API_URL}/api/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data));
    }
  });

  const handleClick = e => {
    e.preventDefault();
    if (desc.trim() === "") {
      alert("Comment cannot be empty");
    } else {
      mutation.mutate({ desc, userid: userId, postId });
      setDesc("");
    }
  };

  const getInitial = (name) => {
    return name?.split(" ")[0][0] || "?";
  };

  return (
    <div className="comments-container">
      {currentUser.isverified === 1 && (
        <div className="comment-form">
          <input 
            className="comment-input" 
            type="text" 
            placeholder="Write a comment..." 
            onChange={e => setDesc(e.target.value)} 
            value={desc} 
          />
          <button 
            className="comment-button" 
            onClick={handleClick}
            disabled={desc.trim() === ""}
          >
            Send
          </button>
        </div>
      )}

      <div className="comments-list">
        {loading ? (
          <div className="loading-container">
            <CircularProgress size={24} color="inherit" />
            <span>Loading comments...</span>
          </div>
        ) : (
          <>
            {comments.length === 0 ? (
              <div className="no-comments">No comments yet. Be the first to comment!</div>
            ) : (
              comments.map((comment) => (
                <div className="comment-item" key={comment.id || `comment-${Math.random()}`}>
                  <div className="comment-header">
                    <a href={`/view/${comment.username}`} className="user-link">
                      <Avatar 
                        className="comment-avatar"
                        sx={{ 
                          width: 32, 
                          height: 32, 
                          bgcolor: "lightblue", 
                          color: "black",
                          fontSize: "14px"
                        }}
                      >
                        {getInitial(comment.name)}
                      </Avatar>
                      <div className="user-info">
                        <span className="comment-username">{comment.name}</span>
                        <span className="comment-time">{moment(comment.createdat).fromNow()}</span>
                      </div>
                    </a>
                  </div>
                  <div className="comment-content">
                    <p>{comment.desc}</p>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Comments;