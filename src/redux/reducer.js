import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actionTypes';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, done: false }],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
