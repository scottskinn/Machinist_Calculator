import React, { useState } from 'react';

function IPTPage() {
  const [feedRate, setFeedRate] = useState('');
  const [spindleSpeed, setSpindleSpeed] = useState('');
  const [feedPerTooth, setFeedPerTooth] = useState('');
  const [ipt, setIPT] = useState('');

  const calculateIPT = () => {
    // Perform IPT (Inches Per Tooth) calculation based on the provided inputs
    const calculatedIPT = (parseFloat(feedRate) / (parseFloat(spindleSpeed) * parseFloat(feedPerTooth))).toFixed(2);

    setIPT(calculatedIPT);
  };

  return (
    <div>
      <h2>IPT Page</h2>
      <p> (IPM / RPM) / Z</p>
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
        <label htmlFor="feedPerTooth">Feed per Tooth:</label>
        <input
          type="text"
          id="feedPerTooth"
          value={feedPerTooth}
          onChange={(e) => setFeedPerTooth(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateIPT}>Calculate IPT</button>
      </div>
      {ipt && (
        <div>
          <h3>IPT (Inches Per Tooth): {ipt} inches/tooth</h3>
        </div>
      )}
    </div>
  );
}

export default IPTPage;
