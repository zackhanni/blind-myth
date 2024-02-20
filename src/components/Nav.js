import React from "react";

const navLinks = [
  { title: "Resources", link: "/" },
  { title: "Donate", link: "/" },
  { title: "Learn More", link: "/" },
];

export default function Nav() {
  return (
    <nav>
      <div>
        <h2>Blind Myth</h2>
      </div>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link}>
              <a href={link.link}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
