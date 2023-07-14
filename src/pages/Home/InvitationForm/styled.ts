import styled from '@emotion/styled';
import { theme } from '../../../theme/theme';

export const Container = styled.div({
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

export const ErrorMessage = styled.div({
  color: theme.color.red,
  fontStyle: 'italic',
  textAlign: 'center'
});
