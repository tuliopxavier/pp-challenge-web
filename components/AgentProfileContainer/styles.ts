import styled from '@emotion/styled';
import { colors, header } from '../../styles/variables';

const AgentProfileContainerStyled = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  & .profile-header {
    margin-top: calc(50px + ${header.height});
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & button {
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    background-color: ${colors.lightGray};
    transition: background-color .25s ease;

    & svg {
      color: ${colors.black};
      height: 1rem;
      transform: translateY(15%);
    }

    &:hover {
      background-color: ${colors.lightGreen};
      cursor: pointer;
    }
  }

  & h1 {
    margin: 0;
    color: ${colors.black};
    font-size: 32px;
    font-weight: 600;
    font-style: normal;    
  }
`;
export default AgentProfileContainerStyled;
