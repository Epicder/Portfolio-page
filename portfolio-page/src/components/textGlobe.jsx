const TextGlobe = (props) => {
  const handleTextGlobe = () => {
      props.onClose();
  };

  return (
      <div className="clippy-asistant">
          <div className="clippy-text-globe">
              <p>{props.text}</p>
              <button onClick={handleTextGlobe}>Got it!</button>
          </div>
      </div>
  );
};

export default TextGlobe;