import React from 'react'
import {
  multi_step_001,
  multi_step_002,
  multi_step_003,
  multi_step_004,
  multi_step_005,
  multi_step_006,
  multi_step_007,
  multi_step_008,
} from '../assets'

export default function Connect_four_main() {
  return (
    <>
      <div className='h-screen w-full flex mb-10'>
        <div className='bg-indigo-600 w-1/3 h-full self-start p-10 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold w-96 text-white text-6xl mb-7'>
            Multi Step Form
          </h1>
          <div className='flex flex-wrap gap-2 mb-7'>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              React
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              React Router Dom
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              useContext React Hook
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              Tailwind CSS
            </div>
          </div>
          <div className='flex items-center justify-center gap-10 3xs:gap-5 mb-7'>
            <a
              href='https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/'
              className='h-12 rounded-lg p-4 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center'
            >
              Live Link
            </a>
            <a
              href='https://github.com/jinyoung5497/multi-step-form'
              className='h-12  rounded-lg p-5 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center'
            >
              View code
            </a>
          </div>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>Users should be able to:</p>
            <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <li>Complete each step of the sequence</li>
              <li>Go back to a previous step to update their selections</li>
              <li>
                See a summary of their selections on the final step and confirm
                their order
              </li>
              <li>
                View the optimal layout for the interface depending on their
                device's screen size
              </li>
              <li>
                See hover and focus states for all interactive elements on the
                page
              </li>
              <li>Receive form validation messages if:</li>
              <p className='indent-5'>- A field has been missed</p>
              <p className='indent-5'>
                - A step is submitted, but no selection has been made
              </p>
            </ul>
          </div>
        </div>
        <a
          href='https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/'
          className='p-10 overflow-y-scroll'
        >
          <div className='grid grid-cols-1 items-center justify-center '>
            <img
              src={multi_step_001}
              alt='multi_step_001'
              className='drop-shadow-lg border-[1px] border-black rounded-md'
            />
            <section className='flex items-center justify-center gap-10 p-10'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={multi_step_002}
                  alt='multi_step_002'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl'
                />
                <div className='bg-gray text-center px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Moblie responsive screen
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={multi_step_003}
                  alt='multi_step_003'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Personal Info
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10 pb-10'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={multi_step_004}
                  alt='multi_step_004'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Select your plan (Weekly payment)
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={multi_step_005}
                  alt='multi_step_005'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Select your plan (Monthly payment)
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10 mb-7'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={multi_step_006}
                  alt='multi_step_006'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Pick Add-ons
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={multi_step_007}
                  alt='multi_step_007'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Finishing up
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10 '>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={multi_step_008}
                  alt='multi_step_008'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Summary
                </div>
              </div>
            </section>
          </div>
        </a>
      </div>
    </>
  )
}
