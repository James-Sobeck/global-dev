
import './App.css';
import Home from "./layout/Home";
import { Route, Switch } from "react-router-dom";
import Routes from './layout/Routes';
/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */

function App() {
  return (
    <Routes/>
  );
}

export default App;
