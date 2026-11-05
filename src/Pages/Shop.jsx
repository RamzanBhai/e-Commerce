import ProductCard from '../Components/ProductCard';
import { mockData } from '../assets/mockData';
import { useSelector } from 'react-redux';
const Shop = () => {
  const search = useSelector(state => state.search.search)
  const filteredProducts = mockData.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="mx-auto px-4 py-12 sm:px-6 md:px-16 lg:px-24">
    <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <p className="py-8 text-center text-gray-500">
        No products found for &quot;{search}&quot;.
      </p>
    )}
  </div>
  )
}

export default Shop