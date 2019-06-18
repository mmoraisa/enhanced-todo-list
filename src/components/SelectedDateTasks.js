import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import WeekDays from '../defaults/WeekDays';
import WeekDay from './WeekDay';
import TaskList from './TaskList';
import SelectedDateHorizontalRule from './SelectedDateHorizontalRule';
import { getDateKey, getOrdinalSup } from '../utility/Utils';

const SelectedDateTasks = () => {

  const selectedDate = useSelector(
    ({ calendar }) => calendar.selectedDate,
    []
  );

  const dateTasks = useSelector(
    ({ calendar, tasks }) => {
      const dateKey = getDateKey(calendar.selectedDate);
      const dateTasks = tasks.data[dateKey];

      return (
        dateTasks && Object.keys(dateTasks).length
        ? Object.keys(dateTasks)
            .map(taskId => tasks.data[dateKey][taskId])
        : []
      );
    },
    []
  );

  return (
    <Fragment>
      <WeekDay>
        {WeekDays[selectedDate.getDay()]}, {selectedDate.getDate()}<sup>{getOrdinalSup(selectedDate.getDate())}</sup>
      </WeekDay>
      <SelectedDateHorizontalRule />
      <TaskList tasks={dateTasks} />
    </Fragment>
  );

};

export default SelectedDateTasks;
