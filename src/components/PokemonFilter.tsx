import { useContext, Dispatch, SetStateAction } from "react";
import PokemonContext from "../PokemonContext";

// interface filterProps {
//   filter: string;
//   setFilter: Dispatch<SetStateAction<string>>;
// }

// const PokemonFilter = ({ filter, setFilter }: filterProps) => {
//   return (
//     <input
//       type="text"
//       value={filter}
//       onChange={(e) => setFilter(e.target.value)}
//     />
//   );
// };

const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext);
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default PokemonFilter;
