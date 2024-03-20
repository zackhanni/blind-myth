import React from "react";

export default function Hero() {
  return (
    <section className="flex sm:flex-row flex-col items-center justify-evenly py-16 px-2 sm:px-8 bg-white">
      <div className="max-w-[50%]">
        <img
          src="/pedestrian-crossing.svg"
          alt="blind pedestrian crosswalk"
          className=" h-auto sm:pr-8"
        />
      </div>
      <div className="flex flex-col sm:max-w-[50%] space-y-2">
        <h1 className="text-3xl mx-auto sm:mx-0">
          Welcome to the <br />
          <span className="text-5xl">Blind Myth</span>
        </h1>
        <p className="text-center sm:text-left">
          We help educate about visual impairments and show the world the blind
          are more capable than you may think.
        </p>

        <a href="#experience" className="sm:mx-0 mx-auto">
          <button className="bg-gray-200 py-2 px-4 w-fit rounded-xl hover:underline">
            Try out an experience
          </button>
        </a>
      </div>
    </section>
  );
}
