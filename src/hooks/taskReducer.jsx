import { ACTION_TYPES } from "../store/constants";

export const initialState = [];

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [
        ...state,
        { id: Date.now(), text: action.payload, isCompleted: false },
      ];
    case ACTION_TYPES.DELETE:
      return state.filter((task) => task.id !== action.payload);
    case ACTION_TYPES.TOGGLE:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    case ACTION_TYPES.EDIT:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, text: action.payload.text }
        }
        return task;
      });
    default:
      return state;
  }
};
