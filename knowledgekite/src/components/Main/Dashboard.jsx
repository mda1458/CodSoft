/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="py-20 main">
      <div className="flex flex-col justify-center max-w-5xl mx-4 pt-4 md:mx-auto">
        <div className="text-slate-900 font-bold text-md lg:text-lg pb-4">
          illuminating the journey of intellectual might
        </div>
        <h1 className="text-slate-900 font-extrabold text-xl sm:text-5xl lg:text-6xl tracking-tight text-center font-sans">
          Welcome to the{" "}
          <span className="text-white bg-slate-900 px-4 rounded-lg font-mono">
            Knowledge Kite!
          </span>
        </h1>
        <div className="text-slate-900 font-bold text-md lg:text-lg text-right pt-6">
          Where learning takes flight
        </div>
      </div>
      <div className="flex flex-col justify-center pt-8 mx-4 md:mx-16">
        <div className="text-slate-700 text-lg lg:text-xl pt-6">
          Are you a student with big dreams of joining the{" "}
          <a
            href="https://nust.edu.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 font-bold hover:underline underline-offset-8 animate-pulse hover:animate-none transition-all"
          >
            National University of Sciences and Technology (NUST), Islamabad
          </a>
          ? Your journey towards a world-class education and a promising future
          starts here. Your ultimate resource for acing the NUST Entrance Test
          (NET) and securing your place in one of Pakistan's most prestigious
          institutions is here.
        </div>
      </div>
      <div className="flex flex-col justify-center pt-8 mx-4 md:mx-16">
        <h1 className="text-slate-900 font-extrabold text-xl sm:text-5xl lg:text-6xl tracking-tight text-center font-sans">
          What makes us unique? 🤔
        </h1>
        <div className="text-slate-700 text-lg lg:text-xl pt-6">
          We understand that the NUST Entrance Test can be challenging, and
          that's why we're here to guide you every step of the way. Our mission
          is to empower aspiring students like you to prepare more effectively
          and efficiently, ensuring that you're fully equipped to tackle the
          test with confidence. Here you find!
        </div>
        <div className="text-slate-700 text-lg lg:text-xl pt-6 flex flex-wrap justify-center gap-6">
          <button className="text-white bg-slate-900 hover:bg-slate-800 font-bold rounded-2xl shadow-lg shadow-slate-500 transition-all py-2 px-4">
            <Link to="/concise-notes">Concise and Comprehensive Notes</Link>
          </button>
          <button className="text-white bg-slate-900 hover:bg-slate-800 font-bold rounded-2xl shadow-lg shadow-slate-500 transition-all py-2 px-4">
            <Link to="/short-tricks">Short Tricks</Link>
          </button>
          <button className="text-white bg-slate-900 hover:bg-slate-800 font-bold rounded-2xl shadow-lg shadow-slate-500 transition-all py-2 px-4">
            <Link to="/mcqs-bank">Practice Questions</Link>
          </button>
          <button className="text-white bg-slate-900 hover:bg-slate-800 font-bold rounded-2xl shadow-lg shadow-slate-500 transition-all py-2 px-4">
            <Link to="/past-papers">Past Papers</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
