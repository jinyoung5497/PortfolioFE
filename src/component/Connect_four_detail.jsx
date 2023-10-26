import React from 'react'
import { connect_006, connect_007, connect_008 } from '../assets'

export default function Connect_four_detail() {
  return (
    <>
      <div className=' w-full flex m:flex-col'>
        <div className='bg-purple-600 w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold text-white text-5xl mb-7'>Reflection</h1>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>Learning outcome:</p>
            <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <li>React Redux state management</li>
              <li>Using TypeScript for the consistency</li>
              <li>Building Game logic</li>
              <li>Marker falling animation</li>
              <li>Game win state</li>
            </ul>
          </div>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>What I learned:</p>
            <div className='mb-4'>
              I've acquired knowledge about React Redux state management, a
              powerful tool for efficiently handling and synchronizing
              application state. This ensures a smooth and responsive user
              experience. I've also explored the benefits of using TypeScript
              for consistency in my codebase, enhancing code quality and
              maintainability.
            </div>
            <div className='mb-4'>
              Additionally, I've ventured into building game logic, which has
              broadened my understanding of how to design and implement
              interactive and engaging applications. I've had the opportunity to
              create a marker falling animation, adding a dynamic and visually
              appealing element to my projects.
            </div>
            <div>
              Furthermore, I've learned how to implement a game win state, a
              crucial feature that adds a sense of accomplishment and closure to
              gaming experiences. These new skills have expanded my capabilities
              as a web developer and enabled me to create more feature-rich and
              interactive applications.
            </div>
          </div>
        </div>
        <a
          href='https://github.com/jinyoung5497/connect-four-game'
          className='p-10 m:p-0'
        >
          <section className='flex items-center justify-center gap-10 p-10 lg:flex-col'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={connect_007}
                alt='connect_007'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm'>
                React Redux for the state management
              </div>
            </div>
          </section>
          <div className='flex flex-col items-center justify-center gap-3'>
            <img
              src={connect_008}
              alt='connect_008'
              className=' drop-shadow-xl border-[1px] border-black rounded-xl'
            />
            <div className='text-center bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm'>
              Setting game logic
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
