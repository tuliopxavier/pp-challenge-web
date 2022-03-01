import type { NextPage } from 'next';
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import CompanyContainer from '../components/CompanyContainer';

const Home: NextPage = () => {
  return (
    <Main>
      <SideBar />
      <CompanyContainer />
    </Main>
  );
};

export default Home;
