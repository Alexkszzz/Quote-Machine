import './App.css';
import { FaTwitter } from "react-icons/fa";
import { useState, useEffect } from 'react';
import quotes from "./assets/quotes.json"

function App() {
  const [curQuote, setCurQuote] = useState("")

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurQuote(quotes[randomIndex])
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <div id="quote-box">

        <div id="quote-text">
          <span id="text">{curQuote.quote}</span>
        </div>
        <div id="quote-author">
          <span id="author">- {curQuote.author}</span>
        </div>
        <div id="buttons">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${curQuote.quote}`}><span id="icon"><FaTwitter /></span></a>
          <button id="new-quote" onClick={getQuote}>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
