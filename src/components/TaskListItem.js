import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../classes/Task';
import { updateTaskStatus } from '../ducks/Tasks';
import { PINK } from '../defaults/Colors';

const TaskListItem = ({ task }) => {

  const dispatch = useDispatch();

  const selectedDate = useSelector(
    ({ calendar }) => calendar.selectedDate,
    []
  );

  const onClickStatusIndicator = () => {
    dispatch(updateTaskStatus(selectedDate, task.id, !task.done));
  };

  return (
    <TaskListItemWrapper>
      <TaskListItemStatusIndicator
        done={task.done}
        onClick={onClickStatusIndicator} />
      <TaskListItemInfo>
        <TaskListItemTitle>{task.title}</TaskListItemTitle>
        <TaskListItemDescription>{task.description}</TaskListItemDescription>
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
)
};

const TaskListItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

const TaskListItemStatusIndicator = styled.div`
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  height: 13px;
  margin-right: 15px;
  transition: .25s all ease;
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

const TaskListItemDescription = styled.span`
  font-size: 14px;
  color: #ffffff91;
  margin: 10px 0;
`;

const TaskListItemTime = styled.span`
  color: #ffffff30;
  font-size: 14px;
`;

TaskListItem.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
};

export default TaskListItem;
