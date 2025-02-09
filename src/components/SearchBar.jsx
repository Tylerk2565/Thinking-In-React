const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) => {
  return (
    <form className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <input 
          type="text" 
          value={filterText} 
          placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} 
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="text-gray-700">Only show products in stock</span>
      </label>
    </form>
  );
}

export default SearchBar;