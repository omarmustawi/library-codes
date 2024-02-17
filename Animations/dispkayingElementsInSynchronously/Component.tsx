/*
1. install react-intersection-observer library
2. create these classes:
.animate.pop {
  animation-name: animate-pop;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
}

@keyframes animate-pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.delay-1 {
  animation-delay: 0.6s;
}

.delay-2 {
  animation-delay: 0.8s;
}

.delay-3 {
  animation-delay: 1s;
}
.delay-4 {
  animation-delay: 1.2s;
}
.delay-5 {
  animation-delay: 1.4s;
}
.delay-6 {
  animation-delay: 1.6s;
}
*/


import React from "react";
import { useInView } from "react-intersection-observer";

export default function CardFeature() {
    const [ref, inView] = useInView({
      triggerOnce: false,
    });
  return (
    <section ref={ref}>
      <div
        className={` relative rounded-2xl bg-[#F6F6F6] shadow-xl p-5 pt-14 lg:pt-28 max-w-80 min-w-56 lg:w-72  flex flex-col justify-end xl:mx-5 ${
          inView && `animate pop delay-1`
        }`}
      ></div>
      <div
        className={` relative rounded-2xl bg-[#F6F6F6] shadow-xl p-5 pt-14 lg:pt-28 max-w-80 min-w-56 lg:w-72  flex flex-col justify-end xl:mx-5 ${
          inView && `animate pop delay-2 `
        }`}
      ></div>
      <div
        className={` relative rounded-2xl bg-[#F6F6F6] shadow-xl p-5 pt-14 lg:pt-28 max-w-80 min-w-56 lg:w-72  flex flex-col justify-end xl:mx-5 ${
          inView && `animate pop delay-3`
        }`}
      ></div>
    </section>
  );
}
