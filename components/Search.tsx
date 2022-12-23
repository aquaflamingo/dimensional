import { useEffect, useState, useRef, useCallback } from "react";
import { TraitFixture } from "../fixtures";

import { Element } from "../pages/index";

const SearchBar = () => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const mockSearch = (query: string) => {
    //FIXME: this doesn't work
    return TraitFixture.filter((t) => t.name.includes(query));
  };

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);

    // TODO: hooks
    if (query.length) {
      const res = mockSearch(query);
      setResults(res);
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  const renderResults = (results: Element[]) => {
    return (
      <div className="w-64 h-64 border-box border-2 bg-black overflow-y-auto">
        <ul className="py-2 px-2 bg-black">
          {results.map(
            ({ name, colorHexCodes, score }: Element, index: number) => (
              <li className="list-none" key={index}>
                <TraitCell name={name} score={score} />
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
        className="w-64 h-8 px-2"
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search"
        type="text"
        value={query}
      />
      {active && results.length > 0 && renderResults(results)}
    </div>
  );
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
