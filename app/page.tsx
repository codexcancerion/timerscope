"use client"
// pages/main-clock.tsx
import React, {useState, useEffect} from 'react';
import ClockComponent from '@/components/orig/clock';
import IntervalAlertComponent from '@/components/orig/interval-alert';
import SessionNotificationComponent from '@/components/orig/session-notification';
import NotificationSettingsComponent from '@/components/orig/notification-settings';
import { DateTime } from 'luxon'; // Using luxon for time zone handling
import SessionAlert from '@/components/orig/session-alert';


const MainClockPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<DateTime>(DateTime.now());
  const fifteen = 15;
  const thirty = 30;
  const sixty = 60;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-400">Timer Scope</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Real-Time Clock */}
        <ClockComponent />

        {/* Interval Alert */}
        <div className="mt-6  lg:flex md:flex gap-5 w-full">
          <IntervalAlertComponent frame={fifteen} intervalMinutes={(fifteen * 60) - (((currentTime.minute % fifteen)*60) + currentTime.second)} />
          <IntervalAlertComponent frame={thirty} intervalMinutes={(thirty * 60) - (((currentTime.minute % thirty)*60) + currentTime.second)} />
          <IntervalAlertComponent frame={sixty} intervalMinutes={(sixty * 60) - (((currentTime.minute % sixty)*60) + currentTime.second)} />
        </div>

        {/* Session Notifications */}
        <div className="mt-6 lg:flex md:flex gap-5 w-full">
          <SessionAlert frame={"Tokyo"} intervalSeconds={((((24 - currentTime.hour) + 8) * 60) * 60) - (((60 - currentTime.minute)*60) + currentTime.second)} />
          <SessionAlert frame={"London"} intervalSeconds={((((24 - currentTime.hour) + 15) * 60) * 60) - (((60 - currentTime.minute)*60) + currentTime.second)} />
          <SessionAlert frame={"New York"} intervalSeconds={((((24 - currentTime.hour) + 20) * 60) * 60) - (((60 - currentTime.minute)*60) + currentTime.second)} />
        </div>
      </div>
    </div>
  );
};

export default MainClockPage;
