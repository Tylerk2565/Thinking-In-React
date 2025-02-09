const ProductRow = ({ product }) => {
  const name = product.stocked ? product.name :
    <span className="text-red-500">
      {product.name}
    </span>;

  return (
    <tr className="border-b">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{product.price}</td>
    </tr>
  );
}

export default ProductRow;