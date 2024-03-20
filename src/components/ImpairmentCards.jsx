import React from "react";

export default function ImpairmentCards() {
  const impairmentData = [
    { name: "Glaucoma", image: "/", link: "/" },
    { name: "Cataract", image: "/", link: "/" },
    { name: "Diabetic Retinopathy", image: "/", link: "/" },
    { name: "Macular Degeneration", image: "/", link: "/" },
  ];

  return (
    <section id="experience" className="bg-gray-200 py-16 px-8">
      <div className="flex flex-wrap space-x-4 space-y-4 items-center justify-center">
        {impairmentData.map((impairment) => {
          return (
            <div
              key={impairment.name}
              className="bg-gray-500 h-[300px] w-[90%] sm:w-[200px] rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500"
            >
              <p className="text-left text-4xl">{impairment.name}</p>
              {/* <img
              src="/pedestrian-crossing.svg"
              alt="blind pedestrian crosswalk"
              className=" h-auto"
            /> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
