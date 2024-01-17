import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const changeBackground = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        transition: 'background-color 0.5s',
        width: '100dvw',
      }}
    >
      <button
        onClick={changeBackground}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '50px',
        }}
      >
        Change Background
      </button>
    </div>
  );
}

export default App;
