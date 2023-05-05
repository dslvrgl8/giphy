import { useState, useEffect } from 'react';
import './App.css';
import GiphyDisplay from './components/GiphyDisplay';
import Form from './components/Form';

function App() {
  const [giphy, setGiphy] = useState(null);
  const apiKey = 'shEVn20O9IrgO4fQ5MnmgRw4gKSTTdpD';

  const getGiphy = async (searchTerm) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=&limit=25&offset=0&rating=g&lang=en`
    )
    const data = await response.json()
    setGiphy(data)
  }

  useEffect(() => {
    getGiphy('dog')
  }, [])

  return (
    <div className="App">
      <Form giphySearch={getGiphy} />
      <GiphyDisplay giphy={giphy}/>
    </div>
  );
}

export default App;
