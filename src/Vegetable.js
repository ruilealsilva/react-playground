import React, { useContext } from "react";
import { VegetableContext } from "./Store";

const Vegetable = () => {
  const [, setVegetable] = useContext(VegetableContext);
  return (
    <>
      <button onClick={() => setVegetable("Brocoli")}>Set veg to Broc</button>
    </>
  );
};

export default Vegetable;
