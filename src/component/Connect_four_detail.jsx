import React from 'react'
import { connect_001, connect_007, connect_008 } from '../assets'

export default function Kanban_detail() {
  return (
    <>
      <div className=' w-full flex'>
        <div className='bg-purple-600 w-1/3 h-full self-start p-10 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold w-96 text-white text-6xl mb-7'>
            Connect four game
          </h1>
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
            <div className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
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
                interactive and engaging applications. I've had the opportunity
                to create a marker falling animation, adding a dynamic and
                visually appealing element to my projects.
              </div>
              <div>
                Furthermore, I've learned how to implement a game win state, a
                crucial feature that adds a sense of accomplishment and closure
                to gaming experiences. These new skills have expanded my
                capabilities as a web developer and enabled me to create more
                feature-rich and interactive applications.
              </div>
            </div>
          </div>
        </div>
        <a
          href='https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/'
          className='p-10'
        >
          <img
            src={connect_001}
            alt='connect_001'
            className='drop-shadow-lg border-[1px] border-black rounded-md'
          />
          <section className='flex items-center justify-center gap-10 p-10'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={connect_007}
                alt='connect_007'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                React Redux for the state management
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={connect_008}
                alt='connect_008'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                Setting game logic
              </div>
            </div>
          </section>
        </a>
      </div>
    </>
  )
}
