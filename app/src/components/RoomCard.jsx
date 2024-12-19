export default function RoomCard({ loaiphong, tinhtrang, maphong, giaphong, sophong }) {
  return (
    <div className="flex flex-col w-full group">
      <div className="flex flex-col h-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            loading="lazy"
            src={tinhtrang}
            alt={tinhtrang} 
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col p-6 flex-grow">
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">
            {loaiphong}
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <img
              loading="lazy"
              src={maphong}
              alt={`${maphong} out of 5 stars`}
              className="h-5"
            />
            <span className="text-sm text-zinc-600">
              ({sophong})
            </span>
          </div>
          <div className="mt-auto">
            <span className="inline-block px-4 py-2 text-white bg-red-400 rounded-lg hover:bg-red-500 transition-colors">
              ${giaphong}/day
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}