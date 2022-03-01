import type { NextPage } from 'next';
import Main from '../../components/Main';
import SideBar from '../../components/SideBar';
import RoleProfileContainer from '../../components/RoleProfileContainer';

const Role: NextPage = () => {
  return (
    <Main>
      <SideBar />
      <RoleProfileContainer />
    </Main>
  );
};

export default Role;
