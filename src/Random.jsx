export default function Random(props) {
  const { text, number } = props.fact;
  return (
    <div
      className="rounded-bg 
    grid grid-flow-col grid-rows-4  gap-4 bg-slate-300 text-xl oldstyle-nums"
    >
      <div className="italic">{text}</div>
    </div>
  );
}

//<div className="w-32 rounded border-2 border-dotted border-indigo-600 pt-2 text-lg">
//      {number}
//      </div>
