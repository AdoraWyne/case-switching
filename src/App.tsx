import { useRef, useState } from "react";
import { formatKebabToTitle } from "./utils/formatKebabToTitle";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [transformedKebabToTitle, setTransformedKebabToTitle] =
    useState<string>("");

  const handleClick = () => {
    setTransformedKebabToTitle(formatKebabToTitle(inputRef.current?.value));
  };

  return (
    <div>
      <label htmlFor="kebab-input">Enter Kebab case here: </label>
      <input
        id="kebab-input"
        type="text"
        name="kebab-input"
        maxLength="100"
        ref={inputRef}
      />
      <button type="button" onClick={handleClick}>
        Abadacabara ✨!
      </button>
      <br />
      <label htmlFor="kebab-output">Kebab Transformer ✨: </label>
      <output id="kebab-output" name="kebab-output" htmlFor="kebab-input">
        {transformedKebabToTitle}
      </output>
    </div>
  );
}

export default App;
