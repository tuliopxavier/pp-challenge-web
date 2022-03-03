import styled from '@emotion/styled';
import { breakpoints, colors } from '../../styles/variables';

const StaffListStyled = styled.div`

  // SEARCH INPUT

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
    grid-template-columns: 1.65fr 1fr .75fr 1.25fr 1fr 0.35fr;
    width: 100%;
    height: 4rem;
    border: 2px solid ${colors.lightGray};
    border-radius: .5rem .5rem 0 0;
    padding-left: 2rem;
    gap: 2rem;

    @media (max-width: ${breakpoints[992]}) {
      gap: .5rem;
    }

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

    & .agent-list-line {
      height: 3.5rem;
      padding-left: 2rem;
      border-bottom: 2px solid ${colors.lightGray};
      margin: 1.5rem 0;

      & .agent {
        display: grid;
        align-items: center;
        grid-template-columns: 1.65fr 1fr .75fr 1.25fr 1fr 0.35fr;
        padding-left: 0;
        gap: 2rem;

        @media (max-width: ${breakpoints[992]}) {
          gap: .5rem;
        }

        & .avatar-name {
          display: flex;
          align-items: center;
          gap: .5rem;

          & .agent-avatar {
            min-width: 2rem;
            min-height: 2rem;
            max-width: 2rem;
            max-height: 2rem;
            border-radius: 50%;
            overflow: hidden;
          }

          & h5 {
            color: ${colors.darkGray};
            font-size: 12px;
            font-weight: 600;
            font-style: normal;
            line-height: 1.2;
          }
        }

        & p {
          color: ${colors.darkGray};
          font-size: 12px;
          font-weight: 400;
          font-style: normal;
        }

        & .staff-status p {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 24px;
          background-color: ${colors.lightGreen};
          padding: .25rem .5rem;
          border-radius: 5rem;

          color: ${colors.black};
          font-size: 14px;
          font-weight: 500;
          font-style: normal;

          &.disabled {
            background-color: ${colors.lightGray};
          }
        }
      }
    }
  }

  // PAGINATION

  section.pagination {
    display: flex;
    justify-content: space-between;

    & .select-pagination {
      display: flex;
      align-items: center;
      gap: 1rem;

      & p {
        color: ${colors.darkGray};
      }

      & select {
        height: 2.5rem;
        padding: .5rem 1rem;
        border-radius: .5rem;
        
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        overflow: visible;
        color: ${colors.darkGray};
        cursor: pointer;

        & option {
          padding: 1rem;
        }
      }
    }

    & .button-pagination {
      display: flex;
      align-items: center;

      & button {
        color: ${colors.darkGray};
        background-color: transparent;
        height: 2.5rem;
        width: 2.5rem;
        border: 2px solid ${colors.darkGray};
        cursor: pointer;
        transition: all 0.25s ease;

        & svg {
          height: 1.5rem;
          width: auto;
        }

        &:first-of-type {
          border-radius: .5rem 0 0 .5rem;
        }

        &:last-of-type {
          border-radius: 0 .5rem .5rem 0;
        }

        &:hover {
          border: none;
          background-color: ${colors.lightGray};
        }

        &:disabled {
          opacity: .25;
          cursor: not-allowed;
        }
      }

      & p {
        color: ${colors.darkGray};
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        padding: 1rem;
      }
    }
  }

  .inactive {
    opacity: .35;
  }
`;
export default StaffListStyled;
