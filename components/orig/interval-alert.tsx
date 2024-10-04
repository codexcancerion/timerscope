"use client"
// components/IntervalAlertComponent.tsx
import React, { useState, useEffect } from 'react';

interface IntervalAlertProps {
  intervalMinutes: number; // The time interval for the alert in minutes
  frame: number
}

const IntervalAlertComponent: React.FC<IntervalAlertProps> = ({ frame, intervalMinutes }) => {
  const [timeLeft, setTimeLeft] = useState<number>(intervalMinutes); // in seconds
  const [timeRes, setTimeRes] = useState(intervalMinutes);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : timeRes));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [intervalMinutes]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white text-center w-full my-2">
        <p className='text-gray-500 font-bold'>{frame} Minutes</p>
          { timeLeft <= 10 ? 
            (<span className="font-bold text-4xl text-red-500">{formatTime(timeLeft)}</span>) :
            (<span className="font-bold text-2xl">{formatTime(timeLeft)}</span>)
          }          
    </div>
  );
};

export default IntervalAlertComponent;
