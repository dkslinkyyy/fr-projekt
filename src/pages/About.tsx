import { Link } from "react-router-dom";
import Card from "../components/Card";
import CustomLink from "../components/CustomLink";
function App() {
  return (
    <main>
      <Card title="Om applikationenen">
        <p>
          Utvecklat av the one and only:{" "}
          <a
            href="https://dkslinkyyy.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            dkslinkkyy
          </a>
          <br></br>
          <CustomLink to="/main">Gå tillbaka</CustomLink>
        </p>
      </Card>
    </main>
  );
}

export default App;
