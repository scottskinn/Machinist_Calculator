import React, { useState } from 'react';
import "./styles.css"

function FeedRatesPage() {
  const [feedRate, setFeedRate] = useState('');
  const [spindleSpeed, setSpindleSpeed] = useState('');
  const [feedPerTooth, setFeedPerTooth] = useState('');

  const calculateFeedPerTooth = () => {
    // Perform feed per tooth calculation based on the provided inputs
    const calculatedFeedPerTooth = (parseFloat(feedRate) / (parseFloat(spindleSpeed) * 2)).toFixed(2);

    setFeedPerTooth(calculatedFeedPerTooth);
  };

  return (
    <div className='FeedRatesPage'>
      <h2>Feed Rates Page</h2>
      <div>
        <label htmlFor="feedRate">Feed Rate:</label>
        <input
          type="text"
          id="feedRate"
          value={feedRate}
          onChange={(e) => setFeedRate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="spindleSpeed">Spindle Speed:</label>
        <input
          type="text"
          id="spindleSpeed"
          value={spindleSpeed}
          onChange={(e) => setSpindleSpeed(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateFeedPerTooth}>Calculate Feed per Tooth</button>
      </div>
      {feedPerTooth && (
        <div>
          <h3>Feed per Tooth: {feedPerTooth} inches/tooth</h3>
        </div>
      )}
    </div>
  );
}

export default FeedRatesPage;
