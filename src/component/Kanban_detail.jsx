import React from "react";
import { kanban_008, kanban_009, kanban_010 } from "../assets";
import { useSelector } from "react-redux";

export default function Kanban_detail() {
  const page = useSelector((state) => state.page.value);

  return (
    <>
      <div className=" w-full flex m:flex-col">
        <div className="bg-blue-400 w-[600px] lg:w-[30rem] m:w-full h-full self-start p-5 m:p-4 rounded-lg border-[1px] border-black">
          {page.english ? (
            <h1 className="font-bold text-white text-5xl mb-7">Reflection</h1>
          ) : (
            <h1 className="font-bold text-white text-5xl mb-7">배운 점</h1>
          )}
          {page.english ? (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">Learning outcome:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>MERN stack workflow</li>
                <li>Setting up environment for the server</li>
                <li>Communication between backend and frontend</li>
                <li>Sidebar animation</li>
                <li>Dark mode customisation</li>
              </ul>
            </div>
          ) : (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">학습 결과:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>MERN 스택 워크플로우</li>
                <li>서버 환경 설정</li>
                <li>백엔드와 프론트엔드 간의 통신</li>
                <li>사이드바 애니메이션</li>
                <li>다크 모드 커스터마이징</li>
              </ul>
            </div>
          )}
          {page.english ? (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">What I learned:</p>
              <div className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                I've learned about the MERN stack workflow, which involves the
                essential steps of setting up the server environment and
                establishing effective communication between the backend and
                frontend. This workflow is crucial for building web applications
                using the MERN stack, where MongoDB, Express.js, React, and
                Node.js play key roles. First, I've discovered the significance
                of configuring the server environment to ensure it can handle
                requests and manage data effectively.
              </div>
            </div>
          ) : (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">내가 배운 것:</p>
              <div className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                저는 MERN 스택 워크플로우에 대해 학습했습니다. 이 워크플로우는
                서버 환경을 설정하고 백엔드와 프론트엔드 간의 효과적인
                커뮤니케이션을 구축하는 필수 단계를 포함합니다. MongoDB,
                Express.js, React, Node.js가 중요한 역할을 하는 MERN 스택을
                사용하여 웹 애플리케이션을 구축하는 데 매우 중요합니다. 먼저,
                서버 환경을 구성하는 것의 중요성을 발견했는데, 이는 요청을
                처리하고 데이터를 효과적으로 관리할 수 있도록 하는 데
                필수적입니다.
              </div>
            </div>
          )}
        </div>
        <a
          href="https://github.com/jinyoung5497/Kanban-Task-Management"
          className="p-10 m:p-0"
        >
          <section className="flex items-center justify-center gap-10 p-10 lg:flex-col">
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={kanban_008}
                alt="kanban_008"
                className=" drop-shadow-xl border-[1px] border-black rounded-xl"
              />
              <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
                Setting server routes using express
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={kanban_009}
                alt="kanban_009"
                className=" drop-shadow-xl border-[1px] border-black rounded-xl"
              />
              <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
                Getting data from the server
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={kanban_010}
              alt="kanban_010"
              className=" drop-shadow-xl border-[1px] border-black rounded-xl"
            />
            <div className="text-center bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
              useContext hook to communicate between components
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
