import { FaHeart, FaShieldAlt, FaShoppingBag, FaUsers } from 'react-icons/fa'

const values = [
  {
    icon: FaShoppingBag,
    title: 'Curated products',
    description: 'We carefully select useful, quality products for every lifestyle.',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure shopping',
    description: 'Your privacy and a safe checkout experience are important to us.',
  },
  {
    icon: FaHeart,
    title: 'Customer first',
    description: 'We are committed to making every shopping experience simple and helpful.',
  },
  {
    icon: FaUsers,
    title: 'Built for everyone',
    description: 'Our collections are designed to bring something valuable to every customer.',
  },
]

export const About = () => (
  <div className='container mx-auto px-4 py-12 sm:px-6 md:px-16 lg:px-24'>
    <section className='mx-auto max-w-3xl text-center'>
      <p className='font-semibold uppercase tracking-wider text-red-600'>About e-Shop</p>
      <h1 className='mt-3 text-3xl font-bold sm:text-4xl'>Shopping made simple</h1>
      <p className='mt-5 text-lg leading-8 text-gray-600'>
        e-Shop brings everyday essentials, thoughtful products, and great value
        together in one convenient place. We make it easier to discover products
        you will love and have them delivered to your door.
      </p>
    </section>

    <section className='mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2'>
      <div className='rounded-lg bg-red-600 p-6 text-white sm:p-8'>
        <p className='text-sm font-semibold uppercase tracking-wider text-red-100'>
          Our mission
        </p>
        <h2 className='mt-3 text-2xl font-bold'>A better way to shop online</h2>
        <p className='mt-4 leading-7 text-red-50'>
          From browsing to delivery, we focus on clear choices, fair prices, and
          reliable service so you can shop with confidence.
        </p>
      </div>
      <div className='rounded-lg border bg-white p-6 shadow-md sm:p-8'>
        <p className='text-sm font-semibold uppercase tracking-wider text-red-600'>
          Why choose us
        </p>
        <h2 className='mt-3 text-2xl font-bold'>Value you can count on</h2>
        <p className='mt-4 leading-7 text-gray-600'>
          We combine a growing selection with friendly support and a secure,
          responsive shopping experience across every device.
        </p>
      </div>
    </section>

    <section className='mx-auto mt-14 max-w-5xl'>
      <h2 className='text-center text-2xl font-bold'>What we value</h2>
      <div className='mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {values.map(({ icon: Icon, title, description }) => (
          <article key={title} className='rounded-lg border bg-white p-5 text-center shadow-sm'>
            <Icon className='mx-auto text-3xl text-red-600' aria-hidden='true' />
            <h3 className='mt-4 font-semibold'>{title}</h3>
            <p className='mt-2 text-sm leading-6 text-gray-600'>{description}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
)