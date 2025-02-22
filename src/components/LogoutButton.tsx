import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");

    navigate("/", { replace: true });
  };

  return (
    <button onClick={handleLogout} className="logoutBtn">
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </button>
  );
};

export default LogoutButton;
