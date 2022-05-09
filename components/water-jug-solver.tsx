import CounterComponent from './counter';
import { useEffect, useState } from 'react';
import { JugState, WaterJugSolver } from '@jcirizar/water-jug-solver';

const WaterJugSolverComponent = () => {
  let [xGallon, setXGallon] = useState(0);
  let [yGallon, setYGallon] = useState(0);
  let [zGallon, setZGallon] = useState(0);
  let [steps, setSteps] = useState<JugState[]>([]);
  let [noSolution, setNoSolution] = useState(false);

  const xGallonOnChange = (value: number) => setXGallon(value);
  const yGallonOnChange = (value: number) => setYGallon(value);
  const zGallonOnChange = (value: number) => setZGallon(value);

  useEffect(() => {
    const waterJugSolver = new WaterJugSolver(xGallon, yGallon, zGallon);
    const solution = waterJugSolver.solve();
    if (typeof solution !== 'string') {
      setSteps(solution);
      setNoSolution(false);
    } else {
      setNoSolution(true);
    }


  }, [xGallon, yGallon, zGallon]);

  return (
    <>
      <h1 className="text-center mb-6 text-3xl text-purple-500 font-extrabold">Water Jug Solver</h1>
      <ul className="flex justify-around mb-16">
        <li><CounterComponent label={'xGallon'} value={xGallon} onChange={xGallonOnChange}/></li>
        <li><CounterComponent label={'yGallon'} value={yGallon} onChange={yGallonOnChange}/></li>
        <li><CounterComponent label={'zGallon'} value={zGallon} onChange={zGallonOnChange}/></li>
      </ul>

      {noSolution ? (
        <h1 className="font-bold text-3xl bg-red-300 text-red-600 text-center">No Solution</h1>
      ) : (
        <>
          <h1 className="text-center mb-6 text-2xl text-cyan-500 font-bold">Steps:</h1>
          <table className="w-full mb-16">
            <thead className="text-left">
            <tr>
              <th>Step Number:</th>
              <th className="text-cyan-500">Action:</th>
              <th className="text-yellow-500">Small Jug</th>
              <th className="text-green-500">Large Jug</th>
            </tr>
            </thead>
            <tbody>
            {steps.map((jugState, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td className="text-cyan-500">{jugState.action}</td>
                <td className="text-yellow-500">{jugState.jugs[0].value}</td>
                <td className="text-green-500">{jugState.jugs[1].value}</td>
              </tr>;
            })}
            </tbody>
          </table>
        </>
      )}

    </>
  );
};

export default WaterJugSolverComponent;
