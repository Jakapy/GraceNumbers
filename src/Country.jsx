export function Country(props) {
  const { flag, name } = props.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name.common}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>{flag}</p>
      </CardFooter>
    </Card>
  );
}
