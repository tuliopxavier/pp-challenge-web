import styled from '@emotion/styled';
import { colors } from '../../styles/variables';

const RolesListStyled = styled.div`
  & form {
  display: flex;
  flex-direction: column;
    
    & label {
      display: inline-block;
      width: fit-content;
      padding: .25rem;
      margin-bottom: -2.4rem;
      margin-left: 1rem;
      background-color: #fff;
      
      color: ${colors.gray};
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      
      z-index: 1;
    }

    & svg {
      color: ${colors.darkGray};
      position: relative;
      width: 1.5rem;
      height: auto;
      top: 2rem;
      left: 1.25rem;
      overflow: visible;
      transform: translateY(20%);
      z-index: 1;
    }

    & input {
      height: 3.25rem;
      border-radius: .5rem;
      border: 2px solid #CAD6D1;
      padding: 0 1rem 0 3rem;

      color: ${colors.black};
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      
      z-index: 0;

      &::placeholder {
        color: ${colors.gray};
        font-size: 16px;
      }
    }
  }

  // TABLE TITLE

  & h3 {
    color: ${colors.darkGray};
  }

  // TABLE CONTENT
  // HEADER

  & .table-header {
    display: grid;
    align-content: center;
    grid-template-columns: 1.55fr 1.55fr 1.55fr 1fr .35fr;
    width: 100%;
    height: 4rem;
    border: 2px solid ${colors.lightGray};
    border-radius: .5rem .5rem 0 0;
    padding-left: 2rem;
    gap: 2rem;

    & h6 {
      color: ${colors.darkGray};
      font-size: 12px;
      font-weight: 600;
      font-style: normal;
    }
  }

  // CONTENT
  & dl {
    list-style: none;
    padding-left: 0;

    & .role-list-line {
      height: 3.5rem;
      padding-left: 2rem;
      border-bottom: 2px solid ${colors.lightGray};
      margin: 1.5rem 0;

      & .role {
        display: grid;
        align-items: center;
        grid-template-columns: 1.55fr 1.55fr 1.55fr 1fr .35fr;
        padding-left: 0;
        gap: 2rem;

        & p {
          color: ${colors.darkGray};
          font-size: 12px;
          font-weight: 400;
          font-style: normal;
        }
      }
    }
  }

`;
export default RolesListStyled;
