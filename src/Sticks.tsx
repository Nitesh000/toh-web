type Props = {
  rings: number[] | undefined;
};

export const Sticks = ({ rings }: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <div className="w-4 h-80 bg-gray-500 rounded-t-3xl"></div>
        <div className="w-32 h-2 bg-gray-500"></div>
        <div className="absolute bottom-2">
          {rings?.map((ring) => (
            <div
              draggable
              key={ring}
              className={`rounded-t-3xl rounded-b-3xl h-8 w-20 border-4 border-green-500 mb-2`}
            >
              <h4 className="text-white text-center font-semibold ">{ring}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
