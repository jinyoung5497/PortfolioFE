import React from 'react'
import { multi_step_001, multi_step_009, multi_step_010 } from '../assets'

export default function Kanban_detail() {
  return (
    <>
      <div className=' w-full flex'>
        <div className='bg-indigo-600 w-1/3 h-full self-start p-10 rounded-lg border-[1px] border-black'>
          <h1 className='font-bold w-96 text-white text-6xl mb-7'>
            Multi Step Form
          </h1>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>Learning outcome:</p>
            <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <li>React Router Dom to navigate between pages</li>
              <li>Mobile responsive view</li>
              <li>Validation</li>
              <li>useContext hook to communicate between components</li>
            </ul>
          </div>
          <div className='bg-gray p-4 rounded-md border-[1px] border-black mb-7'>
            <p className='font-bold text-lg mb-2'>What I learned:</p>
            <div className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
              <div className='mb-4'>
                I've picked up some crucial web development skills that I can
                now use effectively. First and foremost, I've learned to employ
                React Router Dom, a tool that makes it easy for users to move
                between different pages in my web applications. This enhances
                the user experience by providing smooth navigation.
              </div>
              <div className='mb-4'>
                In addition, I've honed my skills in creating mobile-responsive
                views, ensuring that my applications adapt gracefully to various
                screen sizes and devices. This responsiveness is vital for
                reaching a broader audience and delivering a consistent user
                experience.
              </div>
              <div className='mb-4'>
                Furthermore, I've grasped the concept of validation, which means
                I can check and ensure that the information users enter on my
                website is correct and secure, preventing errors and potential
                issues.
              </div>
              <div>
                Last but not least, I've explored the useContext hook, a
                valuable tool for enabling different parts of my website to
                communicate and share information. This simplifies data sharing
                and state management across components. These skills have
                greatly improved my web development abilities, allowing me to
                create user-friendly, adaptable, and secure websites.
              </div>
            </div>
          </div>
        </div>
        <a
          href='https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/'
          className='p-10'
        >
          <img
            src={multi_step_001}
            alt='multi_step_001'
            className='drop-shadow-lg border-[1px] border-black rounded-md'
          />
          <section className='flex items-center justify-center gap-10 p-10'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={multi_step_009}
                alt='multi_step_009'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 text-center rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                useContext hook to communicate between components
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img
                src={multi_step_010}
                alt='multi_step_010'
                className=' drop-shadow-xl border-[1px] border-black rounded-xl'
              />
              <div className='bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center'>
                React Router Dom setup
              </div>
            </div>
          </section>
        </a>
      </div>
    </>
  )
}
