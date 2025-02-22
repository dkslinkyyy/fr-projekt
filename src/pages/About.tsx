import Card from "../components/Card";
import { Link } from "react-router-dom";
function About() {
  return (
    <main>
      <Card title="Om applikationenen" logoutBtn={true}>
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
          <Link className="custom-link bottom" to="/main">
            Gå till Huvudsida
          </Link>
        </p>
      </Card>
    </main>
  );
}

export default About;
