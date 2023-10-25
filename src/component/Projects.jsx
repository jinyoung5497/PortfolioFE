import React from 'react'
import { Navbar, Footer, Project_detail } from '.'
import { kanban_001, connect_001, multi_step_001 } from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hoverFalse, projectIndex, title } from '../slices/pageSlice'

export default function Projects() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  const openProject = (index, name) => {
    dispatch(hoverFalse())
    dispatch(projectIndex(index))
    dispatch(title(name))
    window.scrollTo({ top: 0 })
  }

  const setModelling = () => {
    dispatch(modelling())
  }
  const setFrontend = () => {
    dispatch(frontend())
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32 sm:mx-20 xs:mx-10 2xs:mx-5 xs:gap-5'>
        {page.hover && (
          <>
            <h1 className='text-[100px] lg:text-[80px] m:text-[70px] 2xs:text-[60px] 4xs:text-[40px] font-bold my-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text 2xs:my-0'>
              Projects
            </h1>
            <p className='text-xl text-slate-600 text-center max-w-7xl mb-5 xs:text-lg 2xs:text-md 3xs:text-sm'>
              Explore the intersection of design, functionality, and imagination
              as you navigate through this showcase of my work. Each project
              stands as a polished gem, reflecting the commitment to excellence
              and the relentless pursuit of pushing boundaries.
            </p>
          </>
        )}
        {page.hover ? (
          <div className='grid grid-cols-3 gap-10 mx-24 lg:mx-10 ml:mx-0 m:grid-cols-2 xs:gap-5 2xs:gap-2 4xs:flex 4xs:flex-col'>
            <div
              onClick={() => openProject(1, 'Kanban Task Management App')}
              className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
            >
              <img
                src={kanban_001}
                alt='kanban_001'
                className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5 2xs:rounded-lg'
              />
              <div className='h-1/5 flex items-center justify-center text-lg font-semibold 2xs:text-md text-center 2xl:mt-4'>
                Kanban Task Management App
              </div>
            </div>

            <div
              onClick={() => openProject(2, 'Connect Four Game')}
              className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
            >
              <img
                src={connect_001}
                alt='connect_001'
                className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5 2xs:rounded-lg'
              />
              <div className='h-1/5 flex items-center justify-center text-lg font-semibold 2xs:text-md'>
                Connect Four Game
              </div>
            </div>

            <div
              onClick={() => openProject(3, 'Multi Step Form')}
              className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
            >
              <img
                src={multi_step_001}
                alt='multi_step_001'
                className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5 2xs:rounded-lg'
              />
              <div className='h-1/5 flex items-center justify-center text-lg font-semibold 2xs:text-md'>
                Multi Step Form
              </div>
            </div>
          </div>
        ) : (
          <Project_detail />
        )}
      </div>
      <Footer />
    </>
  )
}
