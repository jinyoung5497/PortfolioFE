import React from 'react'
import {
  kanban_001,
  connect_001,
  multi_step_001,
  ecommerce_010,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hoverFalse, projectIndex, title } from '../slices/pageSlice'
import { useNavigate } from 'react-router-dom'

export default function FeaturedSkill() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)
  const navigate = useNavigate()

  const openProject = (index, name) => {
    dispatch(hoverFalse())
    dispatch(projectIndex(index))
    dispatch(title(name))
    window.scrollTo({ top: 0 })
    navigate('/projects')
  }
  return (
    <>
      <div className='grid grid-cols-3 gap-10 mx-0 lg:mx-10 ml:mx-0 lg:grid-cols-2 xs:gap-5 2xs:gap-2 3xs:flex 3xs:flex-col'>
        <div
          onClick={() => openProject(1, 'Kanban Task Management App')}
          className='bg-blue-400 p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black'
        >
          <div className='text-white h-1/5 flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5'>
            Kanban Task Management App
          </div>
          <img
            src={kanban_001}
            alt='kanban_001'
            className='rounded-xl h-4/5 2xs:rounded-lg mb-7'
          />
          <div className='flex flex-wrap gap-2'>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              Mern Stack
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              React
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
        </div>

        <div
          onClick={() => openProject(4, 'Audiophile Ecommerce Website')}
          className='bg-orange p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black'
        >
          <div className='text-white h-1/5 flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5'>
            Audiophile E-commerce Website
          </div>
          <img
            src={ecommerce_010}
            alt='ecommerce_010'
            className='rounded-xl h-4/5 2xs:rounded-lg mb-7'
          />
          <div className='flex flex-wrap gap-2'>
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
        </div>

        <div
          onClick={() => openProject(2, 'Connect Four Game')}
          className='bg-purple-600 p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black'
        >
          <div className='text-white h-1/5 flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5'>
            Connect Four Game
          </div>
          <img
            src={connect_001}
            alt='connect_001'
            className='rounded-xl h-4/5 2xs:rounded-lg mb-7'
          />
          <div className='flex flex-wrap gap-2'>
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
              Tailwind CSS
            </div>
          </div>
        </div>

        <div
          onClick={() => openProject(3, 'Multi Step Form')}
          className='bg-indigo-600 p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black'
        >
          <div className='text-white h-1/5 flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5'>
            Multi Step Form
          </div>
          <img
            src={multi_step_001}
            alt='multi_step_001'
            className='rounded-xl h-4/5 2xs:rounded-lg mb-7'
          />
          <div className='flex flex-wrap gap-2 items-center justify-start'>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              React
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              React Router Dom
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              useContext React Hook
            </div>
            <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm'>
              Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
