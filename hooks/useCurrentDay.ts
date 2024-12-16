import { useState, useEffect } from 'react';

export const useCurrentDay = () => {
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    const dayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' });
    setCurrentDay(dayOfWeek);
  }, []);

  return currentDay;
};