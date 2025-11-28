import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent Rendered");

  const handleBookEvent = useCallback(() => {
    console.log("Event booked successfully!");
    alert("Event booked successfully!");
  }, []);

  return (
    <div>
      <h2>Event Booking Portal</h2>

      <button onClick={handleBookEvent}>Book Event</button>

      <p>Unrelated Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;
