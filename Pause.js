function Pause({ onClick }) {
  return (
    <div>
      <button className="btn btn-primary btn-lg pause" onClick={onClick}>
        Pause
      </button>
    </div>
  );
}
export default Pause;
