import PropTypes from 'prop-types'

const Modal = ({ ModalOpen, children }) => {
  if (!ModalOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div
        role='dialog'
        aria-modal='true'
        className='relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg'
      >
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  ModalOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal