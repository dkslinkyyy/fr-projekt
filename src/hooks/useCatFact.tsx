import { useState } from "react";

const useCatFact = () => {
  const API_URL = "https://catfact.ninja/fact";
  const [fact, setFact] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Fejlade att fånga en katt.. error");
      const data = await response.json();
      setFact(data.fact);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { fact, error, fetchCatFact };
};

export default useCatFact;
