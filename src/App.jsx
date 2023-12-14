import { useGlobalContext } from "./Context";

function App() {
  const { name } = useGlobalContext();
  return (
    <>
      <div>
        <h1>OOOHHHH I'M GONNA CONTEXT</h1>
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default App;
