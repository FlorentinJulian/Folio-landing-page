import { dataAboutPage } from "../data";
import Image from "next/image";

const Timeline = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        <div className="flex -my-6 flex-wrap justify-center items-center">
          {dataAboutPage.map((data) => (
            <div
              key={data.id}
              className="relative py-6 px-8 sm:px-10 w-1/4 min-w-[240px] group"
            >
              {/* Ajuste de ancho a 1/4 del contenedor y mínimo a 240px para responsividad */}
              <div className="text-center mb-3">
                <h3 className="text-xl font-bold">{data.title}</h3>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <Image
                  src={data.img}
                  alt={data.title}
                  height={150}
                  width={150}
                  className="w-[100px] h-[100px] mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
