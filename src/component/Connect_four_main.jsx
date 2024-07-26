import React from "react";
import {
  connect_001,
  connect_002,
  connect_003,
  connect_004,
  connect_005,
  connect_006,
} from "../assets";
import { useSelector } from "react-redux";

export default function Connect_four_main() {
  const page = useSelector((state) => state.page.value);

  return (
    <>
      <div className="h-screen lg:h-full w-full flex mb-10 md:flex-col md:items-center">
        <div className="bg-purple-600 w-[70rem] xl:w-[60rem] lg:w-[50rem] m:w-full h-full p-5 rounded-lg border-[1px] border-black">
          <h1 className="font-bold text-white text-4xl text-left mb-7">
            Connect Four Game
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              React
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              TypeScript
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              React Redux
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              Tailwind CSS
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 3xs:gap-5 mb-7">
            <a
              href="https://connect-four-game-m1ctxyhbg-jinyoung5497.vercel.app/"
              className="h-12 rounded-lg p-4 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center"
            >
              Live Link
            </a>
            <a
              href="https://github.com/jinyoung5497/connect-four-game"
              className="h-12  rounded-lg p-5 flex items-center bg-gray hover:bg-slate-400 w-32 font-medium border-[1px] justify-center self-center"
            >
              View code
            </a>
          </div>
          {page.english ? (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">Users should be able to:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>View the game rules</li>
                <li>
                  Play a game of Connect Four against another human player
                  (alternating turns on the same computer)
                </li>
                <li>
                  See hover and focus states for all interactive elements on the
                  page
                </li>
                <li>
                  See hover and focus states for all interactive elements on the
                  page
                </li>
              </ul>
            </div>
          ) : (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">사용자가 할 수 있는 것::</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>게임 규칙 보기</li>
                <li>
                  다른 사람과 교대로 같은 컴퓨터에서 Connect Four 게임하기
                </li>
                <li>
                  페이지의 모든 상호작용 가능한 요소에 대한 호버 및 포커스 상태
                  보기
                </li>
                <li>
                  페이지의 모든 상호작용 가능한 요소에 대한 호버 및 포커스 상태
                  보기
                </li>
              </ul>
            </div>
          )}
        </div>
        <a
          href="https://connect-four-game-m1ctxyhbg-jinyoung5497.vercel.app/"
          className="p-10 m:py-5 m:px-0 overflow-y-scroll"
        >
          <div className="grid grid-cols-1 items-center justify-center gap-10 m:gap-4">
            <img
              src={connect_001}
              alt="connect_001"
              className="drop-shadow-lg border-[1px] border-black rounded-md w-[100rem] xl:w-[80rem] m:w-full"
            />
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
              Main screen
            </div>
            <section className="flex items-center justify-center gap-10 lg:flex-col">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={connect_002}
                  alt="connect_002"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Main menu
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={connect_003}
                  alt="connect_003"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Game Start screen
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-10 lg:flex-col">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={connect_004}
                  alt="connect_004"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  In game screen
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={connect_005}
                  alt="connect_005"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Pause menu
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={connect_006}
                  alt="connect_006"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Game Rules
                </div>
              </div>
            </section>
          </div>
        </a>
      </div>
    </>
  );
}
