import React from 'react'
import { Kanban_main, Connect_four_main, Multi_step_main } from '.'
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
      <Kanban_main />
      <Connect_four_main />
      <Multi_step_main />
    </>
  )
}
