import Image from "next/image";
import Navbar from "./ui/components/navbar";
import Logo from "./ui/components/Logo/logo";
import Searchbar from "./ui/components/searchbar/searchbar";

export default function Home() {

  return <>
          <div className="flex flex-col items-center justify-center h-screen">
          <Logo></Logo>
          <Searchbar></Searchbar>
        </div>
  </>;
}
