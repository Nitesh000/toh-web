import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
type Props = {
  rings: number;
  goBack: React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground = ({ rings, goBack }: Props) => {
  return (
    <>
      <header className="my-4">
        <div className="inline-flex items-center bg-white px-2 py-1 rounded-3xl hover:bg-blue-200 font-bold cursor-pointer text-gray-800">
          <ArrowUturnLeftIcon className="h-7 " onClick={() => goBack(false)} />
          <h3 className="inline text-xl">go back</h3>
        </div>
      </header>
      <div>
        The number of rings it have is <span>{rings}</span>
      </div>
    </>
  );
};

export default Playground;
