/*
1. add class whith tailwind css 
.news-bar {
    @apply w-[calc(130rem)] whitespace-nowrap flex items-center animate-move-icon-bar;
  }

2. add : 
.news-bar:hover {
  animation-play-state: paused;
}

3. in tailwind.config.ts
      boxShadow: {
        "3xl": "11px 22px 8px 4px #2121218c ",
      },
      keyframes: {
        "hand-up-down-animate": { // here for another animation
          "0%": {
            transform: "translateY(-30px)",
          },
          "100%": {
            transform: "translateY(30px)",
          },
        },
        "hand-down-up-animate": { // here for another animation
          "0%": {
            transform: "translateY(30px)",
          },
          "100%": {
            transform: "translateY(-30px)",
          },
        },
        "moveIcon-animate": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "up-down": "hand-up-down-animate 4s ease-in-out infinite alternate", // here for another animation
        "down-up": "hand-down-up-animate 4s ease-in-out infinite alternate", // here for another animation
        "move-icon-bar": "moveIcon-animate 30s linear infinite",
      },
    },
*/

import Image from "next/image";

export default function OurPartners() {
  const imagesBar1 = importImages(1, 13, companiesLogo1);
  return (
    <section className="overflow-hidden py-20 ">
      {/* the first bar */}
      <section className="news-bar">
        {imagesBar1.map((item, index) => (
          <div
            key={index}
            className="relative group"
          >
            <Image className="w-36 h-36" src={item.image} alt="" width={100} height={100} />
            <p className="group-hover:block hidden shadow-lg absolute -top-10 left-1/2 -translate-x-1/2 text-gray-600 bg-slate-100 w-fit p-3 z-10 rounded-xl">
              {companiesLogo1[index]}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
