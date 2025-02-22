import React from "react";
import StateButton, { AuthState } from "./StateButton";

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
        {logoutBtn && <StateButton state={AuthState.SIGN_OUT} />}
      </div>

      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
