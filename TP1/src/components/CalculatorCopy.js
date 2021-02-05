import React, { useState } from "react";

function CalculatorCopy() {
  const [poid, setPoid] = useState(0);
  const [taille, setTaille] = useState(0);
  const [result, setResult] = useState(0);

  function calculIMC() {
    setResult(parseInt(poid) + parseInt(taille));
  }

  function onChangePoid(event) {
    const value = event.target.value;
    setPoid(value);
  }

  function onChangeTaille(event) {
    const value = event.target.value;
    setTaille(value);
  }

  return (
    <div>
      <h1>Calcul IMC</h1>
      <div>
        <form>
          <div>
            <label>Poid (kg) {poid}</label>
            <input
              onChange={function (event) {
                onChangePoid(event);
              }}
              type="text"
              placeholder="entrer le poid"
            />
          </div>

          <div>
            <label>Taille (m) {taille}</label>
            <input
              onChange={function (event) {
                onChangeTaille(event);
              }}
              type="text"
              placeholder="entrer la taille"
            />
          </div>

          <div>
            <button>rénitialiser</button>
            <button type="button" onClick={calculIMC}>
              calculer
            </button>
          </div>
        </form>

        <div>{result === 0 ? "" : <h3>result : {result}</h3>}</div>
      </div>
    </div>
  );
}

export default CalculatorCopy;
