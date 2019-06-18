import Task from './Task';
import { pureTaskObject } from './Task.mock';
import { pureTaskTimeObject } from './TaskTime.mock';
import TaskTime from './TaskTime';

describe('(Class) Task', () => {

  it('Constructor must sets the object properties', () => {
    const task = new Task(
      pureTaskObject.id,
      pureTaskObject.description,
      pureTaskObject.title
    );

    expect(task.id).toBe(pureTaskObject.id);
    expect(task.description).toBe(pureTaskObject.description);
    expect(task.title).toBe(pureTaskObject.title);
  });

  it('Constructor initialize with done as false', () => {
    const task = new Task(
      pureTaskObject.id,
      pureTaskObject.description,
      pureTaskObject.title
    );

    expect(task.done).toBe(false);
  });

  it('Constructor initialize time as an instance of TaskTime', () => {
    const task = new Task(
      pureTaskObject.id,
      pureTaskObject.description,
      pureTaskObject.title,
      pureTaskTimeObject
    );

    expect(task.time).toBeInstanceOf(TaskTime);
  });

  describe('Functions', () => {

    it('(Function) setDone', () => {
      const task = new Task(
        pureTaskObject.id,
        pureTaskObject.description,
        pureTaskObject.title
      );

      task.setDone(true);
      expect(task.done).toBe(true);
    });

  });

});
