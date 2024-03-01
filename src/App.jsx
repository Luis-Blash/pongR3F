import "./App.css";
import { Player } from "./components/Player";
import { ContainerPunctuation } from "./container/ContainerPunctuation";

function App() {
  return (
    <>
      <main className="fixed top-0 w-full h-full">
        <section className="w-full h-[100px] shadow-xl bg-black flex justify-center items-center">
          <h1 className="text-white text-3xl">Pong R3F</h1>
        </section>
        <section className="w-full h-[calc(100%-100px)] flex gap-2 p-4">
            <ContainerPunctuation>
              <Player name="Player 1" points={0}/>
              <Player name="Player 2" points={0}/>
            </ContainerPunctuation>
          <div className="w-[calc(100%-200px)] h-full rounded-lg"></div>
        </section>
      </main>
    </>
  );
}

export default App;
