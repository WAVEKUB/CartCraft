const Filter = () => {
  return ( 
    <div className="mt-12 flex justify-between w-full">
      <div className="flex gap-6">
        <select name="category" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Category</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="gaming">Gaming</option>
          <option value="audio">Audio</option>
          <option value="smart-home">Smart Home</option>
          <option value="wearables">Wearables</option>
        </select>
        <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
        <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
        <select name="brand" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Brand</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="sony">Sony</option>
          <option value="dell">Dell</option>
          <option value="hp">HP</option>
          <option value="asus">ASUS</option>
        </select>
        <select name="condition" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Condition</option>
          <option value="new">New</option>
          <option value="refurbished">Refurbished</option>
          <option value="used">Used</option>
        </select>
      </div>
      <div>
        <select name="sort" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
