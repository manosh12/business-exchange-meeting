import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import '../App.css';
import {TopScroll} from "./TopScroll.jsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ビジネス交流会", link: "#business_exchange" },
    { name: "お問い合わせ", link: "#contact" },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="shadow-sm">
      <NavbarContent>
        <NavbarBrand>
          <Link to="/" onClick={TopScroll}>
            <div className="flex justify-start items-start gap-2">
              <img src="/images/logo1.svg" alt="logo" className="w-10 h-auto font-bold" />
              <h4 className="font-bold text-2xl mt-2 text-gray-600">Biz<span className="text-red-700">X</span> Meet</h4>
            </div>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 justify-end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} isActive={index === 0}>
              <Link
                to={item.link}
                className="nav-link font-bold text-md text-gray-600 hover:text-cyan-700"
                onClick={TopScroll}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="mobile-menu-item">
            <Link
              to={item.link}
              className="w-full"
              onClick={() => {
                handleMenuClose();
                TopScroll();
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
