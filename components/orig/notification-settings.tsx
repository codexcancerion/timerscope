"use client"
// components/NotificationSettingsComponent.tsx
import React, { useState } from 'react';

const NotificationSettingsComponent: React.FC = () => {
  const [interval, setInterval] = useState<number>(15); // Default 1 hour

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Alert Settings</h3>
      
      <div className="mb-4">
        <label className="block mb-2">Set Alert Interval (Minutes):</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block mb-2">Notification Preferences:</label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          Sound Alerts
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          Push Notifications
        </label>
      </div>
    </div>
  );
};

export default NotificationSettingsComponent;
