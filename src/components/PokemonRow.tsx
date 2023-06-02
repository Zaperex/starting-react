import PropTypes from "prop-types";
import { Pokemon } from "../types/types";
import { Button } from "@mui/material";
import detailsContext from "../PokemonContext";
import { useContext } from "react";

interface Props {
  pokemon: Pokemon;
  onSelect: (pokemon: Pokemon) => void;
}
const PokemonRow = ({ pokemon, onSelect }: Props) => {
  const { toggleDetailsPanelVisibility } = useContext(detailsContext);
  return (
    <tr key={pokemon.id}>
      <td className="text-center">{pokemon.name.english}</td>
      <td className="text-center">{pokemon.type.join(", ")}</td>
      <td className="w-4">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onSelect(pokemon);
            toggleDetailsPanelVisibility(true);
          }}
        >
          Select
        </Button>
      </td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PokemonRow;
