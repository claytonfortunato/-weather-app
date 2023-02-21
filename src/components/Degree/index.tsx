const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <span>°C</span>
  </span>
);

export default Degree;
