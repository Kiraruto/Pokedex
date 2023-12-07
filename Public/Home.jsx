/** @format */

import React, { useState, useEffect } from "react";
import obterDadosDeTodosOsPokemon from "./js/pokemon";
import "./Home.css"; // Importe o arquivo CSS

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = await obterDadosDeTodosOsPokemon();
        setPokemons(dados);
      } catch (erro) {
        console.error("Erro na obtenção de dados:", erro);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Pokemons And Pokemons</h1>
      <hr />
      <br />
      <div className="pokemon-container">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={`${pokemon.image}`} className="pokemon-image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
