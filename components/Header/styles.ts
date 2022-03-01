import styled from '@emotion/styled';
import { header, colors } from '../../styles/variables';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${header.height};
  background-color: #fff;
  border-bottom: 1px solid ${colors.lightGray};


  & .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid ${colors.lightGray};
    border-width: 1px 1px 0 1px;
    padding: 0 2rem;

    & svg:hover {
      opacity: .75;
      cursor: pointer;
    }
  }

  & .user-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid ${colors.lightGray};
    border-width: 1px 1px 0 1px;
    padding: 0 2rem;

    & .avatar-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        background-color: ${colors.lightGreen};
        border-radius: 50%;
        margin-right: .5rem;
        
        & h5 {
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
        }
    }

    & h6 {
        color: ${colors.black};
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
        margin: 0;
        margin-bottom: -.5rem;
    }

    & small {
        color: ${colors.darkGray};
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
    }

  }
`;
export default HeaderStyled;
