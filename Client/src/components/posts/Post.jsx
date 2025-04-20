import "./post.css";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"; 
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useState } from "react";
import moment from 'moment';
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import { Box, Stack, Avatar, Card, CardContent, CardActions, Typography, IconButton, Divider, Tooltip } from "@mui/material";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleComment = () => {
    setCommentOpen(!commentOpen);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const getInitials = (name) => {
    if (!name) return "U";
    
    const nameParts = name.split(" ");
    if (nameParts.length === 1) return nameParts[0][0].toUpperCase();
    
    return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
  };

  return (
    <Card className="post" elevation={2} sx={{ 
      borderRadius: 2, 
      mb: 3,
      overflow: 'visible', 
      transition: 'all 0.3s',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
      }
    }}>
      <CardContent sx={{ padding: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title={`View ${post.name}'s profile`}>
              <a href={`/view/${post.username}`} style={{ textDecoration: 'none' }}>
                <Avatar 
                  sx={{ 
                    bgcolor: liked ? "#e3f2fd" : "#bbdefb", 
                    color: "#1565c0",
                    width: 48, 
                    height: 48,
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  {getInitials(post.name)}
                </Avatar>
              </a>
            </Tooltip>
            
            <Box sx={{ ml: 1.5 }}>
              <a href={`/view/${post.username}`} style={{ textDecoration: 'none' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  '&:hover': { 
                    color: '#1976d2',
                    textDecoration: 'none' 
                  }
                }}>
                  {post.name}
                </Typography>
              </a>
              <Typography variant="caption" color="text.secondary">
                {moment(post.createdat).fromNow()}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box 
          className="post-content" 
          sx={{ 
            backgroundColor: '#f8f9fa', 
            borderRadius: 1, 
            p: 2, 
            mb: 2,
            borderLeft: '4px solid #bbdefb',
          }}
        >
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
            {post.desc}
          </Typography>
        </Box>
      </CardContent>

      <Divider sx={{ mx: 2 }} />
      
      <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title="Comment">
            <IconButton 
              onClick={handleComment} 
              size="small" 
              color={commentOpen ? "primary" : "default"}
              sx={{ borderRadius: 1, mr: 1 }}
            >
              <TextsmsOutlinedIcon fontSize="small" />
              <Typography variant="body2" sx={{ ml: 0.5 }}>
                Comment
              </Typography>
            </IconButton>
          </Tooltip>
        </Box>
        
        <Tooltip title={saved ? "Unsave" : "Save"}>
          <IconButton 
            onClick={handleSave} 
            size="small" 
            color={saved ? "primary" : "default"}
          >
            <BookmarkBorderOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </CardActions>

      {commentOpen && (
        <Box sx={{ px: 2, pb: 2, pt: 0 }}>
          <Divider sx={{ mb: 2 }} />
          <Comments postId={post.id} />
        </Box>
      )}
    </Card>
  );
};

export default Post;