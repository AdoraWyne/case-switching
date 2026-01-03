import { useState } from "react";
import { formatKebabToTitle } from "./utils/formatKebabToTitle";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>("adora-hou-van-appel");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const transformedKebabToTitle = formatKebabToTitle(value);

  return (
    <div>
      <label htmlFor="kebab-input">Enter Kebab case here: </label>
      <input
        id="kebab-input"
        type="text"
        name="kebab-input"
        maxLength="100"
        value={value}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="kebab-output">Kebab Transformer ✨: </label>
      <output id="kebab-output" name="kebab-output" htmlFor="kebab-input">
        {transformedKebabToTitle}
      </output>
    </div>
  );
}

export default App;
