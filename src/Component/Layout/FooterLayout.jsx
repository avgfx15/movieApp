const FooterLayout = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-600 w-full'>
      <div className='flex justify-between items-center py-4 px-10 bg-gray-600 w-[90%] gap-5'>
        <div className='px-3'>
          <h3 className='text-2xl font-bold text-amber-500 uppercase'>
            Stacodev
          </h3>
          <p className='text-gray-300 text-lg'>
            Welcome to Stacodev E-commerce website
          </p>
        </div>
        <div className='px-3'>
          <h2 className='text-xl font-bold text-white uppercase'>Shopping</h2>
          <ul>
            <li className='text-sm text-gray-300 my-2'>Computer Store</li>
            <li className='text-sm text-gray-300 mb-2'>Laptop Store</li>
            <li className='text-sm text-gray-300 mb-2'>Accessories Store</li>
            <li className='text-sm text-gray-300 mb-2'>Sales & Discount</li>
          </ul>
        </div>
        <div className='px-3'>
          <h2 className='text-xl font-bold text-white uppercase'>Support</h2>
          <ul>
            <li className='text-sm text-gray-300 my-2'>Contact Us</li>
            <li className='text-sm text-gray-300 mb-2'>Payment Method</li>
            <li className='text-sm text-gray-300 mb-2'>Track & Delivery </li>
            <li className='text-sm text-gray-300 mb-2'>Return & Refund</li>
          </ul>
        </div>
        <div className='px-3'>
          <h2 className='text-xl font-bold text-white uppercase'>Newsletter</h2>
          <p className='text-gray-300 text-xl'>
            Subscribe to get latest news, update and information.
          </p>
          <div className='flex flex-col'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-2 rounded text-gray-300 my-2 border border-gray-300'
            />
            <button className='p-2 bg-blue-500 text-white rounded ml-2'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-300 w-full text-center py-3'>
        <h3 className='text-white text-lg'>
          Copyright &#169; 2025{' '}
          <span className='text-amber-500 uppercase font-bold'>Stacodev</span>
        </h3>
      </div>
    </div>
  );
};

export default FooterLayout;
