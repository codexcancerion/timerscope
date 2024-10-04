"use client"
// components/SessionNotificationComponent.tsx
import React from 'react';

interface Session {
  name: string;
  startTime: string; // e.g., "14:00"
}

const sessions: Session[] = [
  { name: 'London Session', startTime: '08:00' },
  { name: 'New York Session', startTime: '14:00' },
  { name: 'Tokyo Session', startTime: '23:00' },
];

const SessionNotificationComponent: React.FC = () => {
  return (
    <div className="w-full text-center bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Upcoming Trading Sessions</h3>
      <div className="w-full flex gap-5">
        <div className='w-full text-center'>
          <p>Tokyo</p>
          <span className="text-blue-500 font-bold text-2xl">08:00</span>
        </div>

        <div className='w-full text-center'>
          <p>London</p>
          <span className="text-blue-500 font-bold text-2xl">15:00</span>
        </div>

        <div className='w-full text-center'>
          <p>New York</p>
          <span className="text-blue-500 font-bold text-2xl">20:00</span>
        </div>
      </div>

    </div>
  );
};

export default SessionNotificationComponent;
