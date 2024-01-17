import './App.css';
import UserProfileCard from './UserProfileCard';

function App() {
  return (
    <div className="App">
      <UserProfileCard
        name="Rita Correia"
        age="32"
        location="London"
        followers="80K"
        likes="803K"
        photos="1.4K"
      />
    </div>
  );
}

export default App;
