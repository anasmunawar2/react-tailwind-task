import { Info } from "../constants";

const HeroCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Info.map((item, id) => (
        <div
          className="bg-white rounded-xl shadow-lg mt-6 p-5 w-full md:w-[calc(50% - 1rem)] lg:w-[calc(33.333% - 1rem)]"
          key={id}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-[41.959px] h-[41.959px] flex">
              <img src={item.src} alt="Dollar" />
            </div>
            <span
              className={`text-8xl ${
                id === 2 ? "text-red-txt" : "text-green-txt"
              } font-medium`}
            >
              {item.number}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">{item.title}</span>
            <div className="w-[51.137px] h-[24.913px] flex">
              <img src={item.src2} alt="sales" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
