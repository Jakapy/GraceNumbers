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
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

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
  const [landlocked, setLandlocked] = useState(true);
  const [borders, setBorders] = useState(1);

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
      "https://restcountries.com/v3.1/all?fields=name,flag,flags,region,borders,landlocked,capital",
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
      <div className="container">
        <h1>Države</h1>
        <h3 className="">Izbira regije:</h3>
        <div className="grid grid-cols-3 gap-2">
          <Card className="width-64px">
            <Select onValueChange={(value) => setRegion(value)}>
              <SelectTrigger className="">
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
          </Card>
          <Card className="width-64px">
            <CardHeader>
              <CardTitle>Države brez morja</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Checkbox
                checked={landlocked}
                onCheckedChange={(value) => setLandlocked(value)}
              ></Checkbox>
              Označi, če nima morja
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Število sosednij držav: {borders}</CardHeader>
            <CardContent>
              <Slider
                onValueChange={(value) => setBorders(value)}
                defaultValue={[3]}
                max={10}
                step={1}
              />
            </CardContent>
          </Card>
        </div>
        <Carousel className="flex">
          <CarouselContent>
            {countries
              .filter((country) => borders == country.borders.length)
              .filter((country) => region == "all" || country.region == region)
              .filter((country) => country.landlocked == landlocked)
              .map((country) => (
                <CarouselItem className="basis-1/4">
                  <Country data={country}></Country>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
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
