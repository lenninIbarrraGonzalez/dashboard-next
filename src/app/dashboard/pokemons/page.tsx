import { PokemonsGrid } from "@/app/pokemons";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";


const getPokemon = async (
  limit = 20,
  offset = 0
): Promise<{ name: string; id: string }[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name!,
    id: pokemon.url.split("/").at(-2)!,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemon(10);

  return (
    <>
      <span className="text-2xl font-bold mb-5 flex flex-col items-center">
        Listado de pokemons <small>Estatico</small>
      </span>
      <PokemonsGrid pokemons={pokemons}/>
    </>
  );
}
