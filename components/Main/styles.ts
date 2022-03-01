import styled from '@emotion/styled';
import { colors } from '../../styles/variables';

const MainStyled = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.background};
  z-index: -2;
`;

export default MainStyled;
