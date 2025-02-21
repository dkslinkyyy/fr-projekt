// src/pages/Home.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../interfaces/User";

const greet = (name: string): string => {
  return `Hejsan, ${name}!`;
};

const addNumbers = (a: number, b: number): number => {
  return a + b;
};

const Home = () => {
  const [count, setCount] = useState<number>(0);

  const user: User = { username: "testuser", email: "johndoe@gmail.com" };

  return (
    <div>
      <h1>Simpelt React projekt</h1>
      <p>{greet(user.username)}</p>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Exempel: 2 + 3 = {addNumbers(2, 3)}</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
