import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectGlobal = (state) => state.global || initialState;

export const selectRouter = (state) => state.router;

export const makeSelectUsers = () =>
  createSelector(selectGlobal, (globalState) => globalState.users);
