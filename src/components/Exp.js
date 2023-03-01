import React, { useState } from "react";

const Exp = () => {
  const [dp, setDp] = useState(false);

  return (
    <div
      className="flex flex-col justify-center items-start"
      style={{ width: "70vw" }}
    >
      <h1
        className="text-[#FCA311] tracking-wide pb-5"
        style={{ fontSize: "5vw", fontFamily: "Share Tech Mono" }}
      >
        Experience
      </h1>
      <form>
        <button type="button" onClick={() => setDp(!dp)}>
          Test
        </button>
        {dp && <div>Test</div>}
      </form>
    </div>
  );
};

export default Exp;
