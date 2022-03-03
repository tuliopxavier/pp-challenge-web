import styled from '@emotion/styled';
import { breakpoints, colors } from '../../styles/variables';

const StaffBoxStyled = styled.div`
  background-color: #fff;
  width: 919px;
  max-width: 60rem;
  height: 100%;
  margin-bottom: 5rem;
  border-radius: .5rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);

  @media (max-width: ${breakpoints[992]}) {
    width: 100%;
  }

  .tabs {
    display: flex;

    & .tab {
      background-color: transparent;
      border: none;
      text-align: center;
      width: 13rem;
      border-bottom: 2px solid ${colors.lightGray};
      margin-bottom: 2.5rem;
      transition: background-color .25s ease;
      
      &:hover {
        background-color: ${colors.lightGray};
        cursor: pointer;
      }
  
      &.staff:first-of-type,
      &.rules:nth-of-type(2) {
        border-bottom: 2px solid ${colors.green};

        & p {
          color: ${colors.black};
        }
      }
  
      & p {
        color: ${colors.gray};
        margin-bottom: 1rem;
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
      }
      
      &:last-of-type {
        width: 100%;
        background-color: initial;
        cursor: initial;
      }
    }
  }

  & h3 {
    color: ${colors.darkGray};
    margin: 2.5rem 0;
  }

`;
export default StaffBoxStyled;
