import React, { useContext } from "react";
import { useQuery } from 'react-query';
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import logo from "../../images/icon.jpg";
import "./Profile.css";

const Profile = () => {
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser.id;

    const { isLoading, error, data } = useQuery(['profile-post'], () =>
        makeRequest.get("/users/postno/" + userId).then((res) => {
            return res.data;
        })
    );

    const userData = !isLoading && !error ? data[0] : null;

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-background"></div>
                <div className="profile-avatar-container">
                    <img className="profile-avatar" alt="User avatar" src={logo} />
                </div>
            </div>
            
            <div className="profile-content">
                <h1 className="profile-name">{currentUser.name}</h1>
                
                <div className="profile-bio">
                    <span className="bio-label">Bio:</span>
                    <p className="bio-text">
                        {error ? "Something went wrong!" : (isLoading ? "Loading..." : userData.bio)}
                    </p>
                </div>
                
                <div className="profile-stats">
                    <div className="stat-item">
                        <span className="stat-value">{error ? "?" : (isLoading ? "..." : userData.pno)}</span>
                        <span className="stat-label">Posts</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{error ? "?" : (isLoading ? "..." : userData.cno)}</span>
                        <span className="stat-label">Comments</span>
                    </div>
                </div>
                
                <div className="profile-actions">
                    <a href="/editprofile" className="profile-button primary-button">
                        Edit Profile
                    </a>
                    <a href="https://forms.gle/64NtFdzLG3YLytxN7" className="profile-button secondary-button" target="_blank" rel="noopener noreferrer">
                        Become Verified
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;