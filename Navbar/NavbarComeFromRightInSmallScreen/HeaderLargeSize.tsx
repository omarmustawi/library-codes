import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/Images/logo.svg";
/* 
If the navbar in large screen fixed and you scroll to a section 
the navbar will hide that section so  we have to scroll into before the selected section
by top: section.offsetTop - 100 ==> before the section with 100px
*/
export function scrollToSection(sectionId: string) {
  let section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  }
}

export default function HeaderLargeSize() {
  return (
    <main className="p-5 flex justify-between text-color-1 text-xl fixed top-0 left-0 w-screen bg-white z-20 ">
      <nav>
        <ul className="flex  gap-9">
          <li className=" relative group">
            <Link href="#24r" onClick={() => scrollToSection("home")}>
              الرئيسة
            </Link>
            <div className="line absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group">
            <Link href="#24r" onClick={() => scrollToSection("about")}>
              من نحن
            </Link>
            <div className="line absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group">
            <Link href="#24r" onClick={() => scrollToSection("services")}>
              خدماتنا
            </Link>
            <div className="line absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group">
            <Link href="#24r" onClick={() => scrollToSection("projects")}>
              مشاريعنا
            </Link>
            <div className="line absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group">
            <Link href="#24r" onClick={() => scrollToSection("team")}>
              فريقنا
            </Link>

            <div className="line absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="text-orange-color  relative group ">
            <Link onClick={() => scrollToSection("contact")} href="#24r">
              اتصل
            </Link>
            <div className="line absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>
      </nav>
      <Image src={logo} alt="" width={244} />
    </main>
  );
}
