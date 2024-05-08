import { useEffect, useState } from "react";
import Random from "./Random.jsx";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Country } from "./Country.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Vaja from "./Vaja.jsx";

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
  const [region, setRegion] = useState("Europe");
  const [landlocked, setLandlocked] = useState("true");

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
      "https://restcountries.com/v3.1/all?fields=name,flag,flags,region,borders,landlocked",
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
      <h3 className="">Izbira regije: {region}</h3>
      <div className="grid grid-cols-3 gap-2">
        <Select onValueChange={(value) => setRegion(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Americas">America</SelectItem>
            <SelectItem value="Africa">Africa</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Carousel>
        <CarouselContent>
          {countries
            .filter((country) => region == "all" || country.region == region)
            .map((country) => (
              <CarouselItem className="basis-1/4">
                <Country data={country}></Country>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
