import React from 'react';
import * as Styled from './styled';

type ButtonPropsBase = {
  id: string;
  type: 'button' | 'reset' | 'submit';
};

type Props = ButtonPropsBase & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, Props>(({ id, type, ...props }, ref) => {
  return <Styled.Button ref={ref} id={id} type={type} {...props} />;
});

Button.displayName = 'Button';

export default Button;
