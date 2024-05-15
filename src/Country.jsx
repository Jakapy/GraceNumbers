import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Country(props) {
  const { flag, name, flags, capital } = props.data;
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {name.common} {flag}
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <img src={flags.png}></img>
        </CardContent>
        <CardFooter>
          <div>Glavno mesto:</div>
          <ul></ul>
        </CardFooter>
      </Card>
    </>
  );
}
