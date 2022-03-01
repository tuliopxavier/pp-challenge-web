import router from 'next/router';
import RoleProfile from '../RoleProfile';
import { FiArrowLeft } from 'react-icons/fi';
import RoleProfileContainerStyled from './styles';

const RoleProfileContainer = () => {
  return (
    <RoleProfileContainerStyled>
      <header className='roles-header' >
        <button onClick={() => router.push('/')}> <FiArrowLeft /> </button>
        <h1>Cargos e permissões</h1>
      </header >
      <RoleProfile />
    </RoleProfileContainerStyled>
  );
};

export default RoleProfileContainer;
