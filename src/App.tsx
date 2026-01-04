import { useState } from "react";
import { formatKebabToTitle } from "./utils/formatKebabToTitle";
import "./App.css";

function App() {
  const [transformedKebabToTitle, setTransformedKebabToTitle] =
    useState<string>("");

  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const kebabInput = formData.get("kebab-input");
    setTransformedKebabToTitle(formatKebabToTitle(kebabInput));
  };

  return (
    <div>
      <h1>Kebab case to Title case Transformer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="kebab-input">Enter Kebab case here: </label>
        <br />
        <input
          id="kebab-input"
          type="text"
          name="kebab-input"
          maxLength="100"
        />
        <br />
        <button type="submit">Abadacabara ✨!</button>
        <br />
        <label htmlFor="kebab-output">Kebab Transformer ✨: </label>
        <br />
        <output id="kebab-output" name="kebab-output" htmlFor="kebab-input">
          {transformedKebabToTitle}
        </output>
      </form>
    </div>
  );
}

export default App;
