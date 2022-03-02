import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { StaffContext } from '../../providers/DataProvider';
import DropdownStaffAction from '../DropdownStaffAction';
import { FiSearch } from 'react-icons/fi';
import StaffListStyled from './styles';
import { Staff } from '../../types/Staff';

export const StaffList = () => {
  const agent = useContext(StaffContext);
  const [search, setSearch] = useState<string>('');
  const [filteredStaff, setFilteredStaff] = useState<Staff[]>([]);

  useEffect(() => {
    const newAgentList = agent.filter( agentItem => {
      return (agentItem.name.toLowerCase().includes(search.toLowerCase()))
    });
    setFilteredStaff(newAgentList);
  },[search, agent]);

  return (
    <StaffListStyled>
      <form>
        <label htmlFor='search'> Perquisar por </label>
        <FiSearch />
        <input id='search' type='search' placeholder='Pesquise por nome' onChange={(e) => setSearch(e.target.value)}/>
      </form>

      <h3>Listagem de colaboradores</h3>

      <div className='table-header'>
        <h6>Nome completo</h6>
        <h6>Departamento</h6>
        <h6>Cargo</h6>
        <h6>Unidade</h6>
        <h6>Status</h6>
      </div>

      <dl>
        {filteredStaff?.map((agent:Staff)=>{
            return(
              <div className='agent-list-line' key={agent?.agent_id} >

                <div className="agent">
                { agent.status === 'active' ?
                  // If agent active
                  <>
                    <div className="avatar-name">
                      <div className='agent-avatar' >
                        <Image src={agent?.image} width={32} height={32} alt={`avatar de ${agent?.name}`} />
                      </div>
                      <p>{agent?.name}</p>
                    </div>
                    <p>{agent?.department}</p>
                    <p>{agent?.role}</p>
                    <p>{agent?.branch}</p>
                    <div className='staff-status'>
                      <p>Ativo</p>
                    </div>

                    <DropdownStaffAction agentId={agent.agent_id} />
                  </>
                  :
                  // If agent inactive
                  <>
                    <div className='avatar-name inactive' >
                      <div className='agent-avatar' >
                        <Image src={agent.image} width={32} height={32} alt={`avatar de ${agent?.name}`} />
                      </div>
                      <p>{agent?.name}</p>
                    </div>
                    <p className='inactive'>{agent?.department}</p>
                    <p className='inactive'>{agent?.role}</p>
                    <p className='inactive'>{agent?.branch}</p>
                    <div className='staff-status'>
                      <p className='disabled'>Inativo</p>
                    </div>

                    <DropdownStaffAction agentId={agent.agent_id} />
                  </>
                }
                </div>
              </div>
            );
        })}

      </dl>

    </StaffListStyled>
  );
};

export default StaffList;
