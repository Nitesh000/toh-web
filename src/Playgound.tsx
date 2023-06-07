import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Sticks } from "./Sticks";
import { useEffect, useState } from "react";
type Props = {
  rings: number;
  stopPlaying: (val: boolean) => void;
};

function creatRingArr(rings: number) {
  let arr = [];
  for (let i = rings; i >= 1; i--) {
    arr.push(i);
  }
  return arr;
}

const Playground = ({ rings, stopPlaying }: Props) => {
  const ringArr = creatRingArr(rings);
  const [final, setFinal] = useState<number[]>(ringArr);
  const [firstBar, setFirstBar] = useState<number[]>(ringArr);
  const [secondBar, setSecondBar] = useState<number[]>([]);
  const [thirdBar, setThirdBar] = useState<number[]>([]);

  function arraysAreEqual(array1: number[], array2: number[]) {
    // Step 1: Check array lengths
    if (array1.length !== array2.length) {
      return false;
    }

    // Step 2: Compare each element
    return array1.every((element, index) => element === array2[index]);
  }

  useEffect(() => {
    if (arraysAreEqual(final, thirdBar)) {
      alert("You won!");
    }
  }, [thirdBar]);

  return (
    <>
      <header className="my-4">
        <div
          className="inline-flex items-center bg-white px-2 py-1 rounded-3xl hover:bg-blue-200 font-bold cursor-pointer text-gray-800"
          onClick={() => stopPlaying(false)}
        >
          <ArrowUturnLeftIcon className="h-7 " />
          <h3 className="inline text-xl">go back</h3>
        </div>
      </header>
      <main className="flex w-full pt-32 justify-center items-center gap-80">
        <Sticks rings={firstBar} setRings={setFirstBar} />
        <Sticks rings={secondBar} setRings={setSecondBar} />
        <Sticks rings={thirdBar} setRings={setThirdBar} />
      </main>
    </>
  );
};

export default Playground;
