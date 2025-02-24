import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch } from '../Redux/searchSlice'

const Navbar = () => {
  const products = useSelector(state => state.cart.products)
  const dispatch=useDispatch();
  return (
    <nav className='bg=white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
          <Link to='/'>e-Shop</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form >
            <input type="text" placeholder='Search Product' onChange={(e)=>dispatch(setSearch(e.target.value))}  className='w-full px-5 py-4'/>
            <FaSearch className='absolute top-6 right-3 text-red-500'/>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/cart' className='relative'>
          <FaShoppingCart className='text-5xl pl-6'/>
          {
           products.length>0 &&(
              <span className='absolute top-0 text-xs w-3 h-3 left-3  bg-red-600 rounded-full flex justify-center items-center text-white '>{products.length}</span>
            )
          }
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/shop' className='hover:underline'>Shop</Link>
        <Link to='/contact' className='hover:underline'>Contact</Link>
        <Link to='/about' className='hover:underline'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar