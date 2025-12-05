import React, { useState } from "react";
import Button from "../components/Button";
import Courses from "./components/Courses";
import { coursesDB } from "./db/coursesDB";
import { currenciesDB } from "./db/currenciesDB";
import { CurrencyContext } from "./context/currencies-context";

document.body.style.background = "#282c34";
document.body.style.color = "#eee";
const Store = () => {
  const [currency, setCurrency] = useState(currenciesDB.Euro);
  return (
    <CurrencyContext.Provider value={currency}>
      <div className="container p-1">
        <h4 className="mb-2">Change currency : </h4>
        {Object.values(currenciesDB).map((cur) => (
          <Button
            key={cur.label}
            text={cur.label}
            btnClass={"btn-light btn-sm"}
            onClick={() => setCurrency(cur)}
          />
        ))}
        <header className="text-center my-4">
          <h1 className="title fs-xl">Store</h1>
          <h2 className="text-uppercase mb-2">Become a web developer</h2>
          <p className="mx-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            nulla!
          </p>
        </header>
        <Courses list={coursesDB} />
      </div>
    </CurrencyContext.Provider>
  );
};

export default Store;
