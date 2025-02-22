import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";
import Popup from "../components/Popup";
import Card from "../components/Card";
import { usePersistedUser } from "../hooks/usePersistedUser";
import StateButton, { AuthState } from "../components/StateButton";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [hashKey, setHashKey] = useState<string>("");
  const [loginFailPopup, setLoginFailPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const { user, loading } = usePersistedUser();

  useEffect(() => {
    if (!loading && user) {
      navigate("/main", { replace: true });
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <p>Laddar...</p>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    let isUserValid = false;

    users.forEach((user) => {
      if (
        user.username === inputUser.username &&
        user.hashKey === inputUser.hashKey
      ) {
        localStorage.setItem("userData", JSON.stringify(user));
        navigate("/main");
        isUserValid = true;
      }
    });

    if (!isUserValid) {
      setLoginFailPopup(true);
    }
  };

  return (
    <main>
      <Card title="Logga in">
        {loginFailPopup && (
          <Popup
            message="Fel användarnamn eller lösenord!"
            onClose={() => setLoginFailPopup(false)}
          />
        )}
        <p style={{ color: "red" }}>
          Detta är en dummy-sida och därför är inloggningen hårdkodad (GÅR EJ
          ATT SKAPA KONTO), <strong>hint till inloggning:</strong> kolla
          källkoden
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
          <label>
            Lösenord:
            <input
              type="password"
              value={hashKey}
              onChange={(e) => setHashKey(e.target.value)}
              required
            />
          </label>
          <StateButton state={AuthState.SIGN_IN} title="Logga in" />
        </form>
      </Card>
    </main>
  );
};

export default Login;
