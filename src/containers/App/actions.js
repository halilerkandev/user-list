import { ADD_USER } from './types';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});
