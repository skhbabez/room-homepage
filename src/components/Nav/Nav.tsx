import clsx from "clsx";
import type { ComponentProps } from "react";
import menu from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
const NavMenu = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={clsx("flex flex-col items-center", className)} {...props}>
      <button popoverTarget="navigation" popoverTargetAction="show">
        <img src={menu} alt="open navigation" />
      </button>

      <div
        className="w-full fixed bg-white py-11.75 px-[1.51375rem] md:px-[3.96875rem] backdrop:bg-black/50"
        id="navigation"
        popover="auto"
      >
        <div className="flex justify-between">
          <button popoverTarget="navigation" popoverTargetAction="hide">
            <img className="h-[0.9725rem]" src={close} alt="close navigation" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

const NavList = ({ children, className, ...props }: ComponentProps<"ul">) => {
  return (
    <ul className={clsx("flex gap-8", className)} {...props}>
      {children}
    </ul>
  );
};

const NavItem = ({ children, className, ...props }: ComponentProps<"li">) => {
  return (
    <li className={clsx("", className)} {...props}>
      {children}
    </li>
  );
};

export { NavMenu, NavItem, NavList };
