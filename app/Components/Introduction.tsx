"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkbg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-6 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="400"
          height="400"
          alt="Profile pic"
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Como programador <br />
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2  md:mx-0 md:mb-8">
            Como aspirante a programador fullstack, siempre busco nuevos
            desafíos y oportunidades para crecer. Mi curiosidad y pasión por
            aprender me impulsan constantemente. Me emociona explorar más allá
            del frontend y sumergirme en el desarrollo web completo.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver Proyectos
            </Link>
            <Link
              href="https://www.linkedin.com/in/julian-florentin-04a515169/"
              target="blank"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
