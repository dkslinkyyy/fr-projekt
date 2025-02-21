import React from "react";

interface CardProps {
  title: string;
  children?: React.ReactNode; // 👈 This allows you to pass any HTML inside <Card>
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
