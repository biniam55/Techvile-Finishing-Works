import ErrorHandler from "./ErrorHandler";
import "./Timer.css";

const Timer = () => {
  return (
    <section className="timer1">
      <div className="matrix-processor">
        <div className="connect-us-wrapper">
          <b className="connect-us1">Connect US</b>
        </div>
        <form className="graph-builder">
          <div className="fill-the-form1">
            Fill the form so that our team can reach out to you
          </div>
          <input className="path-follower" placeholder="Name" type="text" />
          <div className="image-processor-wrapper">
            <div className="image-processor">
              <input
                className="audio-processor"
                placeholder="Email"
                type="text"
              />
              <input className="email4" placeholder="Phone" type="text" />
              <div className="external-interface">
                <button className="button5">
                  <b className="submit1">Submit</b>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Timer;
