import React from 'react';

type GitHubUser = {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
};

const GitHubCard: React.FC<{ user: GitHubUser }> = ({ user }) => {
  console.log(user);
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Repositories: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
};

export default GitHubCard;
