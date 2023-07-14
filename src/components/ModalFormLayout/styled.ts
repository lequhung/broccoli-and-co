import styled from '@emotion/styled';
import { flex_align_center } from '../../theme/styles';
import { theme } from '../../theme/theme';

export const Container = styled.div<{ width: string }>(({ width }) => ({
  ...flex_align_center,
  flexDirection: 'column',
  padding: '20px 40px 40px',
  width: width,

  backgroundColor: theme.color.white,
  border: `1px solid ${theme.color.black}`
}));

export const Close = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'right',
  justifyContent: 'right',
  width: '100%',

  button: {
    padding: 0,

    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '28px'
  }
});

export const Separator = styled.hr({
  width: '70px'
});

export const Content = styled.div({
  margin: '32px 0'
});
