"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { FaHouseChimney } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");

  const path = usePathname();
  const isHomePage = path === '/';

  const button = "flex justify-center items-center gap-1 select-none cursor-pointer rounded-lg px-1 py-2 ease-in-out duration-150 text-accent-100 hover:scale-105 hover:bg-accent-400 hover:text-secondary-50 active:scale-95";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 200; // Adjust this value based on when you want the background to become visible

      if (scrollPosition > triggerPoint) {
        setNavbarBackground("bg-solid");
      } else {
        setNavbarBackground("bg-transparent");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`z-50 fixed top-0 transition-colors ease-in-out duration-300 justify-between text-secondary-100 px-10 bg-primary-0 ${isHomePage ? navbarBackground : "bg-primary-0"} w-full py-2 lg:items-center lg:flex lg:px-8`}>
      <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
        <Link href="/">
          <Image src={"/assets/logo_esu.svg"} alt={"Electronics Summer University"} width={120} height={0}></Image>
        </Link>
        <div className="lg:hidden">
          <button
            className="text-4xl"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose />
            ) : (
              <GiHamburgerMenu />
            )}
          </button>
        </div>
      </div>
      <div>
        <div className={`flex-1 justify-self-center pb-3 mt-16 lg:block lg:pb-0 lg:mt-0
                        ${isOpen ? 'py-2 lg:p-0 block' : 'hidden'}`}>
          <ul className="h-screen lg:h-auto lg:flex items-center gap-10 text-2xl font-bold lg:font-semibold">
            <Link href="/"><li className={button} onClick={() => setIsOpen(!isOpen)}><FaHouseChimney />Acasa</li></Link>
            <Link href="/faq"><li className={button} onClick={() => setIsOpen(!isOpen)}><FaQuestion />Intrebari Frecvente</li></Link>
            <Link href="/docs"><li className={button} onClick={() => setIsOpen(!isOpen)}><IoDocumentTextSharp />Documente Necesare</li></Link>
            <Link href="/contact"><li className={button} onClick={() => setIsOpen(!isOpen)}><IoPersonSharp />Contact</li></Link>
          </ul>
        </div>
      </div>
    </div >
  );
}
