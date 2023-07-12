import React from 'react';
import { render } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
  test('should display an input', () => {
    const { container } = render(<Input id="id" type="text" name="name" />);
    expect(container.querySelector('input#id')).toBeInTheDocument();
  });

  test('should display an input with error', () => {
    const { container } = render(<Input id="id" type="text" name="name" error="error" />);
    expect(container.querySelector('span')).toHaveTextContent('error');
  });
});
