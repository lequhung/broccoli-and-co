import styled from '@emotion/styled';
import { flex_align_center } from '../../theme/styles';
import Button from '../../components/Button/Button';

export const Content = styled.div({
  ...flex_align_center,
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh'
});

export const Heading = styled.h1({
  fontSize: '38px',
  textAlign: 'center',
  marginBottom: '16px',

  span: {
    display: 'block'
  }
});

export const RequestButton = styled(Button)({
  maxWidth: '175px',
  marginTop: '16px'
});
