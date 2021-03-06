import {
  ADD_TASK,
  CHECK_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  LOAD_TASKS,
} from './types';

export const addTask = (content: string, id: string) => ({
  type: ADD_TASK,
  payload: { content, id },
});

export const removeTask = (id: string) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const editTask = (content: string, id: string) => ({
  type: EDIT_TASK,
  payload: { content, id },
});

export const checkTask = (id: string) => ({
  type: CHECK_TASK,
  payload: id,
});

export const loadTasks = () => {
  return {
    type: LOAD_TASKS,
  };
};
