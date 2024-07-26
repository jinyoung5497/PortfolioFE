import React from "react";
import { ecommerce_011, ecommerce_012, ecommerce_013 } from "../assets";
import { useSelector } from "react-redux";

export default function Ecommerce_detail() {
  const page = useSelector((state) => state.page.value);

  return (
    <>
      <div className=" w-full flex m:flex-col">
        {page.english ? (
          <div className="bg-orange w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black">
            <h1 className="font-bold text-white text-5xl mb-7">Reflection</h1>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">Learning outcome:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>MERN stack workflow</li>
                <li>Setting up environment for the server</li>
                <li>Communication between backend and frontend</li>
                <li>Full stack deployment</li>
                <li>Redux state management</li>
                <li>Responsive design</li>
                <li>Checkout total calculation</li>
                <li>Form validation</li>
              </ul>
            </div>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">What I learned:</p>
              <div className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                In mastering the MERN (MongoDB, Express.js, React, Node.js)
                stack workflow, I've gained a comprehensive understanding of
                developing full-stack applications. Setting up the server
                environment involved configuring each component, ensuring
                seamless communication between the backend and frontend, and
                establishing a solid foundation for data flow. Utilising Redux
                for state management and implementing responsive design were
                crucial in creating dynamic and user-friendly interfaces.
                Moreover, I delved into tasks like calculating totals during
                checkout, implementing form validation for data integrity, and
                honing the skills necessary for full-stack deployment. This
                comprehensive knowledge has equipped me with the tools to create
                robust, responsive, and efficient applications within the MERN
                stack ecosystem.
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-orange w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black">
            <h1 className="font-bold text-white text-5xl mb-7">배운점</h1>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">학습 결과:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>MERN 스택 워크플로우</li>
                <li>서버 환경 설정</li>
                <li>백엔드와 프론트엔드 간의 통신</li>
                <li>풀 스택 배포</li>
                <li>Redux 상태 관리</li>
                <li>반응형 디자인</li>
                <li>결제 총액 계산</li>
                <li>폼 유효성 검사</li>
              </ul>
            </div>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">What I learned:</p>
              <div className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                MERN 스택(MongoDB, Express.js, React, Node.js) 워크플로우를
                마스터하는 과정에서 풀스택 애플리케이션 개발에 대한 종합적인
                이해를 얻게 되었습니다. 서버 환경 설정은 각 구성 요소를
                구성하고, 백엔드와 프론트엔드 간의 원활한 통신을 보장하며,
                데이터 흐름을 위한 견고한 기반을 구축하는 작업을 포함했습니다.
                상태 관리를 위해 Redux를 활용하고 반응형 디자인을 구현하는 것은
                동적이고 사용자 친화적인 인터페이스를 만드는 데 중요한 역할을
                했습니다. 또한 결제 시 총액 계산, 데이터 무결성을 위한 폼 유효성
                검사 구현, 풀스택 배포에 필요한 기술을 연마하는 등의 작업에도
                몰두했습니다. 이러한 종합적인 지식은 MERN 스택 생태계 내에서
                견고하고 반응형이며 효율적인 애플리케이션을 만드는 도구를 갖추게
                해주었습니다.
              </div>
            </div>
          </div>
        )}
        <a
          href="https://github.com/jinyoung5497/ecommerce-website"
          className="p-10 m:p-0"
        >
          <section className="flex items-center justify-center gap-10 p-10 lg:flex-col">
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={ecommerce_011}
                alt="ecommerce_011"
                className=" drop-shadow-xl border-[1px] border-black rounded-xl"
              />
              <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
                React Redux for state management
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={ecommerce_012}
                alt="ecommerce_012"
                className=" drop-shadow-xl border-[1px] border-black rounded-xl"
              />
              <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
                Server route setup
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={ecommerce_013}
              alt="ecommerce_013"
              className=" drop-shadow-xl border-[1px] border-black rounded-xl"
            />
            <div className="text-center bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
              Email form validation
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
