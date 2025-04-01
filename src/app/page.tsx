"use client";
import { Image } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row items-center gap-4 bg-gradient-to-br from-green-400 to-blue-400 py-32 px-5 sm:px-10 mb-20 relative">
        <div className="flex-1 my-10">
          <h1 className="text-sm font-bold">Trade App</h1>
          <h2 className="font-bold text-3xl">Prediction</h2>
          <h2 className="font-bold text-3xl">Cryptocurrency</h2>
          <h2 className="font-bold text-3xl">Prices</h2>
          <Link href={"/register"} title="Register">
            <button className="my-5 bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-4 text-gray-100 rounded shadow">
              Register Now
            </button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/favicon.ico" alt="App Logo" />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute w-full left-0 opacity-80 bottom-0 sm:-bottom-20"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,85.3C672,117,768,171,864,170.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute w-full left-0  -bottom-5 sm:-bottom-30"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,85.3C672,117,768,171,864,170.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="my-20 sm:my-28">
        <div className="w-[80vw] sm:w-[50%] mx-auto border-b-2 border-green-300 drop-shadow-xl font-bold text-2xl pb-4">
          <h3 className="text-center">ABOUT US</h3>
        </div>
      </div>
    </div>
  );
}
