import { useState } from 'react';
import StaffList from '../StaffList';
import RulesList from '../RolesList';
import MainContentContainerStyled from './styles';

const MainContentContainer = () => {
  const [isActive, setIsActive] = useState('staff');

  const handleOpenTab = (string:string) => {
    setIsActive(string);
  };

  return (
    <>
      <MainContentContainerStyled>
        <div className="tabs">
          <button className={`tab ${isActive}`} onClick={()=>handleOpenTab('staff')}> <p>Colaboradores</p> </button>
          <button className={`tab ${isActive}`} onClick={()=>handleOpenTab('rules')}> <p>Cargos</p> </button>
          <button className="tab" disabled> </button>
        </div>

        {isActive === 'staff' ? <StaffList/> : <RulesList />}

      </MainContentContainerStyled>
    </>
  );
};

export default MainContentContainer;
