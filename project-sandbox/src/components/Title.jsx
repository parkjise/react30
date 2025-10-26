function Title({ text, color }) {
  return <h1 className={`text-${color}`}>{!text ? "Title" : text}</h1>;
}

export default Title;
