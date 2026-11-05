import { FaMoon, FaSearch, FaShoppingCart, FaSun } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch } from '../Redux/searchSlice'

const Navbar = ({ isDark, onToggleTheme }) => {
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto flex flex-wrap items-center gap-x-4 gap-y-3 px-4 py-4 md:flex-nowrap md:px-16 lg:px-24'>
        <div className='shrink-0 text-lg font-bold'>
          <Link to='/'>e-Shop</Link>
        </div>
        <div className='order-3 w-full md:order-none md:mx-4 md:flex-1'>
          <form className='relative'>
            <input
              type='text'
              placeholder='Search Product'
              onChange={e => dispatch(setSearch(e.target.value))}
              className='w-full px-5 py-3 pr-10'
            />
            <FaSearch className='pointer-events-none absolute inset-y-0 right-3 my-auto text-red-500' />
          </form>
        </div>
        <div className='order-2 ml-auto flex shrink-0 items-center gap-2 sm:gap-4 md:order-none'>
          <button
            type='button'
            onClick={onToggleTheme}
            className='rounded-full p-2 dark:hover:bg-gray-700'
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <Link to='/cart' className='relative'>
            <FaShoppingCart className='text-xl' />
            {products.length > 0 && (
              <span className='absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white'>
                {products.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm font-bold sm:gap-x-10'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/shop' className='hover:underline'>Shop</Link>
        <Link to='/contact' className='hover:underline'>Contact</Link>
        <Link to='/about' className='hover:underline'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar

Navbar.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}