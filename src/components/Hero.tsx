"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
  return (
    <section className="-translate-y-24 w-full min-h-screen md:h-screen flex md:block flex-col justify-center top-0">
      <div className="bg-primary-0">
        <Image className="object-cover h-screen w-screen opacity-40" src='/assets/hero.jpg' alt="Hero Photo" width={2048} height={2048} />
      </div>
      <div className="absolute w-full flex items-center justify-center z-20">
        <Link scroll={true} href="#main">
          <MdOutlineKeyboardDoubleArrowDown className="text-primary-200 top-2/3 transform animate-bounce text-9xl" />
        </Link>
      </div>
    </section>
  );
}
