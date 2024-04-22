import QuestionBox from "@/components/QuestionBox";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Statistics from "@/components/Countdown";
import Slider from "@/components/Slider";

export default function Home() {
  const editions = [
    "/assets/editia2016.jpg",
    "/assets/editia2017.jpg",
    "/assets/editia2018.jpg",
    "/assets/editia2019.jpg",
    "/assets/editia2020.jpg",
    "/assets/editia2021.jpg",
    "/assets/editia2022.jpg",
    "/assets/editia2023.jpg",
  ];

  const testimonials_2022 = [
    "/assets/testimoniale/editia2022/alex_daianu.jpg",
    "/assets/testimoniale/editia2022/alex_iordache.jpg",
    "/assets/testimoniale/editia2022/alexandru_micle.jpg",
    "/assets/testimoniale/editia2022/alexandru_tega.jpg",
    "/assets/testimoniale/editia2022/anamaria_burta.jpg",
    "/assets/testimoniale/editia2022/andreea_caisim.jpg",
    "/assets/testimoniale/editia2022/andrei_aldulescu.jpg",
    "/assets/testimoniale/editia2022/andrei_stoica.jpg",
    "/assets/testimoniale/editia2022/antonio_butnariu.jpg",
    "/assets/testimoniale/editia2022/antonio_sachelaru.jpg",
    "/assets/testimoniale/editia2022/bianca_bardan.jpg",
    "/assets/testimoniale/editia2022/cristi_gruia.jpg",
    "/assets/testimoniale/editia2022/dana_ciritel.jpg",
    "/assets/testimoniale/editia2022/diana_dumitriu.jpg",
    "/assets/testimoniale/editia2022/dragos_plesa.jpg",
    "/assets/testimoniale/editia2022/eduard_malita.jpg",
    "/assets/testimoniale/editia2022/eduard_predescu.jpg",
    "/assets/testimoniale/editia2022/ema_marinescu.jpg",
    "/assets/testimoniale/editia2022/filip_cociubei.jpg",
    "/assets/testimoniale/editia2022/ioana_mihaescu.jpg",
    "/assets/testimoniale/editia2022/natanael_ile.jpg",
    "/assets/testimoniale/editia2022/ramona_serban.jpg",
    "/assets/testimoniale/editia2022/raul_tamas.jpg",
    "/assets/testimoniale/editia2022/vlad_capalnasan.jpg",
    "/assets/testimoniale/editia2022/vlad_mitrea.jpg",
  ];

  return (
    <div>
      <section className="left-0 w-full min-h-screen md:h-screen flex md:block flex-col justify-center top-0">
        <div className="relative">
          <div className="bg-primary-0">
            <Image className="object-cover h-screen w-screen opacity-40" src='/assets/hero.jpg' alt="Hero Photo" width={2048} height={2048} />
          </div>
          <div className="w-full flex items-center justify-center z-40">
            <div className="absolute top-[20%] text-5xl lg:text-7xl text-primary-100 text-center font-bold w-3/4">
              <h1>Electronics Summer University</h1>
            </div>
            <div className="absolute top-[45%] md:top-[45%] text-lg md:text-2xl lg:text-3xl rounded-xl text-primary-200 bg-primary-700 p-4 md:p-6 lg:p-8 font-semibold">
              <h1>Te conecteaza cu viitorul tau!</h1>
            </div>
            <Link scroll={true} href="#main">
              <div className="absolute text-primary-200 transform top-[70%] md:top-[75%] -translate-x-1/2 -translate-y-1/2 text-9xl">
                <MdOutlineKeyboardDoubleArrowDown className="animate-[bounce_2s_ease-in_infinite]" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <main id="main" className="flex flex-col m-4 md:w-3/4 md:mx-auto">
        <p className="text-5xl font-semibold text-primary-700 mb-4">Ce este ESU?</p>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8">
          <div>
            <p className="text-secondary-800 mb-4 text-xl">
              <span className="font-semibold">Electronics Summer University (ESU)</span> este o Universitate de vară pentru
              elevii de <span className="font-semibold">clasa a XI-a</span> organizată de Liga Studenților din Facultatea de
              Electronică și Telecomunicații <span className="font-semibold">(LSFETc)</span>. Aceasta se desfășoară la
              Timișoara în perioada <span className="font-semibold">21 August – 3 Septembrie</span>, anul acesta fiind la a
              <span className="font-semibold"> IX-a ediție</span> a proiectului.
            </p>
            <p className="text-secondary-800 mb-4 text-xl">
              Proiectul le oferă elevilor oportunitatea de a simula <span className="font-semibold">viața de student</span> pe
              o perioada de două săptămâni. Este locul unde se îmbină „utilul cu plăcutul”, prin activitățile care își
              propun dezvoltarea liceenilor, atât pe <span className="font-semibold">plan personal</span>, cât și pe{" "}
              <span className="font-semibold">plan profesional</span>.
            </p>
            <p className="text-secondary-800 mb-4 text-xl">
              Pe parcursul proiectului, elevii dobândesc noi cunoștințe, care se vor dovedi foarte
              folositoare pe viitor. De asemenea, aceștia aprofundează cunoștințele dobândite în liceu și le consolidează,
              dându-le o direcție mai clară a parcursului educațional pe care vor să îl urmeze.
            </p>
          </div>
          <Image src={"/assets/ghiozdaneESUjpg.jpg"} alt={"ghiozdaneESU"} width={700} height={400} className="rounded-xl hidden lg:block"></Image>
        </div>
        <div className="py-4">
          <Statistics />
        </div>
        <Slider images={editions} />
        <h1 className="text-center text-text-800 text-5xl font-bold pt-10">ESU prin ochii foștilor participanți</h1>
        <div className="py-6">
          <Slider images={testimonials_2022} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:w-3/4 md:mx-auto">
          <QuestionBox question="Când?" answer="Ediția de anul acesta se va desfășura în perioada 21 august – 3 septembrie." />
          <QuestionBox question="Unde?" answer="La Timișoara." />
          <QuestionBox question="Cât?" answer="Nu există taxă de participare, totul este gratuit." />
          <QuestionBox question="Cine?" answer="Orice elev de clasa a XI-a." />
        </div>
        <div className="flex flex-col pt-10 mx-auto">
          <p className="text-5xl text-center font-semibold text-primary-700 mb-4">Ghid de înscriere</p>
          <Image src={"/assets/guide.png"} alt={"ghiddeinscriere"} width={600} height={600} />
        </div>
      </main>
    </div>
  );
}
