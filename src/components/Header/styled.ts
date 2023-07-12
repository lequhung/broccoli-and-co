import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const Container = styled.header({
  padding: '24px 48px',
  '@media only screen and (min-width:679px)': {
    padding: '24px 96px'
  },
  position: 'fixed',
  width: '100%',

  textTransform: 'uppercase',
  fontWeight: 700,
  borderBottom: `1px solid ${theme.color.black}`,
  background: theme.color.white,
  fontSize: '24px'
});
