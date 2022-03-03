import styled from '@emotion/styled';
import { header, colors, breakpoints } from '../../styles/variables';

const CompanyContainerStyled = styled.div`
  height: 100%;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  
  h1 {
    margin-top: calc(3rem + ${header.height});
    margin-bottom: 1.5rem;
    color: ${colors.black};
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
  }
`;
export default CompanyContainerStyled;
