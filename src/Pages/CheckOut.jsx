import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
 export const CheckOut=()=>{
  const[Billing,setBilling]=useState(true)
  const[Shipping,setShipping]=useState(false)
  const[Payment,setPayment]=useState(false)
  const[PaymentMethod,setPaymentMethod]=useState("cod")
  const [checkoutInfo,setCheckoutInfo]=useState({
    name:'',
    email:'',
    phone:'',
    address:'',
    city:'',
    zip:'',
    cardNumber:'',
    cardHolder:'',
    expiryDate:'',
    cvv:''
  })
  const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setCheckoutInfo((currentInfo) => ({ ...currentInfo, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'zip']
    if (PaymentMethod === "dc") {
      requiredFields.push('cardNumber', 'cardHolder', 'expiryDate', 'cvv')
    }

    const hasMissingField = requiredFields.some((field) => !checkoutInfo[field].trim())
    if (hasMissingField) {
      setBilling(true)
      setShipping(true)
      setPayment(true)
      return
    }

    dispatch(clearCart())
    toast.success("Order placed successfully!")
    navigate("/")
  }
  return(
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8 ">
      <div className="md:w-2/3">
      <div className=" border  rounded-lg p-2 mb-4">
        <div className="flex items-center justify-between" onClick={()=>setBilling(!Billing)}>
          <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
         {Billing ?<FaAngleDown/> : <FaAngleUp/>}
        </div>
        <div className={`space-y-4 ${Billing ? '' :"hidden"}`}>
          <div>
            <label htmlFor="" className="block text-gray-700">Name</label>
            <input type="text" name="name" value={checkoutInfo.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-3 py-2 border rounded-lg" required/>
          </div>
          <div>
            <label htmlFor="" className="block text-gray-700">Email</label>
            <input type="email" name="email" value={checkoutInfo.email} onChange={handleChange} placeholder="Enter your email address" className="w-full px-3 py-2 border rounded-lg" required/>
          </div>
          <div>
            <label htmlFor="" className="block text-gray-700">Phone</label>
            <input type="tel" name="phone" value={checkoutInfo.phone} onChange={handleChange} placeholder="Enter your Phone number" className="w-full px-3 py-2 border rounded-lg" required/>
          </div>
        </div>
      </div>
      <div className="border rounded-lg p-2 mb-4">
        <div className="flex items-center justify-between" onClick={()=>setShipping(!Shipping)}>
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
         {Shipping ?<FaAngleDown/> : <FaAngleUp/>}
        </div>
        <div className={`space-y-4 ${Shipping ? '' :"hidden"}`}>
          <div>
            <label htmlFor="" className="block text-gray-700">Address</label>
            <input type="text" name="address" value={checkoutInfo.address} placeholder="Enter your shipping address" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required/>
          </div>
          <div>
            <label htmlFor="" className="block text-gray-700">City</label>
            <input type="text" name="city" value={checkoutInfo.city} placeholder="Enter your city" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required/>
          </div>
          <div>
            <label htmlFor="" className="block text-gray-700">Zip Code</label>
            <input type="text" name="zip" value={checkoutInfo.zip} placeholder="67xyz" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required/>
          </div>
        </div>
      </div>
      <div className="border rounded-lg p-2 mb-4">
        <div className="flex items-center justify-between" onClick={()=>setPayment(!Payment)}>
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
         {Payment ?<FaAngleDown/> : <FaAngleUp/>}
        </div>
        <div className={`space-y-4 ${Payment ? '' :"hidden"}`}>
          <div className="flex items-center mb-2">
            <input type="radio" name="payment" checked={PaymentMethod === "cod"} onChange={()=>setPaymentMethod("cod")}/>
            <label htmlFor="" className="block text-gray-700 ml-2">Cash on delivery</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" name="payment" checked={PaymentMethod === "dc"} onChange={()=>setPaymentMethod("dc")} />
            <label htmlFor="" className="block text-gray-700 ml-2">Debit Card</label>
          </div>
        </div>
        {PaymentMethod === "dc" && (
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold mb-4">Debit Card informations</h3>
            <div className="mb-4">
              <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Card Number</label>
              <input type="text" name="cardNumber" value={checkoutInfo.cardNumber} onChange={handleChange} placeholder="Enter Card number" className="border p-2 w-full  rounded" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Card Holder Number</label>
              <input type="text" name="cardHolder" value={checkoutInfo.cardHolder} onChange={handleChange} placeholder="Enter Holder name" className="border p-2 w-full  rounded" required/>
            </div>
            <div className="flex justify-between mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Expire Date</label>
              <input type="text" name="expiryDate" value={checkoutInfo.expiryDate} onChange={handleChange} placeholder="MM/YY" className="border p-2 w-full  rounded" required />
            </div>
            <div className="w-1/2 mr-2">
              <label htmlFor="" className="block text-gray-700 font-semibold mb-2">CVV</label>
              <input type="text" name="cvv" value={checkoutInfo.cvv} onChange={handleChange} placeholder="CVV" className="border p-2 w-full  rounded" required/>
            </div>
            </div>
          </div>
         
        )}
      </div>

      </div>

      <div className="md:w-1/3 bg-white p-6 rounded-lg h-fit shadow-md  border">
      <h3 className="text-lg font-semibold mb-4">Order Summry</h3>
      <div className="space-y-4 h-[150px]  overflow-y-auto ">
     {cart.products.map((product) => (
      <div key={product.id} className="flex justify-between">
        <div className="flex items-center">
         <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded" />
         <div className="ml-4">
          <h4 className=" font-semibold">{product.name}</h4>
          <p className="text-gray-500">
            ${product.price} x {product.quantity}
          </p>
         </div>
        </div>
        <div className="text-gray-800" >
          ${product.price*product.quantity}
        </div>
      </div>
     ))}
      </div>
      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between">
          <span>Total Price</span>
          <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
        </div>
      </div>
     <button type="submit" className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">Place Order</button>
      </div>
      </div>
      </form>
    </div>
  )
}
