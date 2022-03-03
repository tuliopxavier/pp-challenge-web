import type { Agent } from '../../types/Agent';
import type  { Params } from 'next/dist/server/router';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { FiUser, FiPhoneCall, FiCalendar } from 'react-icons/fi';
import { HiOutlineIdentification } from 'react-icons/hi';
import AgentContentContainerStyled from './styles';
import LoadingPage from '../LoadingPage';
import swal from 'sweetalert'

const AgentProfile = () => {
  const [agentData, setAgentData] = useState<Agent>({} as Agent);
  const router = useRouter();
  const { agentId }: Params = router.query;

  const getAgent = async (id: number) => {
    try {
      const response = await api.get(`agent/${id}`);
      setAgentData(response.data.agent);
    }
    catch (error) {
      swal("Colaborador não encontrado", "Por favor, verifique o ocorrido com o responsável.", "error");
      router.push('/');
    };
  };

  useEffect(() => {
    agentId !== undefined && getAgent(parseInt(agentId));
  }, [agentId]);

  return (
    <AgentContentContainerStyled>
      {agentData.image ?
      <>
      <div className='profile-header'>
        <div className='avatar-wrapper'>
          {agentData?.image ?
            <Image src={agentData?.image} width={80} height={80} alt={`avatar de ${agentData?.name}`} />
            : <FiUser />}
        </div>
        <div className='agent-name'>
          <h2>{agentData.name}</h2>
          <small>{agentData.email}</small>
        </div>
      </div>

      <h3>Informações pessoais</h3>


      <section className='info-section'>

        <div className='agent-infos'>
          <div className='icon-wrapper'>
            <HiOutlineIdentification />
          </div>
          <div className='agent-data'>
            <small>{agentData.document?.type}</small>
            <p>{agentData.document?.number}</p>
          </div>
        </div>

        <div className='agent-infos'>
          <div className='icon-wrapper'>
            <FiPhoneCall />
          </div>
          <div className='agent-data'>
            <small>Telefone</small>
            <p>{`${agentData.phone?.ddi} ${agentData.phone?.ddd} ${agentData.phone?.number}`}</p>
          </div>
        </div>

        <div className='agent-infos'>
          <div className='icon-wrapper'>
            <FiCalendar />
          </div>
          <div className='agent-data'>
            <small>Nascimento</small>
            <p>{agentData?.birth_date?.slice(8, 10)}/{agentData?.birth_date?.slice(5, 7)}/{agentData?.birth_date?.slice(0, 4)}</p>
          </div>
        </div>

      </section>

      <section className="company-data-section">
        <h3>Dados organizacionais</h3>

        <div className="data-wrapper">
          <div className='select-wrapper'>
            <label htmlFor="department"> Departamento </label>
            <select id="department" defaultValue={agentData?.department}>
              <option >{agentData?.department}</option>
            </select>
          </div>

          <div className='select-wrapper'>
            <label htmlFor="role">
              Cargo
            </label>
            <select id="role" defaultValue={agentData?.role}>
              <option >{agentData?.role}</option>
            </select>
          </div>

          <div className='select-wrapper'>
            <label htmlFor="branch">
              Unidade
            </label>
            <select id="branch" defaultValue={agentData?.branch}>
              <option >{agentData?.branch}</option>
            </select>
          </div>

          <div className='select-wrapper'>
            <label htmlFor="status">
              Status
            </label>
            <select id="status" defaultValue={agentData?.status}>
              <option>{agentData?.status}</option>
            </select>
          </div>
        </div>
      </section>
      </> : <LoadingPage/>
      }



    </AgentContentContainerStyled>
  );
};

export default AgentProfile;
