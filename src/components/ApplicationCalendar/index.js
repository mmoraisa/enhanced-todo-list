import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { changeDate } from '../../ducks/Calendar';
import { getDateKey } from '../../utility/Utils';
import './calendar.css';

const ApplicationCalendar = () => {

  const selectedDate = useSelector(
    ({ calendar }) => calendar.selectedDate,
    []
  );

  const daysWithTasks = useSelector(
    ({ tasks }) => Object.keys(tasks.data).filter(dateKey =>
      Object.keys(tasks.data[dateKey]).length
    ),
    []
  );

  const dispatch = useDispatch();

  const onChange = selectedDate =>
    dispatch(changeDate(selectedDate));

  return (
    <Calendar
      onChange={onChange}
      value={selectedDate}
      tileClassName={
        ({ date, view }) => {
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();

          const today = new Date();

          return (
            view === 'month' && daysWithTasks.includes(getDateKey(date))
            ? '--has-tasks'
            : (
              today.getFullYear() === year
              && today.getMonth() === month
              && today.getDate() === day
              ? '--is-today'
              : null
            )
          );
        }
      }
    />
  );
};

export default ApplicationCalendar;
