"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const button = "flex justify-center items-center gap-1 select-none cursor-pointer rounded-lg px-1 py-2 ease-in-out duration-150 text-accent-100 hover:scale-105 hover:bg-accent-400 hover:text-secondary-50 active:scale-95";
  const button_alt = "flex justify-center items-center gap-1 select-none cursor-pointer rounded-lg px-1 py-2 ease-in-out bg-primary-800 duration-150 text-accent-300 hover:scale-105 hover:bg-accent-400 hover:text-secondary-50 active:scale-95";

  return (
    <div className={`h-full lg:h-24 transition-colors ease-in-out duration-300 justify-between text-secondary-100 px-10 bg-primary-0 w-full py-2 lg:items-center lg:flex lg:px-8`}>
      <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
        <Link href="/">
          <Image src={"/assets/esu.png"} alt={"Electronics Summer University"} width={160} height={0}></Image>
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
            <Link href="/"><li className={button} onClick={() => setIsOpen(!isOpen)}><FaHouseChimney />Acasă</li></Link>
            <Link href="/faq"><li className={button} onClick={() => setIsOpen(!isOpen)}><FaQuestion />Întrebări Frecvente</li></Link>
            <Link href="https://drive.google.com/drive/folders/1VN4MIXLkd-AOC_SDwDRNElhyo9ZC3vfO"><li className={button} onClick={() => setIsOpen(!isOpen)}><IoDocumentTextSharp />Documente Necesare</li></Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdffgisiWWGjovWJkyMwQ6OfBW8LeD_ULTUstw1fpmeLbRCNQ/viewform?usp=sf_link"><li className={button_alt} onClick={() => setIsOpen(!isOpen)}><FaLink />Preînscriere</li></Link>
          </ul>
        </div>
      </div>
    </div >
  );
}
