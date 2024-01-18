import React, { useState, useEffect } from 'react';
import GitHubCard from './GitHubCard';
import ErrorBoundary from './ErrorBoundary';

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const App: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/siinghd');
        const data: GitHubUser = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ErrorBoundary>
      <div
        style={{
          display: 'flex',
          width: '100dvw',
          margin: 'auto',
          height: '100dvh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {userData && <GitHubCard user={userData} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;
