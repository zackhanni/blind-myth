import React from "react";

const navLinks = [
  { title: "Resources", link: "/" },
  { title: "Donate", link: "/" },
  { title: "Learn More", link: "/" },
];

export default function Nav() {
  return (
    <nav className="flex justify-between bg-gray-200 px-8">
      <div className="p-4">
        <h2>Blind Myth</h2>
      </div>
      <ul className="flex">
        {navLinks.map((link) => {
          return (
            <li key={link} className="p-4">
              <a href={link.link}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
