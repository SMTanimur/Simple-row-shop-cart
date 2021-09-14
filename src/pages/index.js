import Cart from '@components/Cart';
import CourseCard from '@components/CourseCard';
import Head from 'next/head';
import {  useState } from 'react';
import courseData from '../fackdata/courseData';
export default function Home() {
  const [course,setCourse ]= useState(courseData)
  const [cart, setCart] = useState([]);

  const handleButton = course => {
    const newCart = [...cart, course];
    setCart(newCart);
  };
  return (
    <div>
      <Head>
        <title>Shop cart</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12'>
          {/* shop cart */}
          <div className='col-span-8'>
            {course.map(course => (
              <div
                key={course.id}
                className='border border-gray-400 shadow-lg mt-4'
              >
                <CourseCard course={course} handleButton={handleButton}/>
              </div>
            ))}
          </div>
          {/* shop cart */}

          {/* cart part */}
          <div className='col-span-4 py-4'>
            <Cart cart={cart} />
          </div>
          {/* cart part */}
        </div>
      </div>
    </div>
  );
}
