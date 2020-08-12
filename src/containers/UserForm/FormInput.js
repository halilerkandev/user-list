import React, { forwardRef, useState } from 'react';

import Input from '../../components/Input';

const FormInput = forwardRef(({ input, ...restProps }, ref) => {
  const [text, setText] = useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <Input
      type={input.type}
      placeholder={input.placeholder}
      onChange={handleOnChange}
      value={text}
      ref={ref}
      {...restProps}
    />
  );
});

export default FormInput;
