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
        maxlength="100"
        value={value}
        onChange={handleChange}
      />
      <div>Kebab Transformer ✨: {transformedKebabToTitle}</div>
    </div>
  );
}

export default App;
