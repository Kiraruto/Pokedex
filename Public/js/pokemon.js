/** @format */

async function obterDadosDeTodosOsPokemon() {
  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=386");

    if (!resposta.ok) {
      throw new Error(`Erro HTTP! Status: ${resposta.status}`);
    }

    const dados = await resposta.json();

    const pokemons = [];

    for (const pokemon of dados.results) {
      const detalhesResposta = await fetch(pokemon.url);
      const detalhes = await detalhesResposta.json();
      console.log(`Nome: ${detalhes.name}, ID: ${detalhes.id}`);
      pokemons.push({
        name: detalhes.name,
        id: detalhes.id,
        image: detalhes.sprites.front_default,
      });
    }

    return pokemons; // Retorna a lista de pokemons
  } catch (erro) {
    console.error("Erro:", erro);
    throw erro; // Rejeita a promessa em caso de erro
  }
}

// Exemplo de uso:
async function main() {
  try {
    const poke = await obterDadosDeTodosOsPokemon();
    console.log(poke);
  } catch (erro) {
    console.error("Erro na obtenção de dados:", erro);
  }
}

// Execute a função main
main();

export default obterDadosDeTodosOsPokemon; // Exporte a função, se necessário
