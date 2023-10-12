import Image from 'next/image';
import logo from '../../../../public/nuancelogo.svg';

function Logo() {
  return (
    <div className='logo'>
      <Image className='' src={logo} alt="nuancée logo" width={125} height={125} />
    </div>
  );
}

export default Logo;