/*
1. The Images are distributed as beehives as shown in the attached image.
The images will be displayed with the data assigned to the member in the larger frame,
and its data will be changed automatically

2. You have data that includes info of members and style that set position of a image:
const images = [
  {
    name: "علي نصير",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img1,
    style: "img-team1 ",
  },
  {
    name: "علي أحمد",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img2,
    style: "img-team2",
  },
  {
    name: "عمر مصطاوي",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img3,
    style: "img-team3 ",
  },
  {
    name: "أحمد نصير",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img4,
    style: "img-team4",
  },
  {
    name: "مصطفى مصطاوي",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img5,
    style: "img-team5  ",
  },
  {
    name: "معاذ قرة محمد",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img6,
    style: "img-team6  ",
  },
  {
    name: "أمل السعيد",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img7,
    style: "img-team7 ",
  },
  {
    name: "عبد الرحمن درباك",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img8,
    style: "img-team8 ",
  },
  {
    name: "علي درباك",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img9,
    style: "img-team9   ",
  },
  {
    name: "أحمد كيال",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img10,
    style: "img-team10  ",
  },
  {
    name: "عمر نصير",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img11,
    style: "img-team11  ",
  },
  {
    name: "نايا نصير",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img12,
    style: "img-team12  ",
  },
  {
    name: "حلا نصير",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img13,
    style: "img-team13  ",
  },
  {
    name: "عمر قرة محمد",
    role: "مهندس الصحة والسلامة",
    paragraph:
      "أحد الجنود الذين يساهمون بارتقاء فريق عملنا و الشخص المسؤول عن الصحة والسلامة في فريقنا الذي يعمل من اجل خدمتكم.",
    src: img14,
    style: "img-team14  ",
  },
];


3. the most importent step: add these classes in css file , we divide the pirent container element into 25 columns and 25 rows

.img-current {
  grid-area: 9/17/18/26;
}
.img-team1 {
  grid-area: 2/1/7/6;
}
.img-team2 {
  grid-area: 1/7/7/13;
}
.img-team3 {
  grid-area: 1/14/6/19;
}
.img-team4 {
  grid-area: 2/20/7/25;
}
.img-team5 {
  grid-area: 9/1/14/6;
}
.img-team6 {
  grid-area: 8/6/12/10;
}
.img-team7 {
  grid-area: 7/12/12/17;
}
.img-team8 {
  grid-area: 15/1/23/9;
}
.img-team9 {
  grid-area: 13/9/18/14;
}
.img-team10 {
  grid-area: 17/14/21/18;
}
.img-team11 {
  grid-area: 20/18/23/21;
}
.img-team12 {
  grid-area: 19/22/23/26;
}
.img-team13 {
  grid-area: 19/9/24/14;
}
.img-team14 {
  grid-area: 22/14/25/17;
}
.grid-repeat {
  display: grid;
  grid-template-columns: repeat(25, calc((90%) / 25));
  grid-template-rows: repeat(25, calc((90%) / 25));
}
@media screen and (min-width: 1024px) {
  .grid-repeat{ 
    width: 80%;
  }
}
@media screen and (min-width: 800px) {
  .grid-repeat{ 
    width: 70%;
  }
}


You can modify as needed 

*/

"use client";
import Image from "next/image";
import { images } from "@/dataJson/DataTeam";
import React, { useEffect, useState } from "react";

export default function Team() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;      
      setCurrentImageIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section
      className=""
    >
      {/* section right */}
      <div className="h-fit grid-repeat justify-center items-center">
        <Image src={images[currentImageIndex].src} alt="current-img" className="rounded-full border-4 border-yel img-current w-full h-full " />
        {images.map((img, index) => (
          <Image
            key={index}
            className={`rounded-full w-full h-full ${img.style}`}
            src={img.src}
            alt={`currentImage`}
          />
        ))}
      </div>

      {/* section right  this section is not understand you can put in it any thing You want...*/}
      <div className=" flex flex-col gap-4 items-center justify-center ">
        <h4 className="font-extrabold text-xl md:text-5xl text-yel ">
          {images[currentImageIndex].name}
        </h4>
        <span className="text-dark-blue text-xl md:text-4xl">
          {images[currentImageIndex].role}
        </span>
        <p className=" text-black-sp md:text-xl">
          {images[currentImageIndex].paragraph}
        </p>
      </div>
    </section>
  );
}
