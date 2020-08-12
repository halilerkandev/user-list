import { useReducer, useRef } from 'react';

const INIT_STATE = {
  inputs: [
    {
      id: 1,
      placeholder: 'Enter your name',
      type: 'text',
    },
    {
      id: 2,
      placeholder: 'Enter your email',
      type: 'email',
    },
  ],
};

// TODO: apply custom hooks pattern later
const formReducer = (state, action) => {
  return state;
};

const useFormState = ({
  initialState = INIT_STATE,
  reducer = formReducer,
} = {}) => {
  const initialStateRef = useRef(initialState);
  const [formState] = useReducer(reducer, initialStateRef.current);
  const { inputs } = formState;

  return {
    formState,
    getInputPropsArray: inputs.map((input) => {
      return {
        [input.id]: ({ input, ...otherProps }) => ({
          placeholder: input.placeholder,
          type: input.type,
          ...otherProps,
        }),
      };
    }),
  };
};

useFormState.reducer = formReducer;
useFormState.types = {};

export default useFormState;
