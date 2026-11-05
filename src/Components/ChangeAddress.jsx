import PropTypes from 'prop-types'
import { useState } from 'react'
import toast from 'react-hot-toast'

const ChangeAddress = ({ setAddress, setModal }) => {
  const [newAddress, setNewAddress] = useState('')

  const handleSave = () => {
    setAddress(newAddress)
    setModal(false)
    toast.success('Address updated successfully')
  }

  return (
    <div>
      <label htmlFor='new-address' className='sr-only'>
        New address
      </label>
      <input
        id='new-address'
        type='text'
        placeholder='Enter new address'
        className='mb-4 w-full border p-2'
        value={newAddress}
        onChange={event => setNewAddress(event.target.value)}
      />
      <div className='flex justify-end'>
        <button
          type='button'
          className='mr-2 rounded bg-gray-500 px-4 py-2 text-white'
          onClick={() => setModal(false)}
        >
          Cancel
        </button>
        <button
          type='button'
          className='rounded bg-blue-500 px-4 py-2 text-white'
          onClick={handleSave}
        >
          Save Address
        </button>
      </div>
    </div>
  )
}

ChangeAddress.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
}

export default ChangeAddress