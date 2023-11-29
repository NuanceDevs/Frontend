import Image from "next/image";
import logo from "@../../../public/nuancelogoresized.png";

function Logo() {
  return (
    <>
      <Image src={logo} alt="nuancée logo" />
    </>
  );
}

export default Logo;
