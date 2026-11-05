import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { addToCart } from '../Redux/CartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = event => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(addToCart(product))
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className='relative transform rounded bg-white p-4 shadow transition-transform duration-300 hover:scale-105'>
      <img src={product.image} alt={product.name} className='mb-4 h-48 w-full object-contain' />
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>${product.price}</p>
      <div className='mt-2 flex items-center' aria-label='4 out of 5 stars'>
      <FaStar className='text-yellow-500' aria-hidden='true' />
      <FaStar className='text-yellow-500' aria-hidden='true' />
      <FaStar className='text-yellow-500' aria-hidden='true' />
      <FaStar className='text-yellow-500' aria-hidden='true' />
      </div>
      <button
        type='button'
        className='group absolute bottom-4 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm text-white transition-all hover:w-32 hover:bg-red-700'
        onClick={handleAddToCart}
        aria-label={`Add ${product.name} to cart`}
      >
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>Add to Cart</span>
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default ProductCard
