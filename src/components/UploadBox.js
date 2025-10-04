import { CiSearch } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
// import {} from "@/custom-border/PartialFrame";
import { AiOutlineEnter } from "react-icons/ai";

export function SearchPill() {
  return (
    <div>
      <div className="flex items-center justify-center pt-15">
        <div className="p-[1.1px] rounded-l-full bg-gradient-to-r from-purple-500 via-red-500 to bg-yellow-500">
          <input
            className="rounded-l-full w-full p-4 pl-5 pr-70 bg-black outline-none"
            type="text"
            placeholder="Enter address to verify..."
          />
        </div>
        <button className="p-[1.2px] rounded-r-full bg-gradient-to-r from-purple-500 via-red-500 to bg-yellow-500 w-20 h-14.5 flex items-center justify-center">
          <div className="flex items-center justify-center rounded-r-full bg-black w-full h-full">
            <CiSearch className=" text-white  hover:text-gray-400 w-6 h-6" />
          </div>
        </button>
      </div>
    </div>
  );
}

export function UploadBox() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
      <div className="font-mono text-gray-500 flex items-center justify-center mt-20 p-4 border-2 border-dashed border-b-red-300 border-t-amber-200 border-r-lime-500 border-l-amber-600 h-60 w-200">
        <div className="flex items-center justify-center  hover:text-red-800">
          <span className="pl-5">drag & drop / choose file</span>
          <FaCloudUploadAlt className="h-10 w-10 m-2 pr-5" />
        </div>
      </div>
    </div>
    <button className="flex bg-gray-700 items-center justify-center mt-10 h-13 w-40 pl-5 pr-5 rounded-full font-light hover:bg-amber-700 transform hover:-translate-y-2 transition-all duration-500">Hit Enter
    <AiOutlineEnter className="ml-1" /></button>
    </div>
  );
}