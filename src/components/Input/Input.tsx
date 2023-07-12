import React from 'react';
import * as Styled from './styled';

type InputPropsBase = {
  id: string;
  type: 'text' | 'email'; // add more type if needed
  name: string;
  error?: string;
};

type Props = InputPropsBase & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>(({ id, type, name, error, ...props }, ref) => {
  return (
    <>
      {error && <Styled.ErrorMessage id={`${id}-error`}>{error}</Styled.ErrorMessage>}
      <Styled.Input ref={ref} id={id} type={type} name={name} isError={!!error} {...props} />
    </>
  );
});

Input.displayName = 'Input';

export default Input;
