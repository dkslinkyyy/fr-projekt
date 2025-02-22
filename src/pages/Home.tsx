import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { usePersistedUser } from "../hooks/usePersistedUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCatFact from "../hooks/useCatFact";

const Home = () => {
  const { user, loading } = usePersistedUser();
  const navigate = useNavigate();
  const { fact, error, fetchCatFact } = useCatFact();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleFetchCatFact = async () => {
    setIsFetching(true);
    await fetchCatFact();
    setIsFetching(false);
  };
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
        <p style={{ color: "lightgreen", fontWeight: "bold" }}>
          {user.isAdmin ? "Du har fulla rättigheter." : ""}
        </p>

        <div className="fact-section">
          <p>Random fakta om katter:</p>
          <button
            style={{ width: "50%" }}
            onClick={handleFetchCatFact}
            disabled={isFetching}
          >
            {isFetching ? "Hämtar..." : "Få Random Fakta"}
          </button>{" "}
          {error ? (
            <p style={{ color: "red" }}>Error: {error}</p>
          ) : (
            <p style={{ color: "lightgray", fontStyle: "italic" }}>{fact}</p>
          )}
        </div>

        <Link className="custom-link bottom" to="/about">
          Om applikationen
        </Link>
      </Card>
    </main>
  );
};

export default Home;
