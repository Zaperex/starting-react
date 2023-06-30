import { useContext, useMemo } from "react";
import { Pokemon } from "../types/types";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

// interface tableProps {
//   pokemon: Pokemon[];
//   filter: string;
//   setSelectedPokemon: Dispatch<SetStateAction<null | Pokemon>>;
// }

// const PokemonTable = ({ pokemon, filter, setSelectedPokemon }: tableProps) => {
//   return (
//     <table className="w-full">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Type(s)</th>
//         </tr>
//       </thead>
//       <tbody>
//         {pokemon
//           .filter((pokemon) =>
//             pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
//           )
//           .map((pokemon: Pokemon) => (
//             <PokemonRow
//               pokemon={pokemon}
//               key={pokemon.id}
//               onSelect={(pokemon) => setSelectedPokemon(pokemon)}
//             />
//           ))}
//       </tbody>
//     </table>
//   );
// };

const PokemonTable = () => {
  const { pokemon, filter, setSelectedPokemon } = useContext(PokemonContext);
  const filteredPokemon = useMemo(() => {
    return pokemon
      .filter((pokemon) =>
        pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
      )
      .map((pokemon: Pokemon) => (
        <PokemonRow
          pokemon={pokemon}
          key={pokemon.id}
          onSelect={(pokemon) => setSelectedPokemon(pokemon)}
        />
      ));
  }, [filter, pokemon, setSelectedPokemon]);
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type(s)</th>
        </tr>
      </thead>
      <tbody>{filteredPokemon}</tbody>
    </table>
  );
};
export default PokemonTable;
