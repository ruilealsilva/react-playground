import React, { useState } from "react";

export const FruitContext = React.createContext("Apple");

export const VegetableContext = React.createContext("Tomato");

const Store = ({ children }) => {
  const [fruit, setFruit] = useState("Apple");
  const [vegetable, setVegetable] = useState("Tomato");

  return (
    <FruitContext.Provider value={[fruit, setFruit]}>
      <VegetableContext.Provider value={[vegetable, setVegetable]}>
        {children}
      </VegetableContext.Provider>
    </FruitContext.Provider>
  );
};

export default Store;
