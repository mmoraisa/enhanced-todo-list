import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './calendar.css';

const ApplicationCalendar = ({ onChange }) => (
  <Calendar
    onChange={onChange}
  />
);

ApplicationCalendar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ApplicationCalendar;
