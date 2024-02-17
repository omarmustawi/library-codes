/* 
1. install react-slick library
2. install react-slick css
3. set settings for slides in a varaiable as in settings
*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    // slidesToShow: width <= 900 ?  1 : width < 1200 ? 2 :  3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    initialSlide: 0, // Index of the first slide
    responsive: [
      {
        breakpoint: 2024, // Large screen breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100, // Medium screen breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Medium screen breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="flex justify-around my-16 gap-4 ">
      {PROJECTS.map((project: Project) => (
        <SlideOfProject
          key={project.id}
          title={project.title}
          img={project.img}
          openModal={() => openModal(project.detailProject)}
          ...
        />
      ))}
    </Slider>
  );
}
