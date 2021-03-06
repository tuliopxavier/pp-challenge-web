import type { Staff } from '../../types/Staff';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { StaffContext } from '../../providers/DataProvider';
import DropdownStaffAction from '../DropdownStaffAction';
import { FiSearch } from 'react-icons/fi';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import StaffListStyled from './styles';
import LoadingPage from '../LoadingPage';

export const StaffList = () => {
  const agent = useContext(StaffContext);
  const [search, setSearch] = useState<string>('');
  const [filteredStaff, setFilteredStaff] = useState<Staff[]>([]);
  const [listQuantity, setListQuantity] = useState<number>(5);
  const [pageCounter, setPageCounter] = useState<number>(0);

  function handlePaginationPlus() {
    if (pageCounter >= Math.floor(filteredStaff.length / listQuantity)) return null;
    setPageCounter(pageCounter + 1);
  };

  function handlePaginationMinus() {
    if (pageCounter === 0) return null;
    setPageCounter(pageCounter - 1);
  };

  useEffect(() => {
    const newAgentList = agent.filter(agentItem => {
      return (agentItem.name.toLowerCase().includes(search.toLowerCase()))
    });
    setFilteredStaff(newAgentList);
    setPageCounter(0);
  }, [search, agent, listQuantity]);

  return (
    <StaffListStyled>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'> Perquisar por </label>
        <FiSearch />
        <input id='search' type='search' placeholder='Pesquise por nome' onChange={(e) => setSearch(e.target.value)} />
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
        {filteredStaff[0] ? filteredStaff?.slice(listQuantity * pageCounter, listQuantity * (pageCounter + 1)).map((agent: Staff) => {
          return (
            <div className='agent-list-line' key={agent?.agent_id} >

              <div className="agent">
                {agent.status === 'active' ?
                  // If agent active
                  <>
                    <div className="avatar-name">
                      <div className='agent-avatar' >
                        <Image src={agent?.image} width={32} height={32} alt={`avatar de ${agent?.name}`} />
                      </div>
                      <h5>{agent?.name}</h5>
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
                      <h5>{agent?.name}</h5>
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
        }) : <LoadingPage/> }

      </dl>

      <section className="pagination">

        <div className="select-pagination">
          <p>Mostrando {listQuantity < filteredStaff.length ? listQuantity : filteredStaff.length} de {filteredStaff.length} registros</p>
          <select name="list-quantity" id="list-quantity" defaultValue='5' onChange={(e) => setListQuantity(parseInt(e.target.value))}>
            <option key='5' value="5">5</option>
            <option key='10' value="10">10</option>
            <option key='25' value="25">25</option>
            <option key='50' value="50">50</option>
          </select>
        </div>

        <div className="button-pagination">
          <button disabled={!Boolean(pageCounter)} onClick={handlePaginationMinus}> <RiArrowLeftSLine /> </button>
          <p>{pageCounter + 1} de {Math.ceil(filteredStaff.length / listQuantity)}</p>
          <button disabled={(pageCounter >= Math.floor(filteredStaff.length / listQuantity)) ? true : false} onClick={handlePaginationPlus}> <RiArrowRightSLine /> </button>
        </div>

      </section>

    </StaffListStyled>
  );
};

export default StaffList;
