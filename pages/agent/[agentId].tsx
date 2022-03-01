import type { NextPage } from 'next';
import Main from '../../components/Main';
import SideBar from '../../components/SideBar';
import AgentProfileContainer from '../../components/AgentProfileContainer';

const Agent: NextPage = () => {
  return (
    <Main>
      <SideBar />
      <AgentProfileContainer />
    </Main>
  );
};

export default Agent;
