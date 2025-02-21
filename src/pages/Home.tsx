import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";
import CustomLink from "../components/CustomLink";

import Card from "../components/Card";

interface LocationState {
  user: User;
}

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | undefined;

  //om ingen användardata hittat, gå till inloggning igen
  if (!state || !state.user) {
    navigate("/", { replace: true });
    return null;
  }

  const { user } = state;

  return (
    <main>
      <Card title="Huvudsida">
        <p>Välkommen, {user.username}!</p>
        <p>{user.isAdmin ? "Du har admin perms.." : ""}</p>
        <CustomLink to="/about">Om applikationen</CustomLink>
      </Card>
    </main>
  );
};

export default Main;
