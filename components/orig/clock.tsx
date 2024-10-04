"use client"
// components/ClockComponent.tsx
import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon'; // Using luxon for time zone handling

const ClockComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<DateTime>(DateTime.now());
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      setMinutes(currentTime.minute);
  }, [currentTime]);

  return (
    <div className="text-center py-10">
      {
        currentTime.minute === 14 || currentTime.minute === 29 || currentTime.minute === 44 || currentTime.minute === 59 ?
        (<h1 className="text-red-800 lg:text-8xl text-6xl font-bold">{currentTime.toFormat('HH:mm:ss')}</h1>) :
        (<h1 className="text-blue-900 lg:text-8xl text-6xl font-bold">{currentTime.toFormat('HH:mm:ss')}</h1>)
      }
      <p className="text-gray-400 text-3xl font-bold">{currentTime.toFormat('hh:mm:ss')}</p>
      <p className="text-sm mt-1 text-gray-400">
        {currentTime.toFormat('cccc, LLL dd yyyy')} (UTC{currentTime.toFormat('Z')})
      </p>
    </div>
  );
};

export default ClockComponent;
