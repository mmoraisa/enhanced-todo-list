import TaskTime from './TaskTime';
class Task {

  constructor(id, description, title, time) {
    this.id = id;
    this.description = description;
    this.done = false;
    this.title = title;

    if(time) {
      this.time = new TaskTime(
        time.hour,
        time.minute,
        time.system
      );
    }
  }

  setDone(done) {
    this.done = done;
  }

}

export default Task;
