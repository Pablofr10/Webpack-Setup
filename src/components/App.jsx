import "../styles/index.scss";
import React from "react";
import Recipes from "./Recipes";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
