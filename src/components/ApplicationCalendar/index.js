import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { changeDate } from '../../ducks/Calendar';
import './calendar.css';

const ApplicationCalendar = () => {

  const selectedDate = useSelector(
    ({ calendar }) => calendar.selectedDate,
    []
  );

  const dispatch = useDispatch();

  function onChange(selectedDate) {
    return dispatch(changeDate(selectedDate));
  }

  return (
    <Calendar
      onChange={onChange}
      value={selectedDate}
    />
  );
};

export default ApplicationCalendar;
