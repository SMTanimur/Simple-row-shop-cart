import Image from 'next/image';
import { GrCart } from 'react-icons/gr';

const CourseCard = ({ course, handleButton }) => {
  const { image, instructor, price, name } = course;

  return (
    <div className='flex space-x-7 py-4 px-4'>
      <div className='w-44 h-36'>
        <Image src={image} alt={name} width={176} height={140} />
      </div>

      <div className='flex flex-col space-y-2'>
        <h1 className='text-4xl'>
          Name: <span className='text-blue-500 font-bold'>{name}</span>
        </h1>
        <h1 className='text-xl text-gray-800 font-semibold'>
          Instructor: {instructor}
          {name}
        </h1>
        <h1 className='text-xl text-yellow-600 font-semibold'>
          Price: {price}
        </h1>
        <button
          className='flex gap-2 text-blue-800 items-center py-2 px-5 bg-yellow-300 text-2xl w-[200px] rounded-md focus:outline-none'
          onClick={()=>handleButton(course)}
        >
          <span className='text-blue-600'>
            <GrCart />
          </span>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
