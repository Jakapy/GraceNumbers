import { useEffect, useState } from "react";
import Random from "./Random.jsx";
import { Input } from "@/components/ui/input";

export default function App() {
  const [fact, setFact] = useState({});
  const [number, setNumber] = useState(0);

  async function getRandomFact(number) {
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    setFact(data);
  }

  async function getNumberFact(number) {
    const response = await fetch("http://numbersapi.com/" + number + "?json");
    const data = await response.json();
    setFact(data);
  }

  useEffect(() => {
    getRandomFact();
  }, []);

  useEffect(() => {
    getNumberFact(number);
  }, [number]);

  return (
    <>
      <Input
        className="w-32 rounded border-2 border-dotted border-indigo-600 pt-2 text-lg"
        placeholder="Tukaj vpiši številko"
        onChange={(e) => setNumber(e.target.value)}
        type="number"
      ></Input>
      <Random fact={fact}></Random>
    </>
  );
}

//onChange
//fetch <Random>{fact.text}</Random>;
