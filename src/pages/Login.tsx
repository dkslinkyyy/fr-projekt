import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";
import Popup from "../components/Popup";
import Card from "../components/Card";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [hashKey, setHashKey] = useState<string>("");
  const [loginFailPopup, setLoginFailPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //hindra standard event

    //skapa objekt utifrån data från forms
    const inputUser: User = { username, hashKey };

    const adminUser: User = {
      username: "admin",
      hashKey: "cooladmin123",
      isAdmin: true,
    };
    const averageUser: User = {
      username: "default",
      hashKey: "abc123",
      isAdmin: false,
    };

    const users: User[] = [adminUser, averageUser];

    users.forEach((user) => {
      if (
        user.username == inputUser.username &&
        user.hashKey == inputUser.hashKey
      ) {
        navigate("/main", { state: { user } });
      } else {
        setLoginFailPopup(true);
      }
    });
  };

  return (
    <main>
      <Card title="Logga in">
        {loginFailPopup && (
          <Popup
            message="Fel användarnamn eller mejl!"
            onClose={() => setLoginFailPopup(false)}
          />
        )}
        <p style={{ color: "red" }}>
          detta är en dummy sida och därför är inloggningen hårdkodad(GÅR EJ ATT
          SKAPA KONTO), <strong>hint till inloggning:</strong> kolla källkoden
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Användarnamn:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Lösenord:
            <input
              type="password"
              value={hashKey}
              onChange={(e) => setHashKey(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Logga in</button>
        </form>
      </Card>
    </main>
  );
};

export default Login;
