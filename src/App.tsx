import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Playground from "./Playgound";

function App() {
  const [rings, setRings] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (rings < 1) {
      setRings(1);
    } else if (rings > 10) {
      setRings(10);
    }
  }, [rings]);

  if (!isPlaying) {
    return (
      <>
        <header className="py-4">
          <h1 className="text-4xl text-blue-200 text-center">Tower of Hanoi</h1>
        </header>
        <main className="flex justify-center items-center py-20">
          <ArrowDownCircleIcon
            className="h-20 bg-gray-900 text-white hover:text-gray-200 cursor-pointer"
            onClick={() => setRings((prev) => prev - 1)}
          />
          <input
            type="number"
            className="border-none outline-none bg-blue-300 h-10 w-44 rounded-lg text-3xl font-bold text-gray-800 text-center"
            value={rings}
          />
          <ArrowUpCircleIcon
            className="h-20 bg-gray-900 text-white hover:text-gray-200 cursor-pointer"
            onClick={() => setRings((prev) => prev + 1)}
          />
        </main>
        <button
          className="bg-blue-300 px-10 py-4 rounded-lg text-gray-800 font-bold text-4xl block mx-auto"
          onClick={() => setIsPlaying(true)}
        >
          Let's Play
        </button>
      </>
    );
  }

  return <Playground rings={rings} goBack={setIsPlaying} />;
}

export default App;
