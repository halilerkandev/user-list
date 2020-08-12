import produce from 'immer';

import { ADD_USER } from './types';

const initialState = {
  users: [],
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_USER:
        draft.users.push(action.payload);
        break;
    }
  });
