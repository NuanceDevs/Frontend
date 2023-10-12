import Image from 'next/image';
import logo from '../../../../public/nuancelogo.svg';

function Logo() {
  return (
    <div className='logo'>
      <Image className='' src={logo} alt="nuancée logo"/>
    </div>
  );
}

export default Logo;