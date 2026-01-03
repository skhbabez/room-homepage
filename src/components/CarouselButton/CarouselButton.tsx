import type { ComponentProps } from "react";
import arrowLeft from "../../assets/icon-angle-left.svg";
import arrowRight from "../../assets/icon-angle-right.svg";
import clsx from "clsx";

interface CarouselButtonProps extends ComponentProps<"div"> {
  onLeftClick: () => void;
  onRightClick: () => void;
  disableLeft?: boolean;
  disableRight?: boolean;
}

const CarouselButton = ({
  onLeftClick,
  onRightClick,
  className,
  disableLeft = false,
  disableRight = false,
  ...props
}: CarouselButtonProps) => {
  return (
    <div
      className={clsx("flex aspect-2/1 h-14 md:h-20 cursor-pointer", className)}
      {...props}
    >
      <button
        onClick={onLeftClick}
        disabled={disableLeft}
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
        disabled={disableRight}
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
