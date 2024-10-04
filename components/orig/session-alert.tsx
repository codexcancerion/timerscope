"use client"
// components/IntervalAlertComponent.tsx
import React, { useState, useEffect } from 'react';

interface SessionAlertProps {
  intervalSeconds: number;
  frame: string
}

const SessionAlert: React.FC<SessionAlertProps> = ({ frame, intervalSeconds }) => {
  const [timeLeft, setTimeLeft] = useState<number>(intervalSeconds % 86400); // in seconds
  const [timeRes, setTimeRes] = useState(intervalSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : timeRes));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [intervalSeconds]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-gray-700 text-center w-full  my-2">
      <p className='text-gray-500 font-bold'>{frame}</p>
      {timeLeft <= 10 ?
        (<span className="font-bold text-4xl text-red-500">{formatTime(timeLeft)}</span>) :
        (<span className="font-bold text-2xl">{formatTime(timeLeft)}</span>)
      }
    </div>
  );
};

export default SessionAlert;
