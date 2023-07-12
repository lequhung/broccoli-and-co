import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { flex_align_center } from '../../theme/styles';

export const Container = styled.footer({
  ...flex_align_center,
  flexDirection: 'column',
  padding: '24px 0',
  width: '100%',

  borderTop: `1px solid ${theme.color.black}`,
  background: theme.color.white,

  span: {
    fontStyle: 'italic',

    marginTop: '8px'
  }
});
