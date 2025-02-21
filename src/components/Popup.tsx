import React from "react";

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "absolute" as const,
    transform: "translate(-50%, -50%)",
    top: "10%",
    left: "50%",
    transition: "all 15s ease",
  },
  popup: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    textAlign: "center" as const,
  },
};

export default Popup;
