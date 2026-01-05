import { NavItem, NavList, NavMenu } from "../../components/Nav/Nav";
import logo from "../../assets/logo.svg";
const links = ["home", "shop", "about", "contact"];

const Navigation = () => {
  return (
    <nav className="fixed z-20 flex w-full items-center justify-center mt-12">
      <img src={logo} alt="" />
      <NavMenu className="absolute left-6 md:left-16">
        <NavList>
          {links.map((link) => (
            <NavItem key={link}>{link}</NavItem>
          ))}
        </NavList>
      </NavMenu>
    </nav>
  );
};

export default Navigation;
