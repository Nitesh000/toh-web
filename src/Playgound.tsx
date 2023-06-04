import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Sticks } from "./Sticks";
import { useState } from "react";
type Props = {
  rings: number;
  stopPlaying: (val: boolean) => void;
};

function creatRingArr(rings: number) {
  let arr = [];
  for (let i = 1; i <= rings; i++) {
    arr.push(i);
  }
  return arr;
}

const Playground = ({ rings, stopPlaying }: Props) => {
  const ringArr = creatRingArr(rings);
  const [firstBar, setFirstBar] = useState<number[] | undefined>(ringArr);
  const [secondBar, setSecondBar] = useState<number[] | undefined>();
  const [thirdBar, setThirdBar] = useState<number[] | undefined>();

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
        <Sticks rings={firstBar} />
        <Sticks rings={secondBar} />
        <Sticks rings={thirdBar} />
      </main>
    </>
  );
};

export default Playground;
