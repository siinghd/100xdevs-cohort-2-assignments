import React from 'react';
import './UserProfile.css'; // Make sure to create a corresponding CSS file
interface IProps {
  name: string;
  age: string;
  location: string;
  followers: string;
  likes: string;
  photos: string;
}

const UserProfileCard: React.FC<IProps> = ({
  name,
  age,
  location,
  followers,
  likes,
  photos,
}) => {
  return (
    <div className="profile-card">
      <div className="cover">
        <div className="profile-pic">
          <img
            src="https://images.hsingh.site/?url=https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-wolfs-full-hd-wallpaper-art-wallpaper-1920x1080-1080p-image_2571308.jpg&w=120&h=120"
            alt="Hero Alom"
          />
        </div>
      </div>
      <div className="profile-info">
        <h3>
          {name} <span>{age}</span>
        </h3>
        <p>{location}</p>
        <div className="profile-stats">
          <div>
            <strong>{followers}</strong>
            <span>Followers</span>
          </div>
          <div>
            <strong>{likes}</strong>
            <span>Likes</span>
          </div>
          <div>
            <strong>{photos}</strong>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
