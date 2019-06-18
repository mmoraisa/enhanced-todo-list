import TaskTime from './TaskTime';
import { pureTaskTimeObject } from './TaskTime.mock';

describe('(Class) TaskTime', () => {

  it('Constructor must sets the object properties', () => {
    const taskTime = new TaskTime(
      pureTaskTimeObject.hour,
      pureTaskTimeObject.minute,
      pureTaskTimeObject.system
    );

    expect(taskTime.hour).toBe(pureTaskTimeObject.hour);
    expect(taskTime.minute).toBe(pureTaskTimeObject.minute);
    expect(taskTime.system).toBe(pureTaskTimeObject.system);
  });

});
