/* tslint:disable */
import QuestionBox from "@/components/QuestionBox";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Statistics from "@/components/Countdown";
import Slider from "@/components/Slider";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  const editions: string[] = [
    "/assets/2016.png",
    "/assets/2017.png",
    "/assets/2018.png",
    "/assets/2019.png",
    "/assets/2020.png",
    "/assets/2021.png",
    "/assets/2022.png",
    "/assets/2023.png",
    "/assets/2024.png",
  ];

  const testimonials_2023: string[] = [
    "/assets/testimoniale/editia2023/1.png",
    "/assets/testimoniale/editia2023/2.png",
    "/assets/testimoniale/editia2023/3.png",
    "/assets/testimoniale/editia2023/4.png",
    "/assets/testimoniale/editia2023/5.png",
    "/assets/testimoniale/editia2023/6.png",
    "/assets/testimoniale/editia2023/7.png",
    "/assets/testimoniale/editia2023/8.png",
    "/assets/testimoniale/editia2023/9.png",
    "/assets/testimoniale/editia2023/10.png",
    "/assets/testimoniale/editia2023/11.png",
    "/assets/testimoniale/editia2023/12.png",
    "/assets/testimoniale/editia2023/13.png",
    "/assets/testimoniale/editia2023/14.png",
    "/assets/testimoniale/editia2023/15.png",
    "/assets/testimoniale/editia2023/16.png",
    "/assets/testimoniale/editia2023/17.png",
    "/assets/testimoniale/editia2023/18.png",
    "/assets/testimoniale/editia2023/19.png",
    "/assets/testimoniale/editia2023/20.png",
    "/assets/testimoniale/editia2023/21.png",
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
              <h1>Te conectează cu viitorul tău!</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 md:w-3/4 md:mx-auto">
          <QuestionBox question="Când?" answer="Ediția de anul acesta se va desfășura în perioada 21 august – 3 septembrie." />
          <QuestionBox question="Unde?" answer="La Timișoara." />
          <QuestionBox question="Cât?" answer="Nu există taxă de participare, totul este gratuit." />
          <QuestionBox question="Cine?" answer="Orice elev de clasa a XI-a." />
        </div>
      </main>
      <div className="py-4 left-0 right-0">
        <Statistics />
      </div>
      <div className="flex flex-col m-4 md:w-3/4 md:mx-auto">
        <ImageGallery imagePaths={editions} />
        <h1 className="text-center text-text-800 text-5xl font-bold pt-10 pb-6">ESU prin ochii foștilor participanți</h1>
        <Slider images={testimonials_2023} />
        <div className="flex flex-col pt-10 mx-auto">
          <p className="text-5xl text-center font-semibold text-primary-700 mb-4">Ghid de înscriere</p>
          <Image src={"/assets/guide.png"} alt={"ghiddeinscriere"} width={600} height={600} />
        </div>
        <div className="md:mx-auto border-4 border-primary-0">
          <iframe width="1000" height="600" src="https://www.youtube.com/embed/MMqsJFA1CGU?si=v1mat6Y52Sdd_asc" allowFullScreen={true}></iframe>
        </div>
      </div>
    </div>
  );
}
