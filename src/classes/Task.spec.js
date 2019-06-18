import Task from './Task';
import { pureTaskObject } from './Task.mock';

describe('(Class) Task', () => {

  it('Constructor must sets the object properties', () => {
    const task = new Task(
      pureTaskObject.id,
      pureTaskObject.description,
      pureTaskObject.title
    );

    expect(task.id).toBe(task.id);
    expect(task.description).toBe(task.description);
    expect(task.title).toBe(task.title);
  });

});
