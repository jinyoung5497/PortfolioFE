import React from "react";
import {
  kanban_001,
  connect_001,
  multi_step_001,
  ecommerce_010,
  kanban_002,
  kanban_003,
  kanban_004,
  kanban_005,
  kanban_006,
  kanban_007,
  ecommerce_001,
  ecommerce_002,
  ecommerce_003,
  ecommerce_004,
  ecommerce_005,
  ecommerce_006,
  ecommerce_007,
  ecommerce_008,
  ecommerce_009,
  connect_002,
  connect_003,
  connect_004,
  connect_005,
  connect_006,
  multi_step_002,
  multi_step_003,
  multi_step_004,
  multi_step_005,
  multi_step_006,
  multi_step_007,
  multi_step_008,
} from "../assets";
import { useSelector, useDispatch } from "react-redux";
import { hoverFalse, projectIndex, title } from "../slices/pageSlice";
import { useNavigate } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function FeaturedSkill() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const navigate = useNavigate();

  const openProject = (index, name) => {
    dispatch(hoverFalse());
    dispatch(projectIndex(index));
    dispatch(title(name));
    window.scrollTo({ top: 0 });
    navigate("/projects");
  };

  const kanbanImages = [
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
  const ecommerceImages = [
    {
      original: ecommerce_001,
      thumbnail: ecommerce_001,
    },
    {
      original: ecommerce_002,
      thumbnail: ecommerce_002,
    },
    {
      original: ecommerce_003,
      thumbnail: ecommerce_003,
    },
    {
      original: ecommerce_004,
      thumbnail: ecommerce_004,
    },
    {
      original: ecommerce_005,
      thumbnail: ecommerce_005,
    },
    {
      original: ecommerce_006,
      thumbnail: ecommerce_006,
    },
    {
      original: ecommerce_007,
      thumbnail: ecommerce_007,
    },
    {
      original: ecommerce_008,
      thumbnail: ecommerce_008,
    },
    {
      original: ecommerce_009,
      thumbnail: ecommerce_009,
    },
  ];
  const connectImages = [
    {
      original: connect_001,
      thumbnail: connect_001,
    },
    {
      original: connect_002,
      thumbnail: connect_002,
    },
    {
      original: connect_003,
      thumbnail: connect_003,
    },
    {
      original: connect_004,
      thumbnail: connect_004,
    },
    {
      original: connect_005,
      thumbnail: connect_005,
    },
    {
      original: connect_006,
      thumbnail: connect_006,
    },
  ];
  const multiStepImages = [
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

  return (
    <>
      <div className="grid grid-cols-2 items-center gap-10 mx-0 lg:mx-10 ml:mx-0 lg:grid-cols-2 xs:gap-5 2xs:gap-2 xs:flex xs:flex-col">
        <div
          onClick={() => openProject(1, "Kanban Task Management App")}
          className="bg-blue-400 p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black h-min"
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
        <div className="w-full  m-5 flex items-center justify-center">
          <ReactImageGallery
            items={kanbanImages}
            autoPlay={true}
            thumbnailPosition="right"
          />
        </div>

        <div
          onClick={() => openProject(4, "Audiophile E-commerce Website")}
          className="bg-orange p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black h-min"
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
        <div className="w-full  m-5 flex items-center justify-center">
          <ReactImageGallery
            items={ecommerceImages}
            autoPlay={true}
            thumbnailPosition="right"
            originalHeight="500"
          />
        </div>

        <div
          onClick={() => openProject(2, "Connect Four Game")}
          className="bg-purple-600 p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black h-min"
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
        <div className="w-full  m-5 flex items-center justify-center">
          <ReactImageGallery
            items={connectImages}
            autoPlay={true}
            thumbnailPosition="right"
          />
        </div>

        <div
          onClick={() => openProject(3, "Multi Step Form")}
          className="bg-indigo-600 p-4 md:p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer border-[1px] border-black h-min"
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
        <div className="w-full  m-5 flex items-center justify-center">
          <ReactImageGallery
            items={multiStepImages}
            autoPlay={true}
            thumbnailPosition="right"
          />
        </div>
      </div>
    </>
  );
}
