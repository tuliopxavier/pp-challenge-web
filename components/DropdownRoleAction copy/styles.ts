import styled from '@emotion/styled';
import { colors } from '../../styles/variables';

const DropdownRoleActionStyled = styled.div`
  position: relative;

  & .dots {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.darkGray};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.25s ease;

    &:hover {
      background-color: ${colors.lightGray};
      cursor: pointer;
    }
  }

  & .role-dropdown {
    display: flex;
    flex-direction: column;
    
    position: absolute;
    width: 21rem;
    box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
    border-radius: 8px;
    background-color: #fff;

    transform: translateX(-90%);
    z-index: 1;
    overflow: hidden;

    & .dropdown-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      display: flex;
      padding: .5rem 2rem;

      color: ${colors.darkGray};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;

      &:nth-last-of-type(1),
      &:nth-last-of-type(2),
      &:nth-last-of-type(3) {
          opacity: .5;
          &:hover {
            background-color: #fff;
            cursor: not-allowed;
          }
        }

      & svg {
        color: ${colors.gray};
        height: 1.25rem;
        width: auto;
      }

      &:hover {
        background-color: ${colors.lightGray};
        cursor: pointer;
      }
    }
  }
`;
export default DropdownRoleActionStyled;
