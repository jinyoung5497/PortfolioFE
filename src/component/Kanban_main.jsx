import React from 'react'
import {
  kanban_001,
  kanban_002,
  kanban_003,
  kanban_004,
  kanban_005,
  kanban_006,
  kanban_007,
} from '../assets'

export default function Kanban_main() {
  return (
    <>
      <div className='h-screen lg:h-full w-full flex mb-10 md:flex-col '>
        <div className='bg-blue-400 w-[70rem] xl:w-[60rem] lg:w-[50rem] m:w-full h-full p-5 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold text-white text-4xl text-left mb-7'>
            Kanban Task Management App
          </h1>
          <div className='flex flex-wrap gap-2 mb-4'>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              Mern Stack
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              React
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              MongoDB
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              Express js
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]'>
              Tailwind CSS
            </div>
          </div>
          <div className='flex items-center justify-center gap-10 3xs:gap-5 mb-4'>
            <a
              href='https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/'
              className='h-12 rounded-lg p-4 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center'
            >
              Live Link
            </a>
            <a
              href='https://github.com/jinyoung5497/Kanban-Task-Management'
              className='h-12  rounded-lg p-5 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center'
            >
              View code
            </a>
          </div>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>Users should be able to:</p>
            <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <li>Create, read, update, and delete boards and tasks</li>
              <li>See hover states for all interactive elements on the page</li>
              <li>
                Receive form validations when trying to create/edit boards and
                tasks
              </li>
              <li>Mark subtasks as complete and move tasks between columns</li>
              <li>Hide/show the board sidebar</li>
              <li>Toggle the theme between light/dark modes</li>
              <li>
                Keep track of any changes, even after refreshing the browser
              </li>
              <li>This project is a full-stack application</li>
            </ul>
          </div>
        </div>
        <a
          href='https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/'
          className='p-10 m:py-5 m:px-0 overflow-y-scroll'
        >
          <div className='grid grid-cols-1 items-center justify-center gap-10 m:gap-4'>
            <img
              src={kanban_002}
              alt='kanban_002'
              className='drop-shadow-lg border-[1px] border-black rounded-md w-[100rem] xl:w-[80rem] m:w-full'
            />
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
              Main screen
            </div>
            <section className='flex items-center justify-center gap-10 lg:flex-col'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={kanban_003}
                  alt='kanban_003'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Add new board
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={kanban_004}
                  alt='kanban_004'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Add new tasks
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10 lg:flex-col'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={kanban_005}
                  alt='kanban_005'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Edit Board
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={kanban_006}
                  alt='kanban_006'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Update tasks
                </div>
              </div>
            </section>
            <section className='flex items-center justify-center gap-10'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <img
                  src={kanban_007}
                  alt='kanban_007'
                  className='h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full'
                />
                <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                  Delete board
                </div>
              </div>
            </section>
          </div>
        </a>
      </div>
    </>
  )
}
