import { useState } from 'react'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import toast from 'react-hot-toast'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const contactDetails = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'support@e-shop.com',
    href: 'mailto:support@e-shop.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Address',
    value: '100 Market Street, New York',
  },
  {
    icon: FaClock,
    label: 'Support hours',
    value: 'Mon - Fri, 9:00 AM - 6:00 PM',
  },
]

export const Contact = () => {
  const [form, setForm] = useState(initialForm)

  const handleChange = event => {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    toast.success('Thanks for contacting us. We will get back to you soon!')
    setForm(initialForm)
  }

  return (
    <div className='container mx-auto px-4 py-12 sm:px-6 md:px-16 lg:px-24'>
      <section className='mx-auto max-w-3xl text-center'>
        <p className='font-semibold uppercase tracking-wider text-red-600'>Get in touch</p>
        <h1 className='mt-3 text-3xl font-bold sm:text-4xl'>How can we help?</h1>
        <p className='mt-4 text-gray-600'>
          Have a question about an order, a product, or delivery? Send us a
          message and our support team will be happy to help.
        </p>
      </section>

      <div className='mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5'>
        <section className='rounded-lg bg-gray-800 p-6 text-white sm:p-8 lg:col-span-2'>
          <h2 className='text-2xl font-bold'>Contact information</h2>
          <p className='mt-3 text-gray-300'>
            Choose the channel that works best for you.
          </p>
          <div className='mt-8 space-y-6'>
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className='flex items-start gap-4'>
                <Icon className='mt-1 shrink-0 text-xl text-red-400' aria-hidden='true' />
                <div>
                  <p className='text-sm text-gray-400'>{label}</p>
                  {href ? (
                    <a href={href} className='hover:text-red-300'>{value}</a>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='rounded-lg border bg-white p-6 shadow-md sm:p-8 lg:col-span-3'>
          <h2 className='text-2xl font-bold'>Send us a message</h2>
          <form onSubmit={handleSubmit} className='mt-6 space-y-5'>
            <div className='grid gap-5 sm:grid-cols-2'>
              <div>
                <label htmlFor='contact-name' className='mb-1 block font-medium'>Name</label>
                <input
                  id='contact-name'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  className='w-full rounded-lg border px-3 py-2'
                  placeholder='Your name'
                  autoComplete='name'
                  required
                />
              </div>
              <div>
                <label htmlFor='contact-email' className='mb-1 block font-medium'>Email</label>
                <input
                  id='contact-email'
                  name='email'
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  className='w-full rounded-lg border px-3 py-2'
                  placeholder='you@example.com'
                  autoComplete='email'
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor='contact-subject' className='mb-1 block font-medium'>Subject</label>
              <input
                id='contact-subject'
                name='subject'
                value={form.subject}
                onChange={handleChange}
                className='w-full rounded-lg border px-3 py-2'
                placeholder='How can we help?'
                required
              />
            </div>
            <div>
              <label htmlFor='contact-message' className='mb-1 block font-medium'>Message</label>
              <textarea
                id='contact-message'
                name='message'
                value={form.message}
                onChange={handleChange}
                className='min-h-32 w-full resize-y rounded-lg border px-3 py-2'
                placeholder='Write your message here...'
                required
              />
            </div>
            <button type='submit' className='w-full rounded-lg bg-red-600 py-2.5 font-semibold text-white hover:bg-red-700 sm:w-auto sm:px-8'>
              Send message
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}