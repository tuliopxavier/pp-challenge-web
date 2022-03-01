import styled from '@emotion/styled';
import { header, colors } from '../../styles/variables';

const RoleContentContainerStyled = styled.div`
  background-color: #fff;
  width: 956px;
  height: 100%;
  margin-bottom: 5rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);

  // ROLES DATA SECTION

  & .roles-data-section {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    margin: 2.5rem 0;

    & h3 {
      margin: 0 0 1.5rem;
    }

    & .data-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      & .select-wrapper {
        position: relative;

        & label {
          background-color: #fff;
          border-radius: 0.5rem;
          padding: 0 0.5rem;
          position: absolute;
          top: -0%;
          left: 4.5%;

          color: ${colors.gray};
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20%;
        }

        & select {
          width: 26rem;
          height: 3.5rem;
          padding: 1rem 1.5rem 1rem 1.25rem;
          border-radius: 0.5rem;
          border: 2px solid ${colors.lightGray};
          background-color: #f5faf8;

          color: ${colors.darkGray};
          font-style: normal;
          font-weight: 500;
          font-size: 16px;

          cursor: pointer;
          transition: background-color 0.25s ease;

          &:hover {
            background-color: #fff;
          }

          & option {
            padding-right: 1rem;
          }
        }
      }
    }
  }

  & h3 {
    margin: 2.5rem 0 1.5rem;
  }

  // ROLES TABLE SECTION
  // HEADER

  & .table-header {
    display: grid;
    align-content: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    width: 100%;
    height: 4rem;
    border: 2px solid ${colors.lightGray};
    border-radius: 0.5rem 0.5rem 0 0;
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

  & ul {
    list-style: none;
    margin: 0;
    padding-left: 2rem;

    & .role-permission-line {
      display: grid;
      align-items: center;
      grid-template-columns: 3fr 1fr 1fr 1fr;
      width: 100%;
      gap: 2rem;
    }
  }
`;
export default RoleContentContainerStyled;
