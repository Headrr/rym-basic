import React from "react";
import "../../css/content.css";
import banner from "./img/banner.jpg";

const Content = () => {
  return (
    <main className="contenedor">
      <section className="contenedor-cards">
        <article
          className="card"
          style={{
            backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/1.jpeg"})`,
          }}
        >
          <div className="textos">
            <h3>Rick Sanchez</h3>
            <p>#1</p>
          </div>
        </article>
        <article
          className="card"
          style={{
            backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/2.jpeg"})`,
          }}
        >
          <div className="textos">
            <h3>Morty Smith</h3>
            <p>#2</p>
          </div>
        </article>
        <article
          className="card"
          style={{
            backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/3.jpeg"})`,
          }}
        >
          <div className="textos">
            <h3>Summer Smith</h3>
            <p>#3</p>
          </div>
        </article>

        <article
          className="card"
          style={{
            backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/4.jpeg"})`,
          }}
        >
          <div className="textos">
            <h3>Beth Smith</h3>
            <p>#4</p>
          </div>
        </article>
        <article
          className="card"
          style={{
            backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/5.jpeg"})`,
          }}
        >
          <div className="textos">
            <h3>Jerry Smith</h3>
            <p>#5</p>
          </div>
        </article>
        <article
          className="card"
          style={{
            backgroundImage: `url(${"https://rickandmortyapi.com/api/character/avatar/6.jpeg"})`,
          }}
        >
          <div className="textos">
            <h3>Abadango Cluster Princess</h3>
            <p>#6</p>
          </div>
        </article>
      </section>

      <aside className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <h3>Cartas disponibles</h3>
        <ul>
          <li>#1 Rick Sanchez</li>
          <li>#2 Morty Smith</li>
          <li>#3 Summer Smith</li>
          <li>#4 Beth Smith</li>
          <li>#5 Jerry Smith</li>
          <li>#6 Abadango Cluster Princess</li>
        </ul>
        <button className="boton">Comprar</button>
      </aside>
    </main>
  );
};

export default Content;
