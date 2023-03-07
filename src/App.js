import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        {" "}
        This project was coded by Miranda Severns and is open-sourced on Github
      </footer>
    </div>
  );
}
