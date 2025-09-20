function ProductPost({ image, name, price, flavour, details = "" }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-[#00809d] font-semibold mt-1">{price}</p>
        <p className="text-gray-600 mt-1">Flavour: {flavour}</p>
        <p className="text-gray-700 mt-2 flex-grow">
          {details.length > 100 ? details.slice(0, 100) + "..." : details}{" "}
          <span className="text-[#00809d] font-semibold cursor-pointer">
            See More
          </span>
        </p>
        <div className="mt-4 flex justify-between">
          <button className="border px-3 py-1 rounded">In Stock</button>
          <button className="bg-[#00809d] text-white px-3 py-1 rounded hover:bg-[#006b82] transition">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
