import styled from '@emotion/styled';
import { colors, breakpoints } from '../../styles/variables';

const SideBarStyled = styled.aside`
  width: 256px;
  max-width: 13.3%;
  max-height: 100%;
  min-height: 100vh;
  background-color: #fff;
  border-bottom: 1px solid ${colors.lightGray};
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  z-index: -1;

  @media (max-width: ${breakpoints[1200]}) {
    display: none;
  }
`;
export default SideBarStyled;
