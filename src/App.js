import "./App.css";
import Form from "./component/Form";
import ThemeToogle from "./component/ToogleTheme";
import WeatherCard from "./component/WeatherCard";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector(state => state.theme)
  return (
    <div className={theme ? "App dark" : "App"}>
      <ThemeToogle/>
      <Form/>
      <WeatherCard/>
    </div>
  );
}

export default App;
