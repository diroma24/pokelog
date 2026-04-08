export default function Stats({ stats }) {
  return (
    <div className="mt-8 w-full">
      <h3 className="text-xl font-bold text-gray-800 border-b pb-2 text-center sm:text-left">
        Base Stats
      </h3>
      <div className="flex flex-col pt-6">
        {stats.map((item, index) => {
          let barColor = "bg-red-500";
          if (item.base_stat >= 50 && item.base_stat < 80) barColor = "bg-yellow-400";
          if (item.base_stat >= 80 && item.base_stat < 100) barColor = "bg-green-400";
          if (item.base_stat >= 100) barColor = "bg-cyan-400";

          return (
            <div key={index} className="flex flex-col w-full mb-4">
              <div className="flex justify-between mb-1">
                <span className="uppercase text-[10px] font-black text-gray-400 tracking-widest">
                  {item.stat.name.replace("-", " ")}
                </span>
                <span className="font-bold text-sm text-gray-700">{item.base_stat}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden shadow-inner">
                <div
                  className={`${barColor} h-full rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${(item.base_stat / 255) * 100}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}