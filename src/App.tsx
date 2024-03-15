import { useEffect, useState } from "react";
import "./App.css";
import Autocomplete from "./Autocomplete";

function App() {
  const peopleOptions: string[] = [
    "Pablo",
    "Juan",
    "Andres",
    "Carlos",
    "Fernando",
    "Luis",
    "Sergio",
    "Rafael",
    "Diego",
    "Miguel",
    "Antonio",
    "Javier",
    "Francisco",
    "Jose",
    "David",
    "Manuel",
  ];

  const [person, setPerson] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [status, setStatus] = useState("idle");

  const [pokemonOptions, setPokemonOptions] = useState<string[]>([]);

  const handlePersonChange = (person: string) => {
    setPerson(person);
  };
  const handlePokemonChange = (pokemon: string) => {
    setPokemon(pokemon);
  };

  useEffect(() => {
    setStatus("pending");
    setTimeout(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((response) => response.json())
        .then((data) => {
          const pokemonNames = data.results.map((pokemon: any) => pokemon.name);
          setPokemonOptions(pokemonNames);
          setStatus("resolved");
        })
        .catch((error) => {
          setStatus("rejected");
          console.error("Error fetching Pokemon data:", error);
        });
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h4>Autocomplete input (Hardcoded values)</h4>
      <Autocomplete
        inputValue={person}
        onInputChange={handlePersonChange}
        options={peopleOptions}
      />
      <h4>Autocomplete pokemon async data </h4>
      <Autocomplete
        inputValue={pokemon}
        onInputChange={handlePokemonChange}
        loading={status === "pending"}
        options={pokemonOptions}
      />
    </div>
  );
}

export default App;
