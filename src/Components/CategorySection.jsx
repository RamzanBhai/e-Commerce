import ManCategory from '../assets/Images/man.png'
import WomanCategory from '../assets/Images/woman.png'
import kidCategory from '../assets/Images/kid.png'

const CategorySection = () => {
  const category=[
    {
      title:'Man',
      imageUrl:ManCategory
    },
    {
      title:'Woman',
      imageUrl:WomanCategory
    },
    {
      title:'Kid',
      imageUrl:kidCategory
    },
  ]
  return (
    <div className='container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-0'>
      {
        category.map((category,index)=>(
          <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} alt=""className='w-full h-full object-cover  rounded-lg shadow-md'  />
            <div className='absolute left-8 top-20 sm:left-12'>
              <p className='text-xl font-bold' >{category.title}</p>
              <p className='text-gray-600'>View All</p>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default CategorySection