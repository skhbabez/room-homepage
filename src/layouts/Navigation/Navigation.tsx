import { NavItem, NavLink, NavList, NavMenu } from "../../components/Nav/Nav";
import logo from "../../assets/logo.svg";
const links = ["home", "shop", "about", "contact"];

const Navigation = () => {
  return (
    <nav className="fixed z-20 flex w-full items-center justify-center xl:justify-start mt-12 xl:ms-16 xl:gap-14">
      <img src={logo} alt="" />
      <NavMenu className="max-xl:absolute left-6 md:left-16">
        <NavList>
          {links.map((link) => (
            <NavItem key={link}>
              <NavLink href="#"> {link}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavMenu>
    </nav>
  );
};

export default Navigation;
