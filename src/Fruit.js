import React, { useContext } from "react";
import { FruitContext } from "./Store";

const Fruit = () => {
  const [, setFruit] = useContext(FruitContext);
  return (
    <>
      <button onClick={() => setFruit("Banana")}>Set Fruit to Banana</button>
    </>
  );
};

export default Fruit;
