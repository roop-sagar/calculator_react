/* eslint-disable no-eval */
import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
     const [state, setState] = useState("");

     const clickNum = (e) => {
          setState(state.concat(e.target.value));
     };

     const clickSubmit = () => {
          setState(eval(state));
     };
     const clickBack = () => {
          setState(state.slice(-state.length, -1));
     };
     const clickClear = () => {
          setState("");
     };
     const sqrt = () => {
          setState(Math.sqrt(eval(state)));
     };

     return (
          <>
               <div className="calculator">
                    <input
                         type="text"
                         onChange={(e) => e.target.value}
                         name="text"
                         value={state}
                    />
                    <button onClick={sqrt}>&#8730;</button>

                    <button onClick={clickClear}>clear</button>
                    <button onClick={clickBack}>
                         <i className="material-icons">&#xe14a;</i>
                    </button>
                    <button onClick={clickNum} value={"/"}>
                         &divide;
                    </button>
                    <button onClick={clickNum} value={7}>
                         7
                    </button>
                    <button onClick={clickNum} value={8}>
                         8
                    </button>
                    <button onClick={clickNum} value={9}>
                         9
                    </button>

                    <button onClick={clickNum} value={"+"}>
                         +
                    </button>
                    <button onClick={clickNum} value={4}>
                         4
                    </button>
                    <button onClick={clickNum} value={5}>
                         5
                    </button>
                    <button onClick={clickNum} value={6}>
                         6
                    </button>
                    <button onClick={clickNum} value={"-"}>
                         -
                    </button>
                    <button onClick={clickNum} value={1}>
                         1
                    </button>
                    <button onClick={clickNum} value={2}>
                         2
                    </button>
                    <button onClick={clickNum} value={3}>
                         3
                    </button>
                    <button onClick={clickNum} value={"*"}>
                         *
                    </button>
                    <button onClick={clickNum} value={"00"}>
                         00
                    </button>
                    <button onClick={clickNum} value={0}>
                         0
                    </button>
                    <button onClick={clickNum} value={"."}>
                         .
                    </button>
                    <button onClick={clickSubmit}>=</button>
               </div>
          </>
     );
};

export default Calculator;
