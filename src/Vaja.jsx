import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Vaja() {
  const [number, setNumber] = useState(1);
  const [numbers, setNumbers] = useState([1, 2, 3]);

  return (
    <div>
      <p>Vrednost za number je {number}</p>
      <p>Seznam števil v numbers:</p>
      {numbers.map((a) => (
        <li>{a * 3}</li>
      ))}
      <Button onclick={() => setNumber(4)}>{number}</Button>
    </div>
  );
}
