import React from "react";
import styled from "@emotion/styled";

import { Pokemon } from "./types/types";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import PokemonContext from "./PokemonContext";
import detailsContext from "./detailsContext";

const Title = styled.h1`
  text-align: center;
`;

// Functional component declaration

function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedPokemon, setSelectedPokemon] = React.useState<Pokemon | null>(
    null
  );
  const [pokemon, pokemonSet] = React.useState<Pokemon[]>([]);
  const [detailsVisibility, detailsVisibilitySet] = React.useState(false);
  React.useEffect(() => {
    fetch("http://localhost:5173/starting-react/public/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  const toggleDetailsVisibility = (visibility: boolean) => {
    detailsVisibilitySet(visibility);
  };
  return (
    <>
      <PokemonContext.Provider
        value={{
          filter,
          pokemon,
          selectedPokemon,
          setFilter,
          pokemonSet,
          setSelectedPokemon,
        }}
      >
        <detailsContext.Provider
          value={{
            toggleDetailsPanelVisibility: toggleDetailsVisibility,
          }}
        >
          <div className="w-screen content-center margin-auto pt-2">
            <Title>Pokemon Search</Title>

            <div className="grid grid-columns-4 gap-1">
              {detailsVisibility ? (
                <>
                  <div className="col-start-1 col-span-3">
                    <PokemonFilter />
                    <PokemonTable />
                  </div>
                  <div className="col-start-4 col-span-1">
                    {selectedPokemon && <PokemonInfo />}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <PokemonFilter />
                    <PokemonTable />
                  </div>
                </>
              )}
            </div>
          </div>
        </detailsContext.Provider>
      </PokemonContext.Provider>
    </>
  );
}

export default App;

// interface myState {
//   filter: string;
//   pokemon: Pokemon[];
//   selectedPokemon: Pokemon;
// }
// Using class components declaration (Not really used in newer projects anymore)
// class App extends React.Component<myState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filter: "",
//       pokemon: [] as Pokemon[],
//       selectedPokemon: null,
//     };
//   }

//   // In a class component, we have a bunch of methods for the
//   // different lifecycle events. This is one such method
//   // Standard place to put code that you want executed
//   // whenever the component is first mounted onto the page
//   componentDidMount(): void {
//     fetch("http://localhost:5173/starting-react/public/pokemon.json")
//       .then((resp) => resp.json())
//       .then((data) => this.setState({ ...this.state, pokemon: data }));
//   }
//   render(): React.ReactNode {
//     return (
//       <>
//         <div className="w-screen content-center margin-auto pt-2">
//           <Title>Pokemon Search</Title>

//           <div className="grid grid-columns-4 gap-1">
//             <div className="col-start-1 col-span-3">
//               <input
//                 value={this.state.filter}
//                 onChange={(e) =>
//                   this.setState({ ...this.state, filter: e.target.value })
//                 }
//               />
//               <table className="w-full">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Type(s)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.pokemon
//                     .filter((pokemon) =>
//                       pokemon.name.english
//                         .toLowerCase()
//                         .includes(this.state.filter.toLowerCase())
//                     )
//                     .map((pokemon: Pokemon) => (
//                       <PokemonRow
//                         pokemon={pokemon}
//                         key={pokemon.id}
//                         onSelect={(pokemon) =>
//                           this.setState({
//                             ...this.state,
//                             selectedPokemon: pokemon,
//                           })
//                         }
//                       />
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="col-start-4 col-span-1">
//               {this.state.selectedPokemon && (
//                 <PokemonInfo pokemon={{ ...this.state.selectedPokemon }} />
//               )}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
