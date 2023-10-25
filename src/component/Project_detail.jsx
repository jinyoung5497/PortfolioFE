import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'
import { NavLink } from 'react-router-dom'
import {
  Kanban_main,
  Multi_step_main,
  Multi_step_detail,
  Kanban_detail,
  Connect_four_main,
  Connect_four_detail,
} from '.'

export default function Project_detail() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  const back = () => {
    dispatch(hover())
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[100px] lg:text-[70px] m:text-[50px] 4xs:text-[40px]  font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text mb-10 text-center'>
          {page.title}
        </h1>
        {page.hover && (
          <p className='text-xl text-slate-600 text-center max-w-7xl mb-10'>
            Explore the intersection of design, functionality, and imagination
            as you navigate through this showcase of my work. Each project
            stands as a polished gem, reflecting the commitment to excellence
            and the relentless pursuit of pushing boundaries.
          </p>
        )}
        <div className='flex gap-10 mb-10 2xs:gap-4'>
          <a
            href='https://github.com/jinyoung5497'
            className='h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-fuchsia-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32'
          >
            Github
          </a>
          <NavLink
            to='/projects'
            onClick={back}
            className='h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-blue-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32'
          >
            More Projects
          </NavLink>
        </div>
        {page.projectIndex == 1 && (
          <>
            <Kanban_main />
            <Kanban_detail />
          </>
        )}
        {page.projectIndex == 2 && (
          <>
            <Connect_four_main />
            <Connect_four_detail />
          </>
        )}
        {page.projectIndex == 3 && (
          <>
            <Multi_step_main />
            <Multi_step_detail />
          </>
        )}
        <NavLink
          to='/projects'
          onClick={back}
          className='h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-blue-500 mt-10'
        >
          More Projects
        </NavLink>
      </div>
    </>
  )
}
