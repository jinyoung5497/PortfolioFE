import React from 'react'
import {
  connect_001,
  connect_002,
  connect_003,
  connect_004,
  connect_005,
  connect_006,
  ecommerce_001,
  ecommerce_002,
  ecommerce_003,
  ecommerce_004,
  ecommerce_005,
  ecommerce_006,
  ecommerce_007,
  ecommerce_008,
  ecommerce_009,
} from '../assets'

export default function Ecommerce_main() {
  return (
    <>
      <div className='h-screen lg:h-full w-full flex mb-10 md:flex-col md:items-center'>
        <div className='bg-orange w-[70rem] xl:w-[60rem] lg:w-[50rem] m:w-full h-full p-5 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold text-white text-4xl text-left mb-7'>
            Audiophile E-commerce Website
          </h1>
          <div className='flex flex-wrap gap-2 mb-4'>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              Mern Stack
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              React
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              TypeScript
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              React Redux
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              MongoDB
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              Express js
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              Tailwind CSS
            </div>
          </div>
          <div className='flex items-center justify-center gap-10 3xs:gap-5 mb-7'>
            <a
              href='https://ecommerce-website-blush-psi.vercel.app'
              className='h-12 rounded-lg p-4 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center'
            >
              Live Link
            </a>
            <a
              href='https://github.com/jinyoung5497/ecommerce-website'
              className='h-12  rounded-lg p-5 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center'
            >
              View code
            </a>
          </div>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>Users should be able to:</p>
            <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <li>
                View the optimal layout for the app depending on their device's
                screen size
              </li>
              <li>See hover states for all interactive elements on the page</li>
              <li>Add/Remove products from the cart</li>
              <li>Edit product quantities in the cart</li>
              <li>Fill in all fields in the checkout</li>
              <li>
                Receive form validations if fields are missed or incorrect
                during checkout
              </li>
              <li>
                See correct checkout totals depending on the products in the
                cart
              </li>
              <p className='indent-5'>
                - Shipping always adds $50 to the order
              </p>
              <p className='indent-5'>
                - VAT is calculated as 20% of the product total, excluding
                shipping
              </p>
              <li>
                See an order confirmation modal after checking out with an order
                summary
              </li>
            </ul>
          </div>
        </div>
        <a
          href='https://ecommerce-website-blush-psi.vercel.app'
          className='p-10 m:py-5 m:px-0 overflow-y-scroll'
        >
          <div className='grid grid-cols-1 items-center justify-center gap-10 m:gap-4'>
            <img
              src={ecommerce_001}
              alt='ecommerce_001'
              className='drop-shadow-lg border-[1px] border-black rounded-md w-[100rem] xl:w-[80rem] m:w-full'
            />
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
              Main page
            </div>
            <section className='flex items-center justify-center gap-10 lg:flex-col'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_002}
                  alt='ecommerce_002'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  product page
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_003}
                  alt='ecommerce_003'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Product detail page
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10 lg:flex-col'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_004}
                  alt='ecommerce_004'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Cart screen
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_005}
                  alt='ecommerce_005'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Checkout page
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_006}
                  alt='ecommerce_006'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Form Validation
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_007}
                  alt='ecommerce_007'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Order Complete page
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10 lg:flex-col'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_008}
                  alt='ecommerce_008'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Tablet view
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={ecommerce_009}
                  alt='ecommerce_009'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Mobile view
                </div>
              </div>
            </section>
          </div>
        </a>
      </div>
    </>
  )
}
