import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import faces from "../assets/desktop/image-hero-left.png";
import facesR from "../assets/desktop/image-hero-right.png";
import { ReactComponent as Number } from "../assets/number.svg";
import image1 from "../assets/desktop/image-woman-in-videocall.jpg";
import image2 from "../assets/desktop/image-women-videochatting.jpg";
import image3 from "../assets/desktop/image-men-in-meeting.jpg";
import image4 from "../assets/desktop/image-man-texting.jpg";
import { ReactComponent as Number2 } from "../assets/number2.svg";

export default function Homepage() {
  return (
    <div className="text-center">
      <Logo className="m-auto my-16" />
      <div className="flex justify-between w-1/2 md:w-full">
        <img src={faces} alt="random people" />
        <img src={facesR} alt="random people" />
      </div>
      <div className="2xl:-m-72">
        <h1 className="font-bold text-6xl m-10">Group Chat for Everyone</h1>
        <p className="text-xl mx-14 md:mx-40">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className="flex flex-col text-white items-center my-8 text-xl font-bold space-y-4 md:flex md:flex-row md:items-baseline md:justify-center md:space-x-4">
          <button className="border rounded-full py-4 px-10 bg-blue-400 font-bold">
            Download v1.3
          </button>
          <button className="border rounded-full py-4 px-10 bg-purple-700 font-bold hover:bg-pink-500">
            What is it?
          </button>
        </div>
      </div>
      <Number className="m-auto my-16 2xl:mt-96" />
      <div className="flex flex-wrap p-4 md:flex md:flex-row">
        <img src={image1} alt="woman in video call" className="w-1/2 p-2 rounded-2xl  md:w-1/4" />
        <img src={image2} alt="women in video chatting" className="w-1/2 p-2 rounded-2xl md:w-1/4" />
        <img src={image3} alt="man in meeting" className="w-1/2 p-2 rounded-2xl md:w-1/4" />
        <img src={image4} alt="man in texting" className="w-1/2 p-2 rounded-2xl md:w-1/4" />
      </div>
      <div className="mt-16">
        <h4 className="uppercase text-xl text-green-700 font-bold">
          Built for modern use
        </h4>
        <h2 className="text-4xl font-bold mt-4 mx-16 md:mx-64">
          Smarter meetings, all in one place
        </h2>
        <p className="text-lg mt-8 mx-2 md:mx-32 2xl:w-1/3 2xl:mx-auto">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
      <Number2 className="m-auto mt-20 z-0" />
      <div className="bg-pic -m-7">
        <div className="space-y-8 pt-28 text-white 2xl:flex 2xl:flex-row 2xl:justify-evenly 2xl:items-baseline 2xl:pt-48 2xl:text-left">
          <h2 className="font-bold text-4xl 2xl:w-1/5">Experience more together</h2>
          <p className="text-3xl mx-24 2xl:w-1/4">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <button className="rounded-full py-4 px-10 bg-purple-600 font-bold text-white hover:bg-pink-500">
            Download v1.3
          </button>
        </div>
      </div>
    </div>
  );
}
