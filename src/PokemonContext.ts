import React, { Dispatch, SetStateAction } from "react";
import { Pokemon } from "./types/types";

type pokemonContextType = {
  filter: string;
  pokemon: Pokemon[];
  selectedPokemon: Pokemon | null;
  setFilter: Dispatch<SetStateAction<string>>;
  pokemonSet: Dispatch<SetStateAction<Pokemon[]>>;
  setSelectedPokemon: Dispatch<SetStateAction<Pokemon | null>>;
};

const PokemonContext = React.createContext<
  pokemonContextType | Record<string, never>
>({});

export default PokemonContext;
