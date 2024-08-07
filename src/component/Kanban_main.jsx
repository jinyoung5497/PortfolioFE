import React from "react";
import {
  kanban_001,
  kanban_002,
  kanban_003,
  kanban_004,
  kanban_005,
  kanban_006,
  kanban_007,
} from "../assets";
import { NavLink } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector, useDispatch } from "react-redux";
import { hover } from "../slices/pageSlice";

export default function Kanban_main() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const images = [
    {
      original: kanban_002,
      thumbnail: kanban_002,
    },
    {
      original: kanban_003,
      thumbnail: kanban_003,
    },
    {
      original: kanban_004,
      thumbnail: kanban_004,
    },
    {
      original: kanban_005,
      thumbnail: kanban_005,
    },
    {
      original: kanban_006,
      thumbnail: kanban_006,
    },
    {
      original: kanban_007,
      thumbnail: kanban_007,
    },
  ];
  const back = () => {
    dispatch(hover());
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {page.english ? (
        <div className="flex gap-10 mb-10 2xs:gap-4">
          <a
            href="https://github.com/jinyoung5497/Kanban-Task-Management"
            className="h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-sky-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            View Code
          </a>
          <a
            href="https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/"
            className="h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-fuchsia-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            Live Link
          </a>
          <NavLink
            to="/projects"
            onClick={back}
            className="h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-blue-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            More Projects
          </NavLink>
        </div>
      ) : (
        <div className="flex gap-10 mb-10 2xs:gap-4">
          <a
            href="https://github.com/jinyoung5497/Kanban-Task-Management"
            className="h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-sky-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            코드 보기
          </a>
          <a
            href="https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/"
            className="h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-fuchsia-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            라이브 링크
          </a>
          <NavLink
            to="/projects"
            onClick={back}
            className="h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-blue-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            프로젝트 더보기
          </NavLink>
        </div>
      )}
      <div className="h-screen lg:h-full w-full flex mb-10 md:flex-col ">
        <div className="bg-blue-400 w-[600px]  lg:w-[50rem] m:w-full h-full p-5 rounded-lg border-[1px] border-black">
          <h1 className="font-bold text-white text-4xl text-left mb-7">
            Kanban Task Management App
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              Mern Stack
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              React
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              MongoDB
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              Express js
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              Tailwind CSS
            </div>
          </div>

          <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
            {page.english ? (
              <p className="font-bold text-lg mb-2">Users should be able to:</p>
            ) : (
              <p className="font-bold text-lg mb-2">사용자가 할 수 있는 것:</p>
            )}
            {page.english ? (
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>Create, read, update, and delete boards and tasks</li>
                <li>
                  See hover states for all interactive elements on the page
                </li>
                <li>
                  Receive form validations when trying to create/edit boards and
                  tasks
                </li>
                <li>
                  Mark subtasks as complete and move tasks between columns
                </li>
                <li>Hide/show the board sidebar</li>
                <li>Toggle the theme between light/dark modes</li>
                <li>
                  Keep track of any changes, even after refreshing the browser
                </li>
                <li>This project is a full-stack application</li>
              </ul>
            ) : (
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>보드와 작업을 생성, 읽기, 업데이트, 삭제</li>
                <li>
                  페이지의 모든 인터랙티브 요소에 대해 호버 상태를 볼 수 있음
                </li>
                <li>보드와 작업을 생성/편집할 때 폼 검증을 받을 수 있음</li>
                <li>하위 작업을 완료로 표시하고 작업을 컬럼 간에 이동</li>
                <li>보드 사이드바를 숨기거나 표시</li>
                <li>테마를 라이트 모드와 다크 모드 간에 전환</li>
                <li>브라우저를 새로 고친 후에도 모든 변경 사항을 추적</li>
                <li>이 프로젝트는 풀스택 애플리케이션임</li>
              </ul>
            )}
          </div>
        </div>
        {/* <a
          href="https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/"
          className="p-10 m:py-5 m:px-0 overflow-y-scroll"
        >
          <div className="grid grid-cols-1 items-center justify-center gap-10 m:gap-4">
            <img
              src={kanban_002}
              alt="kanban_002"
              className="drop-shadow-lg border-[1px] border-black rounded-md w-[100rem] xl:w-[80rem] m:w-full"
            />
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
              Main screen
            </div>
            <section className="flex items-center justify-center gap-10 lg:flex-col">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={kanban_003}
                  alt="kanban_003"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Add new board
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={kanban_004}
                  alt="kanban_004"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Add new tasks
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-10 lg:flex-col">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={kanban_005}
                  alt="kanban_005"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Edit Board
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={kanban_006}
                  alt="kanban_006"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Update tasks
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={kanban_007}
                  alt="kanban_007"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Delete board
                </div>
              </div>
            </section>
          </div>
        </a> */}
        <div className="w-full  m-5 flex items-center justify-center">
          <ReactImageGallery
            items={images}
            autoPlay={true}
            thumbnailPosition="right"
          />
        </div>
      </div>
    </>
  );
}
