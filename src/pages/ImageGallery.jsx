export default function ImageGallery({ sprites, name }) {
  return (
    <div className="flex flex-col items-center w-full px-6">
      {/* Official Artwork */}
      <img
        className="w-64 h-64 -mt-20 drop-shadow-2xl hover:scale-110 transition-transform duration-300 relative z-10"
        src={sprites.other["official-artwork"].front_default}
        alt={name}
      />

      {/* 3D Models Grid */}
      <div className="grid grid-cols-2 gap-4 mt-8 w-full">
        <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center border border-gray-100">
          <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Standard Model</p>
          <img src={sprites.other["home"].front_default} className="w-32 h-32" alt="Normal" />
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center border border-gray-100">
          <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Shiny Variant</p>
          <img src={sprites.other["home"].front_shiny} className="w-32 h-32" alt="Shiny" />
        </div>
      </div>

      {/* Sprites Database */}
      <div className="mt-8 w-full">
        <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Sprite Database</h4>
        <div className="flex justify-around bg-gray-50 rounded-2xl p-6 shadow-inner border border-gray-100 flex-wrap gap-4">
          <div className="flex flex-col items-center">
            <img src={sprites.front_default} className="w-16 h-16" alt="Front" />
            <span className="text-[9px] text-gray-400 font-bold uppercase">Front</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={sprites.back_default} className="w-16 h-16" alt="Back" />
            <span className="text-[9px] text-gray-400 font-bold uppercase">Back</span>
          </div>
          <div className="flex flex-col items-center border-l border-gray-200 pl-4">
            <img src={sprites.front_shiny} className="w-16 h-16" alt="Front Shiny" />
            <span className="text-[9px] text-gray-400 font-bold uppercase">Front Shiny</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={sprites.back_shiny} className="w-16 h-16" alt="Back Shiny" />
            <span className="text-[9px] text-gray-400 font-bold uppercase">Back Shiny</span>
          </div>
        </div>
      </div>
    </div>
  );
}