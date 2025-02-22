import { useNavigate } from "react-router-dom";
import CustomLink from "../components/CustomLink";
import Card from "../components/Card";
import { usePersistedUser } from "../hooks/usePersistedUser";
import { useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, loading } = usePersistedUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {

      navigate("/", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <main>
      <Card title="Huvudsida" logoutBtn={true}>
        <p>Välkommen, {user.username}!</p>
        <p style={{ color: "lightgreen" }}>
          {user.isAdmin ? "Du har admin perms.." : ""}
        </p>
        <Link className="custom-link bottom" to="/about">
          Om applikationen
        </Link>
      </Card>
    </main>
  );
};

export default Home;
