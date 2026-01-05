import { useRef } from "react";
import arrow from "../../assets/icon-arrow.svg";
import CarouselButton from "../../components/CarouselButton/CarouselButton";

const content = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imageMobile: "images/mobile-image-hero-1.jpg",
    imageDesktop: "images/desktop-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imageMobile: "images/mobile-image-hero-2.jpg",
    imageDesktop: "images/desktop-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imageMobile: "images/mobile-image-hero-3.jpg",
    imageDesktop: "images/desktop-image-hero-3.jpg",
  },
];

const Carousel = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  const leftClickHandler = () => {
    if (carouselRef.current) {
      const element = carouselRef.current;
      const width = element.clientWidth;
      element.scrollBy({
        left: -width,
        behavior: "smooth",
      });
    }
  };

  const rightClickHandler = () => {
    if (carouselRef.current) {
      const element = carouselRef.current;
      const width = element.clientWidth;
      element.scrollBy({
        left: width,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative">
      <CarouselButton
        className="absolute right-0 top-90 -translate-y-full md:top-100 xl:right-150 xl:top-133.5 xl:translate-x-full supports-[selector(::scroll-button(*))]:hidden"
        onLeftClick={leftClickHandler}
        onRightClick={rightClickHandler}
      />
      <ul
        ref={carouselRef}
        className="flex snap-x snap-mandatory overflow-hidden scroll-smooth carousel-controls "
      >
        {content.map(({ title, text, imageMobile, imageDesktop }) => (
          <li key={title} className="flex-[0_0_100%] snap-center">
            <div className="flex flex-col xl:flex-row w-full">
              <picture className="w-full">
                <source srcSet={imageDesktop} media="(min-width: 48em)" />
                <img
                  height={320}
                  width={375}
                  className="object-cover object-center w-full h-90 md:h-100 xl:h-133.5"
                  src={imageMobile}
                  alt=""
                />
              </picture>
              <div className="py-16 px-[2.03125rem] md:px-16 xl:px-25 xl:pt-34.75 xl:w-150 xl:shrink-0">
                <h1 className="text-2 md:text-1 ">{title}</h1>
                <p className="text-3-medium text-grey-500 mt-4">{text}</p>
                <a
                  href="#"
                  className="flex items-center justify-between md:justify-self-start gap-6 xl:gap-8 mt-8 md:mt-6"
                >
                  <span className="uppercase text-4">shop now</span>
                  <img src={arrow} alt="" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
