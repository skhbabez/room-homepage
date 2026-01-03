import type { ComponentProps } from "react";
import arrowLeft from "../../assets/icon-angle-left.svg";
import arrowRight from "../../assets/icon-angle-right.svg";
import clsx from "clsx";

interface CarouselButtonProps extends ComponentProps<"div"> {
  onLeftClick: () => void;
  onRightClick: () => void;
}

const CarouselButton = ({
  onLeftClick,
  onRightClick,
  className,
  ...props
}: CarouselButtonProps) => {
  return (
    <div
      className={clsx("flex aspect-2/1 h-14 md:h-20 cursor-pointer", className)}
      {...props}
    >
      <button
        onClick={onLeftClick}
        className="flex-1 bg-black outline-none focus-visible:bg-grey-800 hover:bg-grey-800 transition-colors duration-150 ease-in"
      >
        <img
          className="mx-auto h-[1.05rem] md:h-6"
          src={arrowLeft}
          alt="Previous"
        />
      </button>
      <button
        onClick={onRightClick}
        className="flex-1 bg-black outline-none focus-visible:bg-grey-800 hover:bg-grey-800 transition-colors duration-150 ease-in"
      >
        <img
          className="mx-auto h-[1.05rem] md:h-6"
          src={arrowRight}
          alt="Next"
        />
      </button>
    </div>
  );
};

export default CarouselButton;
