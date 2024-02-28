import Link from "next/link";
import { FaFacebook, FaLocationPin } from "react-icons/fa6";
import { FaPhone, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const button = "flex justify-center text-sm md:text-md lg:text-xl items-center md:gap-1 select-none cursor-pointer rounded-lg p-1 ease-in-out duration-150 text-accent-100 hover:scale-105 hover:bg-accent-400 hover:text-secondary-50 active:scale-95";
  return (
    <div className="flex flex-col md:flex-row font-semibold justify-between px-20 bg-primary-0 h-fit w-full drop-shadow-sm bottom-0 py-8">
      <div>
        <h1 className="text-sm md:text-md lg:text-xl text-accent-100">Follow us:</h1>
        <Link href="https://www.instagram.com/esu.lsfetc/"><div className={button}><AiFillInstagram />Instagram</div></Link>
        <Link href="https://www.facebook.com/esutimisoara/"><div className={button}><FaFacebook />Facebook</div></Link>
        <Link href="https://www.tiktok.com/@lsfetc.timisoara"><div className={button}><FaTiktok />TikTok</div></Link>
      </div>
      <div>
        <Link href="tel:0735149076"><div className={button}><FaPhone />Coordonator ESU<p className="hidden md:block">: 0735 149 076</p></div></Link>
        <Link href="tel:0771494186"><div className={button}><FaPhone />Presedinte LSFETc<p className="hidden md:block">: 0771 494 186</p></div></Link>
        <Link href="mailto:esu@lsfetc.ro"><div className={button}><MdEmail />esu@lsfetc.ro</div></Link>
        <Link href="https://maps.app.goo.gl/pU34Q14pZwT1UMRq5"><div className={button}><FaLocationPin />Sediul LSFETc</div></Link>
      </div>
    </div>
  );
}
