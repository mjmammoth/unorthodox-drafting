import React, { useEffect, useState } from 'react';

function LegCountFilter({ state, onChange }) {
  const [legCount, setLegCount] = useState(state);

  useEffect(() => {
    // This ensures the component updates if the parent's state changes
    setLegCount(state);
  }, [state]);

  const handleChange = (e) => {
    const newLegCount = parseInt(e.target.value, 10);
    setLegCount(newLegCount);
    // Notify the parent component of the change
    if (onChange) onChange(newLegCount);
  };

  return (
    <div>
      <label htmlFor="leg-count">Number of Legs: </label>
      <input
        id="leg-count"
        type="number"
        value={legCount}
        onChange={handleChange}
        min="0" // Limit to non-negative integers
      />
    </div>
  );
}

export default LegCountFilter;

