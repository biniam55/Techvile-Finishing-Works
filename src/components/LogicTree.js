import "./LogicTree.css";

const LogicTree = () => {
  return (
    <section className="logic-tree">
      <header className="input-handler">
        <div className="output-processor">
          <div className="fyn3">FYN</div>
          <img
            className="value-comparator-icon"
            loading="lazy"
            alt=""
            src="/frame4.svg"
          />
        </div>
      </header>
      <div className="loop-controller">
        <img
          className="data-splitter-icon"
          alt=""
          src="/data-splitter@2x.png"
        />
        <img
          className="error-handler-icon"
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </section>
  );
};

export default LogicTree;
