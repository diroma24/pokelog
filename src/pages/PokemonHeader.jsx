export default function PokemonHeader({ name, id, types }) {
  return (
    <div className="bg-pokemon-red pt-10 pb-16 text-center text-white">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-2 px-4">
        <h1 className="text-4xl font-black capitalize tracking-widest">
          {name}
        </h1>
        <div className="flex gap-2">
          {types.map((item, index) => (
            <span
              key={index}
              className={`type-${item.type.name} px-3 py-1 rounded-full text-xs font-black uppercase border border-white/20 shadow-sm`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>

      <span className="opacity-70 font-mono font-bold text-xl">
        #{id.toString().padStart(3, "0")}
      </span>
    </div>
  );
}