import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Seattle" />
      <footer>
        {" "}
         {" "}
        This project was coded by{" "}
        <a href="https://mirandadev.netlify.app">Miranda Severns</a> and is
        open-sourced on{" "}
        <a href="https://github.com/ghostcake13/my-weather">GitHub</a>
      </footer>
    </div>
  );
}
