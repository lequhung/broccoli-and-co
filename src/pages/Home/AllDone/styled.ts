import styled from '@emotion/styled';
import { flex_align_center } from '../../../theme/styles';
import { theme } from '../../../theme/theme';

export const Container = styled.div({
  ...flex_align_center,
  flexDirection: 'column',
  padding: '40px',
  width: '410px',

  backgroundColor: theme.color.white,
  border: `1px solid ${theme.color.black}`,
  textAlign: 'center'
});

export const Separator = styled.hr({
  width: '70px'
});

export const Content = styled.div({
  margin: '32px 0',

  span: {
    display: 'block'
  }
});
