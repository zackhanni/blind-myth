import React from "react";

export default function Hero() {
  return (
    <section className="flex sm:flex-row flex-col items-center justify-evenly py-16 px-2 sm:px-8">
      <div className="max-w-[50%]">
        <img
          src="/pedestrian-crossing.svg"
          alt="blind pedestrian crosswalk"
          className=" h-auto"
        />
      </div>
      <div className="flex flex-col sm:max-w-[50%]">
        <h1 className="text-4xl">Welcome to the Blind Myth</h1>
        <p>
          We help educate about visual impairments and show the world the blind
          are more capable than you may think.
        </p>
      </div>
    </section>
  );
}
