import quotes from '/Users/coreycosman/random-quote/src/QuotesDatabase.js';
import "./App.css";
import React from 'react';
import { useState } from 'react';


function App() {
  const [quote, setQuote] = useState(quotes[0]);

  return (
     <div className='quotebox'>
       {quote.quote} 
       <div>
         by {quote.author}
       </div>
      <button onClick={()=> setQuote(quotes[Math.floor(Math.random()*10)])}>New Quote</button>
    </div>
  );
}

export default App;
