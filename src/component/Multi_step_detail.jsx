import React from "react";
import { multi_step_001, multi_step_009, multi_step_010 } from "../assets";
import { useSelector } from "react-redux";

export default function Kanban_detail() {
  const page = useSelector((state) => state.page.value);
  return (
    <>
      <div className=" w-full flex m:flex-col">
        {page.english ? (
          <div className="bg-indigo-600 w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black">
            <h1 className="font-bold text-white text-5xl mb-7">Reflection</h1>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">Learning outcome:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>React Router Dom to navigate between pages</li>
                <li>Mobile responsive view</li>
                <li>Validation</li>
                <li>useContext hook to communicate between components</li>
              </ul>
            </div>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">What I learned:</p>
              <div className="mb-4">
                I've picked up some crucial web development skills that I can
                now use effectively. First and foremost, I've learned to employ
                React Router Dom, a tool that makes it easy for users to move
                between different pages in my web applications. This enhances
                the user experience by providing smooth navigation.
              </div>
              <div className="mb-4">
                In addition, I've honed my skills in creating mobile-responsive
                views, ensuring that my applications adapt gracefully to various
                screen sizes and devices. This responsiveness is vital for
                reaching a broader audience and delivering a consistent user
                experience.
              </div>
              <div className="mb-4">
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
        ) : (
          <div className="bg-indigo-600 w-1/3 lg:w-[30rem] m:w-full h-full self-start p-10 m:p-4 rounded-lg border-[1px] border-black">
            <h1 className="font-bold text-white text-5xl mb-7">배운점</h1>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">학습 결과:</p>
              <ul className="leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md">
                <li>페이지 간 이동을 위한 React Router Dom</li>
                <li>모바일 반응형 뷰</li>
                <li>유효성 검사</li>
                <li>컴포넌트 간 통신을 위한 useContext 훅</li>
              </ul>
            </div>
            <div className="bg-gray p-4 rounded-md border-[1px] border-black mb-7">
              <p className="font-bold text-lg mb-2">What I learned:</p>
              <div className="mb-4">
                웹 개발에 있어 중요한 몇 가지 기술을 효과적으로 사용할 수 있게
                되었습니다. 우선, React Router Dom을 사용하는 방법을 익혔는데,
                이는 사용자가 웹 애플리케이션 내의 다양한 페이지 간에 쉽게
                이동할 수 있게 해줍니다. 이를 통해 부드러운 내비게이션을
                제공하여 사용자 경험을 향상시킬 수 있습니다.
              </div>
              <div className="mb-4">
                또한, 모바일 반응형 뷰를 만드는 기술을 연마하여 애플리케이션이
                다양한 화면 크기와 기기에 적응하도록 했습니다. 이러한 반응형
                디자인은 더 넓은 사용자층에 도달하고 일관된 사용자 경험을
                제공하는 데 필수적입니다.
              </div>
              <div className="mb-4">
                더 나아가, 유효성 검사 개념을 파악하여 사용자가 웹사이트에
                입력한 정보가 올바르고 안전한지 확인할 수 있게 되었습니다. 이를
                통해 오류와 잠재적인 문제를 방지할 수 있습니다.
              </div>
              <div>
                마지막으로, useContext 훅을 탐구하여 웹사이트의 다양한 부분이
                정보를 공유하고 소통할 수 있도록 했습니다. 이는 컴포넌트 간
                데이터 공유와 상태 관리를 단순화하는 데 매우 유용한 도구입니다.
                이러한 기술은 제 웹 개발 능력을 크게 향상시켜 사용자 친화적이고
                적응 가능하며 안전한 웹사이트를 만들 수 있게 해주었습니다.
              </div>
            </div>
          </div>
        )}
        <a
          href="https://github.com/jinyoung5497/multi-step-form"
          className="p-10 m:p-0"
        >
          <section className="flex items-center justify-center gap-10 p-10 lg:flex-col">
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={multi_step_009}
                alt="multi_step_009"
                className=" drop-shadow-xl border-[1px] border-black rounded-xl"
              />
              <div className="bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
                useContext hook to communicate between components
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={multi_step_010}
              alt="multi_step_010"
              className=" drop-shadow-xl border-[1px] border-black rounded-xl"
            />
            <div className="text-center bg-gray px-2 py-1 rounded-full text-black border-black border-[1px] w-fit justify-self-center 4xs:text-sm">
              React Router Dom setup
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
