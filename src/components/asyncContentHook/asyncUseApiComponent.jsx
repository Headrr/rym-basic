import React, { useState } from "react";
import "../../css/content.css";
import {asyncUseApi} from "../../hooks/useApiAsync.jsx"

const asyncUseApiComponent = () => {
  const asyncDataApi = asyncUseApi();
  return (
    <>
      <h1>Rick and Morty Api from HOOK</h1>
      <main className="contenedor">
        <section className="contenedor-cards">
          {asyncDataApi.map((char) => {
            return (
              <article
                className="card"
                style={{ backgroundImage: `url(${char.image})` }}
              >
                <div className="textos">
                  <h3>{char.name}</h3>
                  <p>#{char.id}</p>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default asyncUseApiComponent;
