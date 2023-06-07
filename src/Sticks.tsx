type Props = {
  rings: number[];
  setRings: (val: number[]) => void;
};

export const Sticks = ({ rings, setRings }: Props) => {
  const clone = [...rings];
  return (
    <div className="relative">
      <div
        className="flex flex-col items-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const data = e.dataTransfer.getData("text/plain");
          setRings([...rings, parseInt(data)]);
        }}
      >
        <div className="w-4 h-80 bg-gray-500 rounded-t-3xl"></div>
        <div className="w-32 h-2 bg-gray-500"></div>
        <div className="absolute bottom-2 ">
          {clone.reverse().map((ring) => {
            const top = rings[rings.length - 1];
            return (
              <div
                draggable={`${ring === top ? true : false}`}
                onDragStart={(e) => {
                  e.dataTransfer.setData("text/plain", ring.toString());
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnd={() => {
                  const newRings = rings.filter((r) => r !== ring);
                  setRings(newRings);
                }}
                key={ring}
                className={`rounded-t-3xl rounded-b-3xl h-8 w-20 border-4 border-green-500 mb-2`}
              >
                <h4 className="text-white text-center font-semibold ">
                  {ring}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
