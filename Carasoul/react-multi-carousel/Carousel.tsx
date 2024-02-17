import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Carousel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
  };
  return (
    <div>
      <Carousel
        arrows={false}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={5000}
        infinite
        swipeable={false}
        draggable={false}
        shouldResetAutoplay={true}
        rewind={true}
        customRightArrow={<CustomNextArrow />}
        customLeftArrow={<CustomPrevArrow />}
        className="w-ful"

        // or other settings..
      >
        {/* // here elements ... */}
      </Carousel>
    </div>
  );
}
