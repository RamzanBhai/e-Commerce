import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/Images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Redux/CartSlice";
import Modal from "../Components/Modal";
import ChangeAddress from "../Components/ChangeAddress";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  const [address,setAddress]=useState('Main street , 0012')
  const [ModalOpen,setModal]=useState(false)
  const [productToRemove,setProductToRemove]=useState(null)
  const confirmRemove = () => {
    dispatch(removeFromCart(productToRemove.id))
    toast.success(`${productToRemove.name} removed from cart`)
    setProductToRemove(null)
  }
  return (
    <div className="container mx-auto min-h-96 px-4 py-8 sm:px-6 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4 ">SHOPPING CART</h3>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 w-full md:w-2/3">
              <div className="mb-4 hidden items-center justify-between border-b text-xs font-bold sm:flex">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div
                className={
                  cart.products.length > 3
                    ? "max-h-[310px] overflow-y-auto pr-2"
                    : ""
                }
              >
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-wrap items-center justify-between gap-3 border-b p-3"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 shrink-0 rounded object-contain"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-lg font-semibold">{product.name}</h3>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between gap-3 text-sm sm:w-auto sm:gap-6">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border ">
                        <button onClick={()=>dispatch(decreaseQuantity(product.id))} className="text-xl font-bold px-1.5 border-r ">
                          -
                        </button>
                        <p className="text-xl px-2 ">{product.quantity}</p>
                        <button onClick={()=>dispatch(increaseQuantity(product.id))} className="text-xl px-1 border-l">+</button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button onClick={() => setProductToRemove(product)} className="text-red-500 hover:text-red-700" aria-label={`Remove ${product.name} from cart`}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-fit w-full rounded-lg border bg-white p-5 shadow-md sm:p-6 md:w-1/3">
              <h3 className="text-sm font-semibold mb-5">CART TOTALS</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total items : </span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping : </p>
                <p className="ml-2">Shipping to  
                  <span className="text-xs font-bold"> {address} </span>
                 </p>
                
                <button onClick={()=>setModal(true)} className="text-blue-500 hover:underline mt-1 ml-2">Change address</button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total price : </span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
            <Link to='/checkout'><button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">Proced to checkout</button></Link>
            </div>
          </div>
          <Modal ModalOpen={ModalOpen} setModal={setModal}>
            <ChangeAddress setAddress={setAddress}  setModal={setModal}/>
          </Modal>
          <Modal ModalOpen={Boolean(productToRemove)} setModal={() => setProductToRemove(null)}>
            <h3 className="text-xl font-semibold mb-3">Remove item?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove {productToRemove?.name} from your cart?
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setProductToRemove(null)}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmRemove}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyCart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
