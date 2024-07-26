import React from "react";
import { Navbar, Footer, Project_detail } from ".";
import {
  kanban_001,
  connect_001,
  multi_step_001,
  ecommerce_010,
  ecommerce_002,
} from "../assets";
import { useSelector, useDispatch } from "react-redux";
import { hoverFalse, projectIndex, title } from "../slices/pageSlice";

export default function Projects() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);

  const openProject = (index, name) => {
    dispatch(hoverFalse());
    dispatch(projectIndex(index));
    dispatch(title(name));
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-12 mx-32 sm:mx-20 xs:mx-10 2xs:mx-5 xs:gap-5">
        {page.hover && (
          <>
            <h1 className="text-[100px] lg:text-[80px] m:text-[70px] 2xs:text-[60px] 4xs:text-[40px] font-bold my-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text 2xs:my-0">
              Projects
            </h1>
            {page.english ? (
              <p className="text-xl text-slate-600 text-center max-w-7xl mb-5 xs:text-lg 2xs:text-md 3xs:text-sm">
                Explore the intersection of design, functionality, and
                imagination as you navigate through this showcase of my work.
                Each project stands as a polished gem, reflecting the commitment
                to excellence and the relentless pursuit of pushing boundaries.
              </p>
            ) : (
              <p className="text-xl text-slate-600 text-center max-w-7xl mb-5 xs:text-lg 2xs:text-md 3xs:text-sm">
                각 프로젝트는 사용자 중심의 디자인과 최적화된 성능을 목표로
                하여, 다양한 장치와 화면 크기에 대응할 수 있도록 설계되었습니다.
                제 작업물과 자세한 기술 스택은 아래 링크를 통해 확인하실 수
                있습니다.
              </p>
            )}
          </>
        )}
        {page.hover ? (
          <div className="grid grid-cols-3 gap-10 mx-0 lg:mx-10 ml:mx-0 lg:grid-cols-2 xs:gap-5 2xs:gap-2 3xs:flex 3xs:flex-col">
            <div
              onClick={() => openProject(1, "Kanban Task Management App")}
              className="bg-blue-400 p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black"
            >
              <div className="text-white  flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5">
                Kanban Task Management App
              </div>
              <img
                src={kanban_001}
                alt="kanban_001"
                className="rounded-xl h-full w-full 2xs:rounded-lg mb-7 "
              />
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Mern Stack
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  React
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  MongoDB
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Express js
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Tailwind CSS
                </div>
              </div>
            </div>

            <div
              onClick={() => openProject(4, "Audiophile E-commerce Website")}
              className="bg-orange p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black"
            >
              <div className="text-white  flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5">
                Audiophile E-commerce Website
              </div>
              <img
                src={ecommerce_010}
                alt="ecommerce_010"
                className="rounded-xl h-full w-full 2xs:rounded-lg mb-7 "
              />
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Mern Stack
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  React
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  TypeScript
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  MongoDB
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Express js
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Tailwind CSS
                </div>
              </div>
            </div>

            <div
              onClick={() => openProject(2, "Connect Four Game")}
              className="bg-purple-600 p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black"
            >
              <div className="text-white  flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5">
                Connect Four Game
              </div>
              <img
                src={connect_001}
                alt="connect_001"
                className="rounded-xl h-full w-full 2xs:rounded-lg mb-7 "
              />
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  React
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  TypeScript
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  React Redux
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Tailwind CSS
                </div>
              </div>
            </div>

            <div
              onClick={() => openProject(3, "Multi Step Form")}
              className="bg-indigo-600 p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black"
            >
              <div className="text-white  flex items-center justify-center text-lg font-semibold 2xs:text-md text-center mb-5">
                Multi Step Form
              </div>
              <img
                src={multi_step_001}
                alt="multi_step_001"
                className="rounded-xl h-full w-full 2xs:rounded-lg mb-7 "
              />
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  React
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  React Router Dom
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  useContext
                </div>
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] text-sm">
                  Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Project_detail />
        )}
      </div>
      <Footer />
    </>
  );
}
