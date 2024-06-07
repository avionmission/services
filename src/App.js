import logo from './logo.svg';
import './index.css';
import { Player } from 'video-react';

function App() {
  return (
    <div className="App">
      <p>Logo</p>
      <h1>Lorem Ipsum Heading Cool Hook</h1>
      <h2>Subtitle that tackles the objection and pitches the idea.</h2>
      
        <Player
        playsInline
        poster="https://static-cse.canva.com/blob/1539793/1600w-wlXEWqHuexQ.jpg"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        className="Player"
      />

      <button>Book a call</button>
      
    </div>
  );
}

export default App;
