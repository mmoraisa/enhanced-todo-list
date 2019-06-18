import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './calendar.css';

const ApplicationCalendar = () => {
  return (
    <Calendar
      onChange={console.log}
    />
  );
};

export default ApplicationCalendar;
