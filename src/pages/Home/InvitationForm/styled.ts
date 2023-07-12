import styled from '@emotion/styled';
import { theme } from '../../../theme/theme';
import { flex_align_center } from '../../../theme/styles';

export const Container = styled.div({
  ...flex_align_center,
  flexDirection: 'column',
  padding: '40px',
  width: '410px',

  backgroundColor: theme.color.white,
  border: `1px solid ${theme.color.black}`,

  input: {
    marginBottom: '12px',
    maxWidth: '500px',

    '&:last-of-type': {
      marginBottom: '70px'
    }
  },

  button: {
    marginBottom: '12px',

    '&:last-of-type': {
      marginBottom: '32px'
    }
  }
});

export const Separator = styled.hr({
  width: '70px',
  marginBottom: '56px'
});

export const ErrorMessage = styled.div({
  color: theme.color.red,
  fontStyle: 'italic'
});
