import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Task from '../classes/Task';
import { PINK } from '../defaults/Colors';

const TaskListItem = ({ task }) => (
  <TaskListItemWrapper>
    <TaskListItemDoneIndicator done={task.done} />
    <TaskListItemInfo>
      <TaskListItemTitle>{task.title}</TaskListItemTitle>
      {
        task.time &&
        <TaskListItemTime>
          {task.time.hour}
          {
            task.time.minute !== '00'
            ? `:${task.time.minute}`
            : ''
          } {task.time.system}
        </TaskListItemTime>
      }
    </TaskListItemInfo>
  </TaskListItemWrapper>
);

const TaskListItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

const TaskListItemDoneIndicator = styled.div`
  border: 1px solid transparent;
  border-radius: 50%;
  height: 13px;
  margin-right: 15px;
  width: 13px;
  ${props => (
    props.done
    ? css`
      background: ${PINK};
    `
    : css`
      border-color: ${PINK};
    `
  )}
`;

const TaskListItemInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const TaskListItemTitle = styled.span`
  font-size: 18px;
`;

const TaskListItemTime = styled.span`
  color: #ffffff66;
  font-size: 14px;
  margin: 10px 0 0 0;
`;

TaskListItem.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
};

export default TaskListItem;
