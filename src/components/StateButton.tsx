import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faArrowRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export enum AuthState {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

interface StateButtonProps {
  state: AuthState;
  title?: string;
}

const StateButton: React.FC<StateButtonProps> = ({ state, title }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (state === AuthState.SIGN_OUT) {
      localStorage.removeItem("userData");
      navigate("/", { replace: true });
    }
  };

  return (
    <button
      onClick={handleAction}
      className={`authBtn ${state === AuthState.SIGN_IN ? "inherit" : ""}
      }`}
    >
      <FontAwesomeIcon
        icon={
          state === AuthState.SIGN_OUT
            ? faArrowRightFromBracket
            : faRightToBracket
        }
      />
      {title}
    </button>
  );
};

export default StateButton;
