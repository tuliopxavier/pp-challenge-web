import styled from '@emotion/styled';
import { breakpoints, colors } from '../../styles/variables';

const AgentContainerStyled = styled.div`
  background-color: #fff;
  width: 919px;
  max-width: 60rem;
  height: 100%;
  margin-bottom: 5rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);

  @media (max-width: ${breakpoints[992]}) {
    width: 95vw;
  }

  & .profile-header {
    display: flex;
    align-items: center;
    margin: 0;

    & .avatar-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      background-color: ${colors.lightGray};
      border-radius: 50%;
      overflow: hidden;

      & svg {
        color: ${colors.darkGray};
        width: 2.5rem;
        height: auto;
      }
    }

    & .agent-name {
      & h2 {
        margin: 0;
        color: ${colors.black};
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
      }
      & small {
        color: ${colors.darkGray};
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
      }
    }
  }

  & h3 {
    margin: 2.5rem 0 1.5rem;
  }

  // AGENT INFO SECTION

  & .info-section {
    display: flex;
    gap: 1.5rem;

    @media (max-width: ${breakpoints[992]}) {
      flex-wrap: wrap;
      align-items: center;
    }

    & .agent-infos {
      display: flex;
      width: 100%;
      align-items: center;
      background-color: #f5faf8;
      border: 2px solid #cad6d1;
      border-radius: 0.5rem;
      width: 18rem;
      height: 4.5rem;
      gap: 0.5rem;
      padding: 0 1rem;

      & .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.35rem;
        height: 2.35rem;
        border-radius: 50%;
        background-color: ${colors.lightGray};

        & svg {
          color: ${colors.darkGray};
          height: 1rem;
          width: auto;
        }
      }

      & .agent-data {
        color: ${colors.darkGray};
        font-style: normal;
        line-height: 100%;

        & small {
          font-weight: normal;
          font-size: 12px;
        }

        & p {
          margin: 0;
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
  }

  // COMPANY DATA SECTION

  & .company-data-section {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: 2px solid ${colors.lightGray};
    margin: 2.5rem 0;
    padding: 1.5rem;

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
          border-radius: .5rem;
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
          width: 100%;
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
`;
export default AgentContainerStyled;
