import React from "react";
import {
  multi_step_001,
  multi_step_002,
  multi_step_003,
  multi_step_004,
  multi_step_005,
  multi_step_006,
  multi_step_007,
  multi_step_008,
} from "../assets";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactImageGallery from "react-image-gallery";
import { hover } from "../slices/pageSlice";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Multi_step_main() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const images = [
    {
      original: multi_step_001,
      thumbnail: multi_step_001,
    },
    {
      original: multi_step_002,
      thumbnail: multi_step_002,
    },
    {
      original: multi_step_003,
      thumbnail: multi_step_003,
    },
    {
      original: multi_step_004,
      thumbnail: multi_step_004,
    },
    {
      original: multi_step_005,
      thumbnail: multi_step_005,
    },
    {
      original: multi_step_006,
      thumbnail: multi_step_006,
    },
    {
      original: multi_step_007,
      thumbnail: multi_step_007,
    },
    {
      original: multi_step_008,
      thumbnail: multi_step_008,
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
            href="https://github.com/jinyoung5497/multi-step-form"
            className="h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-sky-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            View Code
          </a>
          <a
            href="https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/"
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
            href="https://github.com/jinyoung5497/multi-step-form"
            className="h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 rounded-lg flex items-center hover:text-white  font-medium border-[1px] border-sky-500 w-44 justify-center 2xs:h-10 2xs:w-40 4xs:h-8 4xs:w-32"
          >
            코드 보기
          </a>
          <a
            href="https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/"
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
        <div className="bg-indigo-600 w-[70rem] xl:w-[60rem] lg:w-[50rem] m:w-full h-full p-5 rounded-lg border-[1px] border-black">
          <h1 className="font-bold text-white text-4xl text-left mb-7">
            Multi Step Form
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              React
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              React Router Dom
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              useContext React Hook
            </div>
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px]">
              Tailwind CSS
            </div>
          </div>
          {page.english ? (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">Users should be able to:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>Complete each step of the sequence</li>
                <li>Go back to a previous step to update their selections</li>
                <li>
                  See a summary of their selections on the final step and
                  confirm their order
                </li>
                <li>
                  View the optimal layout for the interface depending on their
                  device's screen size
                </li>
                <li>
                  See hover and focus states for all interactive elements on the
                  page
                </li>
                <li>Receive form validation messages if:</li>
                <p className="indent-5">- A field has been missed</p>
                <p className="indent-5">
                  - A step is submitted, but no selection has been made
                </p>
              </ul>
            </div>
          ) : (
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">사용자가 할 수 있는 것:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>순서의 각 단계를 완료하기</li>
                <li>이전 단계로 돌아가 선택 사항을 업데이트하기</li>
                <li>마지막 단계에서 선택 사항 요약을 보고 주문을 확인하기</li>
                <li>기기의 화면 크기에 따라 인터페이스의 최적 레이아웃 보기</li>
                <li>
                  페이지의 모든 상호작용 가능한 요소에 대한 호버 및 포커스 상태
                  보기
                </li>
                <li>다음 경우에 폼 유효성 검사 메시지 받기:</li>
                <p className="indent-5">- 필드가 누락된 경우</p>
                <p className="indent-5">
                  - 단계가 제출되었으나 선택 사항이 없는 경우
                </p>
              </ul>
            </div>
          )}
        </div>
        {/* <a
          href="https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/"
          className="p-10 m:py-5 m:px-0 overflow-y-scroll"
        >
          <div className="grid grid-cols-1 items-center justify-center gap-10 m:gap-4">
            <img
              src={multi_step_001}
              alt="multi_step_001"
              className="drop-shadow-lg border-[1px] border-black rounded-md w-[100rem] xl:w-[80rem] m:w-full"
            />
            <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
              Main screen
            </div>
            <section className="flex items-center justify-center gap-10 lg:flex-col">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={multi_step_002}
                  alt="multi_step_002"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center text-center">
                  Mobile responsive screen
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={multi_step_003}
                  alt="multi_step_003"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Personal Info
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-10 lg:flex-col">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={multi_step_004}
                  alt="multi_step_004"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Select your plan (Weekly payment)
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={multi_step_005}
                  alt="multi_step_005"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Select your plan (Monthly payment)
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={multi_step_006}
                  alt="multi_step_006"
                  className="h-96 drop-shadow-xl border-[1px] border-black rounded-xl w-fit  m:w-full"
                />
                <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center">
                  Summary
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
