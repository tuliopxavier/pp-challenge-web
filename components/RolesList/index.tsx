import type { Roles } from '../../types/Roles';
import { useContext, useEffect, useState } from 'react';
import { RolesContext } from '../../providers/DataProvider';
import DropdownRoleAction from '../DropdownRoleAction';
import { FiSearch } from 'react-icons/fi';
import RolesListStyled from './styles';
import LoadingPage from '../LoadingPage';

export const RolesList = () => {
  const roles = useContext(RolesContext);
  const [search, setSearch] = useState<string>('');
  const [filteredRoles, setFilteredRoles] = useState<Roles[]>([]);


  useEffect(() => {
    const newRolesList = roles.filter( role => {
      return role.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredRoles(newRolesList);
  },[search, roles]);

  return (
    <RolesListStyled>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Perquisar por</label>
        <FiSearch />
        <input id='search' type='search' placeholder='Pesquise por cargos' onChange={(e) => setSearch(e.target.value)} />
      </form>

      <h3>Listagem de cargos</h3>

      <div className='table-header'>
        <h6>Cargo</h6>
        <h6>Departamento</h6>
        <h6>Colaboradores</h6>
      </div>

      <dl>
        {filteredRoles[0] ? filteredRoles?.map((role: Roles, id) => {
          return (
            <div className='role-list-line' key={id}>
              <div className='role'>
                <p>{role?.name}</p>
                <p>{role?.departament}</p>
                <p>{role?.agents_quantity}</p>
                <span></span>
                <DropdownRoleAction />
              </div>
            </div>
          );
        }) : <LoadingPage/>}
      </dl>
    </RolesListStyled>
  );
};

export default RolesList;
