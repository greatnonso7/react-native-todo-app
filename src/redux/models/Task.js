import {reducerActions as reducers} from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IState = {
  isError: false,
  tasks: [],
};

export const Task = {
  name: 'Task',
  state: IState,
  reducers,
  effects: (dispatch: {[key: string]: any}) => ({
    async getTasks(_, state) {
      dispatch.Task.setError(false);

      if (state.Task.tasks > 0) return;

      try {
        const data = await state.Task.tasks;
        if (data) {
          return data;
        }
      } catch (error) {
        this.handleError(error);
      }
    },

    async addSingleTask({callback, data}, state) {
      dispatch.Task.setError(false);
      console.log(state, 'my state');
      try {
        console.log(typeof state.Task.tasks);
        const response = state.Task.tasks.push(data);
        if (response) {
          this.getTasks();
        }
      } catch (e) {
        this.handleError(e);
      }
    },

    async completeTask(id, state) {
      dispatch.Task.setError(false);
      try {
        const data = state.Task.tasks.findIndex(task => task.taskId === id);
        console.log(data);
        state.Task.tasks[data] = {...state.Task.tasks[data], isCompleted: '1'};
        dispatch.Task.setState(state.Task.tasks);
      } catch (error) {
        console.log(error);
        dispatch.Account.setError(true);
      }
    },

    async handleError(error) {
      dispatch.Task.setError(true);
      console.log(error);
    },
  }),
};
