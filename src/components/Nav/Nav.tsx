import clsx from "clsx";
import type { ComponentProps } from "react";
import menu from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
const NavMenu = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={clsx("flex flex-col xl:flex-row items-center", className)}
      {...props}
    >
      <button
        className="xl:hidden cursor-pointer"
        popoverTarget="navigation"
        popoverTargetAction="show"
      >
        <img src={menu} alt="open navigation" />
      </button>
      <div className="hidden xl:block">{children}</div>
      <div
        className="w-full fixed bg-white py-11.75 px-[1.51375rem] md:px-[3.96875rem]
        xl:hidden 

        -translate-y-full
        [:popover-open]:translate-y-0
        starting:[:popover-open]:-translate-y-full
        transition-discrete
        transition-[translate,display,overlay] 
        duration-800
        
        backdrop:bg-black/0
        [:popover-open]:backdrop:bg-black/50
        starting:[:popover-open]:backdrop:bg-black/0
        backdrop:transition-[background-color,display,overlay]
        backdrop:duration-800
        backdrop:transition-discrete
        "
        id="navigation"
        popover="auto"
      >
        <div className="flex justify-between">
          <button
            className="cursor-pointer"
            popoverTarget="navigation"
            popoverTargetAction="hide"
          >
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

const NavLink = ({ children, className, ...props }: ComponentProps<"a">) => {
  return (
    <a
      className={clsx(
        "relative text-3-semibold text-black xl:text-white outline-none group",
        className
      )}
      {...props}
    >
      {children}
      <div
        className="absolute border-t-2 text-black xl:text-white w-[50%] left-1/2 -translate-x-1/2
      transition-[display, translate, opacity]
      transition-discrete
      ease-in
      duration-200
      
      opacity-0
      group-hover:opacity-100
      group-focus-visible:opacity-100
      starting:group-hover:opacity-0
      starting:group-focus-visible:opacity-0
      
      -translate-y-1.5
      group-hover:translate-y-0
      group-focus-visible:translate-y-0
      starting:group-hover:-translate-y-1.5
      starting:group-focus-visible:-translate-y-1.5
      "
      ></div>
    </a>
  );
};
export { NavMenu, NavItem, NavList, NavLink };
