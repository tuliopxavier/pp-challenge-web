import styled from '@emotion/styled';
import { colors } from '../../styles/variables';

const CustomCheckboxStyled = styled.div`

  .custom-checkbox {
    display: block;
    width: fit-content;
    position: relative;
    cursor: not-allowed;

    & input[type='checkbox'] {
      visibility: hidden;
    }

    & .span-checkbox {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border-radius: 0.5rem;
      border: 3px solid #cad6d1;
    }

    &:hover input ~ .span-checkbox {
      background-color: ${colors.lightGray};
    }

    & input:checked ~ .span-checkbox {
      border-color: #1dd195;
      background-color: #1dd195;
    }

    & input:checked ~ .span-checkbox:after {
      display: block;
    }

    & .span-checkbox:after {
      left: 5.5px;
      bottom: 4px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  .span-checkbox:after {
    content: '';
    position: absolute;
    display: none;
  }





`;
export default CustomCheckboxStyled;
