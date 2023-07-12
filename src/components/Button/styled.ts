import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const Button = styled.button({
  padding: '16px',
  width: '100%',
  boxSizing: 'border-box',

  border: `1px solid ${theme.color.black}`,
  background: theme.color.white,
  fontFamily: 'monospace',
  cursor: 'pointer',
  '&:hover': {
    color: theme.color.white,
    background: theme.color.black
  }
});
