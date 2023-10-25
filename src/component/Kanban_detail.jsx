import React from 'react'
import {
  kanban_001,
  kanban_002,
  kanban_003,
  kanban_004,
  kanban_005,
  kanban_006,
  kanban_007,
  kanban_008,
  kanban_009,
  kanban_010,
} from '../assets'

export default function Kanban_detail() {
  return (
    <>
      <div className=' w-full flex'>
        <div className='bg-blue-400 w-1/3 h-full self-start p-10 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold text-white text-6xl mb-7'>Reflection</h1>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>Learning outcome:</p>
            <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <li>MERN stack workflow</li>
              <li>Setting up environment for the server</li>
              <li>Communication between backend and frontend</li>
              <li>Sidebar animation</li>
              <li>Dark mode customisation</li>
            </ul>
          </div>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>What I learned:</p>
            <div className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              I've learned about the MERN stack workflow, which involves the
              essential steps of setting up the server environment and
              establishing effective communication between the backend and
              frontend. This workflow is crucial for building web applications
              using the MERN stack, where MongoDB, Express.js, React, and
              Node.js play key roles. First, I've discovered the significance of
              configuring the server environment to ensure it can handle
              requests and manage data effectively.
            </div>
          </div>
        </div>
        <a
          href='https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/'
          className='p-10'
        >
          <section className='flex items-center justify-center gap-10 p-10'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={kanban_008}
                alt='kanban_008'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                Setting server routes using express
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={kanban_009}
                alt='kanban_009'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                Getting data from the server
              </div>
            </div>
          </section>
          <div className='flex flex-col items-center justify-center gap-3'>
            <img
              src={kanban_010}
              alt='kanban_010'
              className=' drop-shadow-xl border-[1px] border-black rounded-xl'
            />
            <div className='text-center bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
              useContext hook to communicate between components
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
