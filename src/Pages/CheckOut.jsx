import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { clearCart } from '../Redux/CartSlice'

const initialCheckoutInfo = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zip: '',
  cardNumber: '',
  cardHolder: '',
  expiryDate: '',
  cvv: '',
}

const inputClassName = 'w-full rounded-lg border px-3 py-2'

const CheckoutField = ({
  autoComplete,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}) => (
  <div>
    <label htmlFor={name} className='mb-1 block text-gray-700'>
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={inputClassName}
      required
    />
  </div>
)

const CheckoutSection = ({ children, isOpen, onToggle, title }) => (
  <section className='mb-4 rounded-lg border p-3 sm:p-4'>
    <h2 className='text-lg font-semibold'>
      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        className='flex w-full items-center justify-between text-left'
      >
        {title}
        {isOpen ? <FaAngleDown aria-hidden='true' /> : <FaAngleUp aria-hidden='true' />}
      </button>
    </h2>
    {isOpen && <div className='mt-4 space-y-4'>{children}</div>}
  </section>
)

const CheckOut = () => {
  const [openSections, setOpenSections] = useState({
    billing: true,
    shipping: false,
    payment: false,
  })
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [checkoutInfo, setCheckoutInfo] = useState(initialCheckoutInfo)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleSection = section => {
    setOpenSections(current => ({
      ...current,
      [section]: !current[section],
    }))
  }

  const handleChange = event => {
    const { name, value } = event.target
    setCheckoutInfo(current => ({ ...current, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'zip']
    if (paymentMethod === 'dc') {
      requiredFields.push('cardNumber', 'cardHolder', 'expiryDate', 'cvv')
    }

    const hasMissingField = requiredFields.some(field => !checkoutInfo[field].trim())
    if (hasMissingField) {
      setOpenSections({
        billing: true,
        shipping: true,
        payment: true,
      })
      return
    }

    dispatch(clearCart())
    toast.success('Order placed successfully!')
    navigate('/')
  }

  return (
    <div className='container mx-auto min-h-96 px-4 py-8 sm:px-6 lg:px-24'>
      <h1 className='mb-4 text-2xl font-semibold'>CHECKOUT</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className='mt-8 flex flex-col gap-6 md:flex-row md:items-start'>
          <div className='min-w-0 w-full md:w-2/3'>
            <CheckoutSection
              title='Billing Information'
              isOpen={openSections.billing}
              onToggle={() => toggleSection('billing')}
            >
              <CheckoutField
                label='Name'
                name='name'
                value={checkoutInfo.name}
                onChange={handleChange}
                placeholder='Enter your name'
                autoComplete='name'
              />
              <CheckoutField
                label='Email'
                name='email'
                type='email'
                value={checkoutInfo.email}
                onChange={handleChange}
                placeholder='Enter your email address'
                autoComplete='email'
              />
              <CheckoutField
                label='Phone'
                name='phone'
                type='tel'
                value={checkoutInfo.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                autoComplete='tel'
              />
            </CheckoutSection>

            <CheckoutSection
              title='Shipping Information'
              isOpen={openSections.shipping}
              onToggle={() => toggleSection('shipping')}
            >
              <CheckoutField
                label='Address'
                name='address'
                value={checkoutInfo.address}
                onChange={handleChange}
                placeholder='Enter your shipping address'
                autoComplete='street-address'
              />
              <CheckoutField
                label='City'
                name='city'
                value={checkoutInfo.city}
                onChange={handleChange}
                placeholder='Enter your city'
                autoComplete='address-level2'
              />
              <CheckoutField
                label='Zip Code'
                name='zip'
                value={checkoutInfo.zip}
                onChange={handleChange}
                placeholder='67xyz'
                autoComplete='postal-code'
              />
            </CheckoutSection>

            <CheckoutSection
              title='Payment Method'
              isOpen={openSections.payment}
              onToggle={() => toggleSection('payment')}
            >
              <fieldset>
                <legend className='sr-only'>Payment method</legend>
                <label className='mb-2 flex items-center text-gray-700'>
                  <input
                    type='radio'
                    name='payment'
                    value='cod'
                    checked={paymentMethod === 'cod'}
                    onChange={event => setPaymentMethod(event.target.value)}
                  />
                  <span className='ml-2'>Cash on delivery</span>
                </label>
                <label className='flex items-center text-gray-700'>
                  <input
                    type='radio'
                    name='payment'
                    value='dc'
                    checked={paymentMethod === 'dc'}
                    onChange={event => setPaymentMethod(event.target.value)}
                  />
                  <span className='ml-2'>Debit Card</span>
                </label>
              </fieldset>

              {paymentMethod === 'dc' && (
                <div className='rounded-lg bg-gray-100 p-4'>
                  <h3 className='mb-4 text-xl font-semibold'>Debit Card Information</h3>
                  <div className='space-y-4'>
                    <CheckoutField
                      label='Card Number'
                      name='cardNumber'
                      value={checkoutInfo.cardNumber}
                      onChange={handleChange}
                      placeholder='Enter card number'
                      autoComplete='cc-number'
                    />
                    <CheckoutField
                      label='Card Holder Name'
                      name='cardHolder'
                      value={checkoutInfo.cardHolder}
                      onChange={handleChange}
                      placeholder='Enter card holder name'
                      autoComplete='cc-name'
                    />
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                      <CheckoutField
                        label='Expiry Date'
                        name='expiryDate'
                        value={checkoutInfo.expiryDate}
                        onChange={handleChange}
                        placeholder='MM/YY'
                        autoComplete='cc-exp'
                      />
                      <CheckoutField
                        label='CVV'
                        name='cvv'
                        value={checkoutInfo.cvv}
                        onChange={handleChange}
                        placeholder='CVV'
                        autoComplete='cc-csc'
                      />
                    </div>
                  </div>
                </div>
              )}
            </CheckoutSection>
          </div>

          <aside className='h-fit w-full rounded-lg border bg-white p-4 shadow-md sm:p-6 md:w-1/3'>
            <h2 className='mb-4 text-lg font-semibold'>Order Summary</h2>
            <div className='max-h-60 space-y-4 overflow-y-auto pr-1'>
              {cart.products.map(product => (
                <div
                  key={product.id}
                  className='flex min-w-0 items-center justify-between gap-3'
                >
                  <div className='flex min-w-0 items-center gap-3'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='h-14 w-14 shrink-0 rounded object-contain sm:h-16 sm:w-16'
                    />
                    <div className='min-w-0'>
                      <h3 className='truncate font-semibold'>{product.name}</h3>
                      <p className='text-gray-500'>
                        ${product.price} x {product.quantity}
                      </p>
                    </div>
                  </div>
                  <p className='shrink-0 text-gray-800'>
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className='mt-4 border-t pt-4'>
              <div className='flex justify-between'>
                <span>Total Price</span>
                <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              type='submit'
              className='mt-6 w-full bg-red-600 py-2 text-white hover:bg-red-800'
            >
              Place Order
            </button>
          </aside>
        </div>
      </form>
    </div>
  )
}

export { CheckOut }

CheckoutField.propTypes = {
  autoComplete: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
}

CheckoutSection.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
