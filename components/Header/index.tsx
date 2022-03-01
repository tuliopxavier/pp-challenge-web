import router from 'next/router';
import Logo from '../../public/assets/Logo.svg';
import HeaderStyled from './styles';

const Header = () => {
  
  return (
    <HeaderStyled>
      <div className='logo-container'>
        <div className='logo' onClick={() => router.push('/')}>
          <Logo />
        </div>
      </div>

      <div className='user-container'>
        <div className='avatar-circle'>
          <h5>LZ</h5>
        </div>
        <div>
          <h6>Luiz Zlochevsky</h6>
          <small>meus dados</small>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
