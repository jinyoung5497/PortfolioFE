import React from "react";
import { connect_006, connect_007, connect_008 } from "../assets";
import { useSelector } from "react-redux";

export default function Connect_four_detail() {
  const page = useSelector((state) => state.page.value);

  return (
    <>
      <div className=" w-full flex m:flex-col">
        {page.english ? (
          <div className="bg-purple-600 w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black">
            <h1 className="font-bold text-white text-5xl mb-7">Reflection</h1>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">Learning outcome:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>React Redux state management</li>
                <li>Using TypeScript for the consistency</li>
                <li>Building Game logic</li>
                <li>Marker falling animation</li>
                <li>Game win state</li>
              </ul>
            </div>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">What I learned:</p>
              <div className="mb-4">
                I've acquired knowledge about React Redux state management, a
                powerful tool for efficiently handling and synchronizing
                application state. This ensures a smooth and responsive user
                experience. I've also explored the benefits of using TypeScript
                for consistency in my codebase, enhancing code quality and
                maintainability.
              </div>
              <div className="mb-4">
                Additionally, I've ventured into building game logic, which has
                broadened my understanding of how to design and implement
                interactive and engaging applications. I've had the opportunity
                to create a marker falling animation, adding a dynamic and
                visually appealing element to my projects.
              </div>
              <div>
                Furthermore, I've learned how to implement a game win state, a
                crucial feature that adds a sense of accomplishment and closure
                to gaming experiences. These new skills have expanded my
                capabilities as a web developer and enabled me to create more
                feature-rich and interactive applications.
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-purple-600 w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black">
            <h1 className="font-bold text-white text-5xl mb-7">배운점</h1>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">학습 결과:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>React Redux 상태 관리</li>
                <li>일관성을 위한 TypeScript 사용</li>
                <li>게임 로직 구축</li>
                <li>마커 떨어지는 애니메이션</li>
                <li>게임 승리 상태</li>
              </ul>
            </div>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">What I learned:</p>
              <div className="mb-4">
                React Redux 상태 관리에 대한 지식을 습득했으며, 이는
                애플리케이션 상태를 효율적으로 처리하고 동기화하는 강력한
                도구입니다. 이를 통해 매끄럽고 반응성이 좋은 사용자 경험을
                보장할 수 있습니다. 또한 코드베이스의 일관성을 위해 TypeScript를
                사용하여 코드 품질과 유지 보수성을 향상시키는 이점을
                탐구했습니다.
              </div>
              <div className="mb-4">
                추가로, 게임 로직을 구축하면서 상호작용적이고 몰입감 있는
                애플리케이션을 설계하고 구현하는 방법에 대한 이해를 넓혔습니다.
                마커 떨어지는 애니메이션을 만들어 프로젝트에 동적이고 시각적으로
                매력적인 요소를 추가할 기회를 가졌습니다.
              </div>
              <div>
                더 나아가, 게임 승리 상태를 구현하는 방법을 배웠으며, 이는 게임
                경험에 성취감과 마무리를 더해주는 중요한 기능입니다. 이러한
                새로운 기술은 웹 개발자로서의 역량을 확장시켜 더 많은 기능을
                갖춘 상호작용적인 애플리케이션을 만들 수 있게 해주었습니다.
              </div>
            </div>
          </div>
        )}
        <a
          href="https://github.com/jinyoung5497/connect-four-game"
          className="p-10 m:p-0"
        >
          <section className="flex items-center justify-center gap-10 p-10 lg:flex-col">
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={connect_007}
                alt="connect_007"
                className=" drop-shadow-xl border-[1px] border-black rounded-xl"
              />
              <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
                React Redux for the state management
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={connect_008}
              alt="connect_008"
              className=" drop-shadow-xl border-[1px] border-black rounded-xl"
            />
            <div className="text-center bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
              Setting game logic
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
