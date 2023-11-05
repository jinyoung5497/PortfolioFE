import React from 'react'
import { ecommerce_011, ecommerce_012, ecommerce_013 } from '../assets'

export default function Ecommerce_detail() {
  return (
    <>
      <div className=' w-full flex m:flex-col'>
        <div className='bg-orange w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold text-white text-5xl mb-7'>Reflection</h1>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>Learning outcome:</p>
            <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <li>MERN stack workflow</li>
              <li>Setting up environment for the server</li>
              <li>Communication between backend and frontend</li>
              <li>Full stack deployment</li>
              <li>Redux state management</li>
              <li>Responsive design</li>
              <li>Checkout total calculation</li>
              <li>Form validation</li>
            </ul>
          </div>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>What I learned:</p>
            <div className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              In mastering the MERN (MongoDB, Express.js, React, Node.js) stack
              workflow, I've gained a comprehensive understanding of developing
              full-stack applications. Setting up the server environment
              involved configuring each component, ensuring seamless
              communication between the backend and frontend, and establishing a
              solid foundation for data flow. Utilising Redux for state
              management and implementing responsive design were crucial in
              creating dynamic and user-friendly interfaces. Moreover, I delved
              into tasks like calculating totals during checkout, implementing
              form validation for data integrity, and honing the skills
              necessary for full-stack deployment. This comprehensive knowledge
              has equipped me with the tools to create robust, responsive, and
              efficient applications within the MERN stack ecosystem.
            </div>
          </div>
        </div>
        <a
          href='https://github.com/jinyoung5497/ecommerce-website'
          className='p-10 m:p-0'
        >
          <section className='flex items-center justify-center gap-10 p-10 lg:flex-col'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={ecommerce_011}
                alt='ecommerce_011'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm'>
                React Redux for state management
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={ecommerce_012}
                alt='ecommerce_012'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm'>
                Server route setup
              </div>
            </div>
          </section>
          <div className='flex flex-col items-center justify-center gap-3'>
            <img
              src={ecommerce_013}
              alt='ecommerce_013'
              className=' drop-shadow-xl border-[1px] border-black rounded-xl'
            />
            <div className='text-center bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm'>
              Email form validation
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
