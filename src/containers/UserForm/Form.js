import React, { forwardRef } from 'react';

import StyledForm from '../../components/Form';
import StyledButton from '../../components/Button';
import FormInput from './FormInput';

const Form = forwardRef((props, ref) => {
  const { inputs, buttonTitle, onSubmit } = props;
  return (
    <StyledForm ref={ref} onSubmit={onSubmit}>
      {inputs.map((item, index) => (
        <FormInput key={`form${index}`} input={item} />
      ))}
      <StyledButton type='submit'>{buttonTitle}</StyledButton>
    </StyledForm>
  );
});

export default Form;
