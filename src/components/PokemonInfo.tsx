import { useContext } from "react";
import { PokemonStats } from "../types/types";

import PokemonContext from "../PokemonContext";
import detailsContext from "../detailsContext";
import { Button } from "@mui/material";

const PokemonInfo = () => {
  const { selectedPokemon } = useContext(PokemonContext);
  const { toggleDetailsPanelVisibility } = useContext(detailsContext);

  return selectedPokemon ? (
    <div className="flex pl-2">
      <h1 className="w-3/4">{selectedPokemon.name.english}</h1>
      <table className="w-3/4">
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key as PokemonStats]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        className="px-2 aspect-square justify-self-start"
        type="button"
        onClick={() => toggleDetailsPanelVisibility(false)}
      >
        X
      </Button>
    </div>
  ) : (
    <div />
  );
};

export default PokemonInfo;
