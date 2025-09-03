import React from 'react';
import { Form } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='my-10 flex flex-col items-center justify-center h-[80%] m-auto'>
      <div className='text-center w-[80%] m-auto mt-3'>
        <h1 className='text-3xl font-bold mb-4 text-blue-500'>Contact Us</h1>
        <p className='text-lg mb-8 text-gray-600'>
          Get in touch with us for any inquiries or feedback.
        </p>
      </div>
      <div className='flex justify-around items-center w-[90%] h-[80%] m-auto mt-5 gap-5'>
        <div className='w-full p-1 rounded-md'>
          <img
            src='https://www.anandgroupindia.com/wp-content/uploads/2019/05/contactus.jpg'
            alt='Contact Us'
            className='w-[100%] h-[400px] object-cover shadow-2xl shadow-gray-700 rounded-md'
          />
        </div>
        <div className='w-full border p-5'>
          <Form method='post'>
            <div className='mb-4'>
              <label htmlFor='name' className='font-bold text-lg mb-1 block'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='py-1 px-2 rounded-md w-full border border-gray-300'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='font-bold text-lg mb-1 block'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='py-1 px-2 rounded-md w-full border border-gray-300'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='font-bold text-lg mb-1 block'>
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                required
                className='py-1 px-2 rounded-md w-full border border-gray-300'
              ></textarea>
            </div>
            <div className='mb-4'>
              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
