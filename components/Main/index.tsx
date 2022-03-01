
import { ReactChild, ReactChildren } from 'react';
import MainStyled from './styles';

interface ReactChildrenProps {
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  }

const Main = ({children}:ReactChildrenProps) => {
  return (
    <MainStyled>
        {children}
    </MainStyled>
  )
}

export default Main;