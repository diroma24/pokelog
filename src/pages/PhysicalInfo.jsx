export default function PhysicalInfo({ weight, height }) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full mt-8 border-t border-gray-100 pt-8">
      <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
        <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-1">Height</p>
        <p className="font-mono text-xl text-gray-700 font-bold">{height / 10} m</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
        <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-1">Weight</p>
        <p className="font-mono text-xl text-gray-700 font-bold">{weight / 10} kg</p>
      </div>
    </div>
  );
}