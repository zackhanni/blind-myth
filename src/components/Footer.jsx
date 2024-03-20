import React from "react";

const partnerData = [
  {
    name: "The Blind Myth Podcast",
    link: "https://podcasts.apple.com/us/podcast/blind-myth-by-jabriel-jamal/id1669951357",
  },
  { name: "Sounds Like Soma Studios", link: "https://www.soundslikesoma.com/" },
  { name: "Example", link: "/" },
];

const resources = [
  {
    name: "United Federation of the Blind ",
    link: "https://nfb.org/",
  },
  { name: "Sounds Like Soma Studios", link: "https://www.soundslikesoma.com/" },
  { name: "Example", link: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-16 px-8">
      <div className="flex justify-center space-x-4">
        <div>
          <h3 className="font-semibold text-lg">Resources</h3>
          {resources.map((resource) => [
            <a
              key={resource.name}
              href="{resource.link}"
              className="hover:underline"
            >
              <p>{resource.name}</p>
            </a>,
          ])}
        </div>
        <div className="">
          <h3 className="font-semibold text-lg">Partners</h3>
          {partnerData.map((partner) => {
            return (
              <a
                key={partner.name}
                href="{partner.link}"
                className="hover:underline"
              >
                <p>{partner.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
