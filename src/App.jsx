import "./App.css";
import Example from "./Example";
import List from "./List";
import Parent from "./Parent";
import ParentComponent from "./ParentComponent";
import Home from "./components/home/Home";
import Vikrant from "./ragini";

function App() {
  const color = "red";
  return (
    <>
      {/* <ParentComponent color={color} />
      <Example/>
      <Parent/>
      <Vikrant />
      <List/> */}
      <Home />
    </>
  );
}

export default App;
