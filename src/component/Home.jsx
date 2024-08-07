import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hoverTrue } from "../slices/pageSlice";
import { FeaturedSkill, Footer } from ".";

/**
 * Home extended card?
 * home shopping
 * space website
 */

export default function Home() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);

  const hoverFalses = () => {
    dispatch(hoverTrue());
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-12 mx-32 m:mx-20 sm:mx-16 2xs:mx-10 3xl:gap-5">
        <h1 className="text-[100px] lg:text-[80px] m:text-[70px] xs:text-[55px] 2xs:text-[40px] 4xs:text-[35px] font-bold my-5 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text text-center xs:my-0">
          Jinyoung Choi
        </h1>
        {page.english ? (
          <p className="text-xl text-slate-600 text-center max-w-7xl xs:text-md 2xs:max-w-md">
            Welcome to my portfolio! I am a passionate frontend developer with a
            keen eye for creating stunning and user-friendly web experiences.
            Here you will find a showcase of my polished projects and
            prototypes!
          </p>
        ) : (
          <p className="text-xl text-slate-600 text-center max-w-7xl xs:text-md 2xs:max-w-md">
            안녕하세요, 저는 프론트엔드 개발자 최진영입니다. 다향한 프로젝트와
            함께 JavaScript, React, TypeScript, MongoDB와 같은 최신 웹 기술을
            깊이 있게 다뤄왔습니다. 다양한 프로젝트를 통해 창의적인 문제 해결과
            뛰어난 사용자 경험을 제공하는 데 노력했습니다. 끊임없이 변화하는 웹
            개발 환경에서 최적의 솔루션을 찾아내고, 사용자에게 최고의 경험을
            제공하기 위해 항상 노력하고 있습니다.
          </p>
        )}
        <div className="flex gap-10 mb-10 xs:gap-4 xs:mb-0">
          <NavLink
            to="/projects"
            onClick={hoverFalses}
            className="h-12 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 rounded-lg p-5 flex justify-center items-center text-white px-12 font-medium border-[1px] xs:px-4 w-40 xs:w-32 3xs:w-24 3xs:p-4 3xs:px-10 4xs:w-20  xs:text-sm xs:h-3 self-center"
          >
            Projects
          </NavLink>
          <a
            href="https://github.com/jinyoung5497"
            className="h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 rounded-lg p-5 flex justify-center items-center hover:text-white px-12 font-medium border-[1px] border-violet-500 xs:px-4 w-40 xs:w-32 3xs:w-24 3xs:p-4 3xs:px-10 4xs:w-20  xs:text-sm xs:h-3 self-center"
          >
            Github
          </a>
        </div>

        <div className="flex flex-col items-center gap-10 w-full mb-10">
          <FeaturedSkill />
        </div>
      </div>
      <Footer />
    </>
  );
}
