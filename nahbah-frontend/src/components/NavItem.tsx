import React from "react";
import { Link } from "react-router-dom";

export interface NavItemProps {
  text: string;
  to: string;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ text, to, active = false }) => {
  return (
    <Link
      to={to}
      className="relative text-white font-bold py-2 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded"
      style={{ fontFamily: "Fjalla One, sans-serif" }}
      aria-current={active ? 'page' : undefined}
    >
      {text}
      {active && (
        <div
          className="absolute bottom-0 left-0 w-full h-0.5"
          style={{
            background: 'linear-gradient(90deg, #F9D90B 0%, #98F90F 100%)',
          }}
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

export default NavItem;