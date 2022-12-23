import { useEffect, useState, useRef, useCallback } from "react";
import { BaseURL, ListTraits } from "../utils/urls";

import { Element } from "../types/types";

const SearchBar = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState<Element[]>();
  const [traits, setTraits] = useState([]);
  const [error, setError] = useState([]);

  // Effect that queries the backend for traits
  // each time the search bar becomes active. This is
  // not necessary for the MVP, but you would query the backend every time the query changes
  useEffect(() => {
    const traitsURL = BaseURL + ListTraits;

    fetch(traitsURL)
      .then((r) => r.json())
      .then((r) => {
        console.log("Fetched traits");
        // Single traits
        setTraits(r);
      })
      .catch((err) => {
        console.error(`Error fetching traits:`, err);
        setError(err);
      });
  }, [active]);

  const onChange = useCallback(
    (event: any) => {
      const query = event.target.value;
      setQuery(query);

      if (query.length) {
        let res: Element[] = [];

        try {
          const regex = new RegExp(query, "i");
          res = traits.filter((t: Element) => {
            return t.name.match(regex);
          });
        } catch (err) {
          console.error(err);
          setResults(undefined);
        }

        setResults(res);
      } else {
        setResults(undefined);
      }
    },
    [traits]
  );

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event: any) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  const renderResults = (results: Element[]) => {
    return (
      <div className="w-72 h-64 border-box border-2 bg-black overflow-y-auto">
        <ul className="py-2 px-2 bg-black">
          {results.map(
            ({ name, colorHexCodes, score }: Element, index: number) => (
              <li className="list-none" key={index}>
                <TraitCell name={name} score={score!} />
              </li>
            )
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className="z-10 drop-shadow-sm" ref={searchRef}>
      <input
        className="w-72 h-8 px-2"
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search"
        type="text"
        value={query}
      />
      {error && <div>{error}</div>}
      {active && results && results.length > 0 && renderResults(results)}
    </div>
  );
};

type TraitCellProps = {
  name: string;
  score: number;
};

const TraitCell = ({ name, score }: TraitCellProps) => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <h5 className="text-left">{name}</h5>
        <p className="px-2 text-right">{score}</p>
      </div>
      <hr />
    </div>
  );
};

export default SearchBar;
