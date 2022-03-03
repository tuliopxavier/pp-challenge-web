import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  margin: 100px auto;

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ccc;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1s;
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;