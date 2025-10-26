export default function WorkoutDay({ text, color }) {
  return <h4 className={`text-${color}  card bg-orange m-5 p-2`}>{text}</h4>;
}
