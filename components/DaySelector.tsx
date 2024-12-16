import React from 'react';

const DaySelector = ({ onSelect }: { onSelect: (day: string) => void }) => {
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

  return (
    <div>
      <h2>Today's Workout: {currentDay}</h2>
      <button onClick={() => onSelect(currentDay)}>Use Preset Routine</button>
      <button onClick={() => onSelect('manual')}>Manual Selection</button>
    </div>
  );
};

export default DaySelector;
