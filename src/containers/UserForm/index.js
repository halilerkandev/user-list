import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addUser } from '../App/actions';
import Form from './Form';
import useFormState from './useFormState';

const UserForm = () => {
  const { formState } = useFormState();
  const { inputs } = formState;
  const dispatch = useDispatch();

  // TODO: find better solution for DOM ref
  const formRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: formRef.current[0].value,
      email: formRef.current[1].value,
    };

    dispatch(addUser(user));

    formRef.current[0].value = '';
    formRef.current[1].value = '';
  };

  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        inputs={inputs}
        buttonTitle='Add'
        ref={formRef}
      />
    </div>
  );
};

export default UserForm;
