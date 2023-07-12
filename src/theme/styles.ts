import styled from '@emotion/styled';

const flex_align_center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Overlay = styled.div({
  position: 'fixed',
  display: 'block',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)'
});

export { flex_align_center, Overlay };
