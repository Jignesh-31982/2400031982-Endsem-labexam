import React, { memo } from "react";

function BookEventButton({ onBook }) {
  console.log("Child Rendered");
  return <button onClick={onBook}>Book Event</button>;
}

export default memo(BookEventButton);
