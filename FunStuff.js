import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function FunStuff() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary floating-button2"
        data-bs-toggle="collapse"
        data-bs-target="#demo"
      >
        Fun Stuff
      </button>
      <div id="demo" className="border-primary collapse">
        <div className="mt-4 p-5 bg-primary text-white rounded">
          <h4>Fun Break Stuff!</h4>
          Hydrating, stretching exercises, quick meditations, trivia questions,
          move around, or rest your eyes.
        </div>
      </div>
    </>
  );
}
export default FunStuff;
