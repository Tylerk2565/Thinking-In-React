const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2" className="bg-gray-200 text-left px-4 py-2">
        {category}
      </th>
    </tr>
  );
}

export default ProductCategoryRow;