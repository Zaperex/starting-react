import PropTypes from "prop-types";

export type PokemonStats =
  | "HP"
  | "Attack"
  | "Defense"
  | "SpAttack"
  | "SpDefense"
  | "Speed";

export type Pokemon = {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: Record<PokemonStats, number>;
};

export const PokemonType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    SpAttack: PropTypes.number.isRequired,
    SpDefense: PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
});
