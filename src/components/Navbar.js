import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-center relative p-10">
        <p className="text-4xl font-bold text-white absolute left-[47%] transform -translate-x-1/2 mt-4">
          veri<span className="text-red-500">Fy</span>
        </p>
        <a
          href="https://github.com/oldschoolmoron/VeriFi"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mr-15 mt-4"
        >
          <FaGithub className="text-white w-7 h-7 hover:text-red-500" />
        </a>
      </div>
    </div>
  );
}
