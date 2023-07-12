import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const Input = styled.input<{ isError: boolean }>(({ isError }) => ({
  padding: '16px',
  width: '100%',
  boxSizing: 'border-box',

  fontFamily: 'monospace',
  border: `1px solid ${isError ? theme.color.red : theme.color.black}`,
  background: theme.color.white
}));

export const ErrorMessage = styled.span({
  display: 'inline-block',
  marginBottom: '8px',

  color: theme.color.red
});
