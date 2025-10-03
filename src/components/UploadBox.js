import { CiSearch } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";

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
      <div></div>
      <div></div>
    </div>
  );
}

export function UploadBox(){

}