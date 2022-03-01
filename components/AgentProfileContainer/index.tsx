import router from 'next/router';
import AgentProfile from '../AgentProfile';
import { FiArrowLeft } from 'react-icons/fi';
import AgentProfileContainerStyled from './styles';

const AgentProfileContainer = () => {
  return (
    <AgentProfileContainerStyled>
      <header className='profile-header' >
        <button onClick={() => router.push('/')}> <FiArrowLeft /> </button>
        <h1>Detalhes do colaborador</h1>
      </header >
      <AgentProfile />
    </AgentProfileContainerStyled>
  );
};

export default AgentProfileContainer;
