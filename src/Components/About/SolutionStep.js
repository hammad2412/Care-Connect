function SolutionStep(props) {
  return (
    <div className="about-text-step">
      <p className="about-text-title">
        <span>{props.title}</span>
      </p>
      <p className="about-text-description">{props.description}</p>
    </div>
  );
}

export default SolutionStep;
