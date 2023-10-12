import Image from "next/image";
import NavbarHome from "../components/navbar/navbar";
import Searchbar from "../components/searchbar/searchbar";
import Logo from "../components/Logo/logo";

export default function Home() {
  return(
    <div className="">
      <header>
        <NavbarHome/>
      </header>
      <body className="">
        <Logo/>
      </body>
      <footer>

      </footer>
    </div>
  );
}
