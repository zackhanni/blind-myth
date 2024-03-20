import React from "react";
import Nav from "../components/Nav";

export default function XpGlaucoma() {
  const spotlightEl = document.querySelector("#spotlight");

  function handleMouseMove(event) {
    const { clientX, clientY } = event;

    spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #000000ee 350px)`;
  }

  document.addEventListener("mousemove", handleMouseMove);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div id="spotlight"></div>

        <main className="max-w-screen-lg mx-auto w-full"></main>
      </header>
    </div>
  );
}
