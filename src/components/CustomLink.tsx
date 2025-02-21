import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} className="custom-link">
      {children}
    </Link>
  );
};

export default CustomLink;
