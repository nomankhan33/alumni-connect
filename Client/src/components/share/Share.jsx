import { useContext, useState, useRef } from "react";
import "./share.css";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { Avatar, Popover } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
// import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
// import axios from "axios";

const Share = () => {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const fileInputRef = useRef(null);
  
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;
  const username = currentUser.username;
  const queryClient = useQueryClient();
  
  // For handling character count
  const maxCharCount = 280;
  const remainingChars = maxCharCount - desc.length;
  const isCharLimitExceeded = remainingChars < 0;

  const mutation = useMutation(
    (newPost) => {
      if (file) {
        const formData = new FormData();
        const fileName = Date.now() + file.name;
        formData.append("name", fileName);
        formData.append("file", file);
        
        // First upload the image
        try {
          makeRequest.post("/upload", formData);
        } catch (err) {
          console.error("Error uploading file:", err);
        }
        
        // Then create the post with the image
        return makeRequest.post("/posts", { ...newPost, img: fileName });
      } else {
        // Create post without image
        return makeRequest.post("/posts", newPost);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    if (desc.trim() === "" && !file) {
      alert("Please write something or add an image to share");
    } else if (isCharLimitExceeded) {
      alert(`Your post exceeds the ${maxCharCount} character limit`);
    } else {
      mutation.mutate({ desc, userid: userId, username });
      setDesc("");
      setFile(null);
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (desc.trim() === "" && !file) {
        alert("Please write something or add an image to share");
        return;
      } else if (isCharLimitExceeded) {
        alert(`Your post exceeds the ${maxCharCount} character limit`);
        return;
      }
      mutation.mutate({ desc, userid: userId, username });
      setDesc("");
      setFile(null);
    }
  };
  
  const handleEmojiClick = (event) => {
    setAnchorEl(event.currentTarget);
    setEmojiPickerOpen(true);
  };
  
  const handleEmojiClose = () => {
    setAnchorEl(null);
    setEmojiPickerOpen(false);
  };
  
  // const handleEmojiSelect = (emoji) => {
  //   setDesc(prev => prev + emoji.native);
  //   handleEmojiClose();
  // };
  
  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     // Check file size (limit to 5MB)
  //     if (selectedFile.size > 5 * 1024 * 1024) {
  //       alert("File is too large. Maximum size is 5MB.");
  //       return;
  //     }
      
  //     // Check file type
  //     const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
  //     if (!validTypes.includes(selectedFile.type)) {
  //       alert("Only JPEG, PNG, and GIF images are allowed.");
  //       return;
  //     }
      
  //     setFile(selectedFile);
  //   }
  // };
  
  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getInitial = (name) => {
    return name?.split(" ")[0][0] || "?";
  };

  return (
    <div className="share-container">
      <div className="share-card">
        <div className="share-header">
          <Avatar 
            className="share-avatar"
            sx={{ 
              width: 40, 
              height: 40, 
              bgcolor: "lightblue", 
              color: "black" 
            }}
          >
            {getInitial(currentUser.name)}
          </Avatar>
          <span className="share-username">{currentUser.name}</span>
        </div>
        
        <div className="share-content">
          <textarea
            className="share-textarea"
            placeholder={`What's on your mind, ${currentUser.name}?`}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            onKeyDown={handleEnter}
            rows={3}
            maxLength={maxCharCount + 10} // Allow a bit over but warn
          />
          
          {file && (
            <div className="share-image-preview">
              <img src={URL.createObjectURL(file)} alt="Upload preview" />
              <button className="share-image-remove" onClick={removeFile}>
                <CancelIcon />
              </button>
            </div>
          )}
          
          <div className="share-char-counter" style={{ color: isCharLimitExceeded ? '#e53e3e' : 'rgba(234, 224, 224, 0.94)' }}>
            {remainingChars} characters remaining
          </div>
        </div>
        
        <div className="share-footer">
          <div className="share-actions">
            <button 
              className="share-action-btn" 
              title="Add emoji" 
              onClick={handleEmojiClick}
            >
              <EmojiEmotionsOutlinedIcon fontSize="small" />
            </button>
            <Popover
              open={emojiPickerOpen}
              anchorEl={anchorEl}
              onClose={handleEmojiClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <div className="emoji-picker">
                {/* Simple emoji picker with common emojis */}
                {["😊", "😂", "❤️", "👍", "🎉", "🔥", "😍", "🤔", "👏", "🙏"].map(emoji => (
                  <button 
                    key={emoji} 
                    className="emoji-btn" 
                    onClick={() => setDesc(prev => prev + emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </Popover>
          </div>
          
          <button 
            className={`share-button ${(isCharLimitExceeded || (desc.trim() === "" && !file)) ? 'share-button-disabled' : ''}`}
            onClick={handleClick}
            disabled={isCharLimitExceeded || (desc.trim() === "" && !file)}
          >
            <span>Share</span>
            <SendIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;