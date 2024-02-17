import React from 'react'
import { useInView } from "react-intersection-observer";

export default function Component() {
    const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      className={`bg-[#F9F9F9]  lg:p-8 flex flex-col lg:flex-row justify-center items-center gap-3 my-4 py-3 lg:px-16  rounded-2xl  opacity-0  ${
        inView && `opacity-100 duration-[3s] `
      }  `}
    ></section>
  )
}
