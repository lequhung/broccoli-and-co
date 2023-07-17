import React from 'react';

type HeadingPropsBase = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type Props = HeadingPropsBase & React.HTMLAttributes<HTMLHeadingElement>;

const Heading = React.forwardRef<HTMLHeadingElement, Props>(({ level, ...props }, ref) => {
  return React.createElement(level, { ...props, ref });
});

Heading.displayName = 'Heading';

export default Heading;
