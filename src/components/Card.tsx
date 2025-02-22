import React from "react";
import LogoutButton from "./LogoutButton";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  logoutBtn?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className,
  logoutBtn,
}) => {
  return (
    <div className={`card ${className || ""}`}>
      <div className="card-header">
        <h1>{title}</h1>
        {logoutBtn && <LogoutButton />}
      </div>

      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
