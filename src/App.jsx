import { useEffect, useState } from "react";
import Random from "./Random.jsx";
import { Input } from "@/components/ui/input";
import { Select } 
 
export default function App() {
  const [fact, setFact] = useState({});
  const [number, setNumber] = useState(0);
  const [countries, setCountries] = useState([]);
  const [colors, setColors] = useState([
    "purple",
    "black",
    "white",
    "blue",
    "green",
  ]);

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

  async function getCountries() {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,region",
    );
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    getRandomFact();
    getCountries();
  }, []);

  useEffect(() => {
    getNumberFact(number);
  }, [number]);

  return (
    <>
      <h1>Države</h1>
      {countries
        .filter((country) => country.region == "Europe")
        .map((country) => (
          <p>{country["name"]["common"]}</p>
        ))}
      {colors.map((color) => (
        <p>{color}</p>
      ))}
      <p>_______________________</p>
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
