import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Task from '../classes/Task';
import TaskListItem from './TaskListItem';
import { TRANSPARENT_PINK } from '../defaults/Colors';

const TaskList = ({ tasks }) => (
  <TaskListWrapper>
    {
      tasks.map((task, i) =>
        <Fragment key={task.id}>
          <TaskListItem
            task={task} />
          {
            i < tasks.length - 1 &&
            <TaskListItemHorizontalRule />
          }
        </Fragment>
      )
    }
  </TaskListWrapper>
);

const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskListItemHorizontalRule = styled.hr`
  border: none;
  border-bottom: 1px solid ${TRANSPARENT_PINK};
  width: calc(100% - 60px);
`;

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.instanceOf(Task)
  ).isRequired,
};

export default React.memo(TaskList);
