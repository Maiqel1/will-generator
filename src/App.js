import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Will from "./components/Will";
import Home from "./components/Home";
import { WillProvider } from "./context/WillContext"

function App() {
  return (
    <WillProvider>
        <Router>
          <Routes>
          <Route exact path="/" element={<Home/>}>

          </Route>
          <Route path="/will" element={<Will/>}>

          </Route>
          </Routes>
        </Router>
    </WillProvider>
    
  );
}

export default App;
