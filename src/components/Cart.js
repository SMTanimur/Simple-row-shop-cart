const Cart = ({cart}) => {
  console.log(cart)
  const totalSum=cart.reduce((sum, item) => sum + item.price, 0);
  const tax =totalSum/10;
  return (
    <div className='ml-5 shadow-lg border py-10 px-6 flex flex-col space-y-2'>
      <h1 className='text-xl text-gray-800 font-semibold'>Total items order : {cart.length}</h1>
      <h2 className='text-xl text-gray-800 font-semibold'>Price: {totalSum} : </h2>
      <p className='text-xl text-gray-800 font-semibold'>tax: {tax}</p>
      <h2 className='text-xl text-gray-800 font-semibold'>Grand total: {totalSum+tax}</h2>
    </div>
  );
};

export default Cart;
