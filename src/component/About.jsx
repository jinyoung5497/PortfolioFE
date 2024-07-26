import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { pdf, jinyoung } from "../assets";
import { useSelector } from "react-redux";

export default function About() {
  const page = useSelector((state) => state.page.value);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-12 mx-32 2xs:mx-20 3xs:mx-10 3xs:gap-8">
        <h1 className="text-[100px] lg:text-[80px] m:text-[70px] xs:text-[55px] 2xs:text-[40px] 4xs:text-[35px] font-bold my-5 bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text text-center 2xs:my-0">
          About Me
        </h1>
        <img
          src={jinyoung}
          alt="jinyoung"
          className="rounded-full border-2 border-cyan-900 shadow-[0_35px_35px_rgba(0,0,0,0.25)] 2xs:h-64"
        />
        {page.english ? (
          <p className="max-w-4xl leading-9 text-lg text-slate-800 2xs:text-md 2xs:leading-7 3xs:text-sm">
            My name is Jinyoung Choi. I'm a passionate frontend developer
            currently based in Brisbane Australia. I've worked individually to
            create and develop projects and prototypes. I am constantly updating
            my skills and am eager to learn more to work toward success.
          </p>
        ) : (
          <p className="max-w-4xl leading-9 text-lg text-slate-800 2xs:text-md 2xs:leading-7 3xs:text-sm">
            제 이름은 최진영입니다. 현재 한국 서울에서 활동 중인 열정적인
            프론트엔드 개발자입니다. 개인적으로 다양한 프로젝트와 프로토타입을
            기획하고 개발해왔으며, 지속적으로 기술을 업데이트하고 새로운 것을
            배우는 데 열정을 가지고 있습니다. 성공을 향해 나아가기 위해 끊임없이
            노력하고 있습니다.
          </p>
        )}
        {page.english ? (
          <p className="text-lg text-slate-800 2xs:text-md 3xs:text-sm">
            Attached is a copy of my complete resume.
          </p>
        ) : (
          <p className="text-lg text-slate-800 2xs:text-md 3xs:text-sm">
            아래 첨부된 파일은 제 이력서 전체 내용입니다.
          </p>
        )}
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1lhNMVcxzNNeIGXCk6xrjBkuVAXtHChK2/view?usp=sharing"
            )
          }
        >
          <img src={pdf} alt="pdf" className="h-40 2xs:h-28 cursor-pointer" />
        </a>
      </div>
      <Footer />
    </>
  );
}
