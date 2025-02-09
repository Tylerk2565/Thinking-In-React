import './App.css'
import FilterableProductTable from './components/FilterableProductTable'

const App = () => {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: false, name: "Banana" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Carrot" },
    { category: "Vegetables", price: "$3", stocked: false, name: "Spinach" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <FilterableProductTable products={products} />
      </div>
    </div>
  );
}

export default App