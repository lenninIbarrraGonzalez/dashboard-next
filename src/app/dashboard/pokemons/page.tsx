import { PokemonsResponse } from "@/app/pokemons/interfaces";
import Image from "next/image";

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
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="flex flex-col items-center">
          <p className="capitalize">{pokemon.name}</p>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}
