/* 
1. install react-intersection-observer library
2. create classes animated-child-1, animated-child-2,and make-it-visible in css file:

 .animated-child-1 {
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
 .animated-child-2 {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.animated-child-2.make-it-visible,
.animated-child-2.make-it-visible {
  opacity: 1;
  transform: translateX(0);
}
*/


import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function MyComponent() {
    const { sectionRef, isVisible } = useIntersectionObserver();

    return (
        <section ref={sectionRef}>
            <div className={`animated-child-1 ${isVisible ? "make-it-visible" : ""}`}> ... </div>
            <div className={`animated-child-1 ${isVisible ? "make-it-visible" : ""}`}> ... </div>
        </section>
    )
}