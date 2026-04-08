export default function Locations({ locations }) {
  return (
    <div className="mt-10 w-full px-6 pb-10">
      <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 border-b pb-2">
        Location Areas
      </h4>
      {locations && locations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {locations.map((loc, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-xs font-bold text-gray-600 capitalize">
                {loc.location_area.name.replace(/-/g, " ")}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xs text-gray-400 italic">
          This Pokemon cannot be found in the wild.
        </p>
      )}
    </div>
  );
}