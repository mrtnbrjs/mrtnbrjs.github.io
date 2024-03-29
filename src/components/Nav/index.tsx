import { League_Spartan } from "next/font/google";
import Link from "next/link";
const inter = League_Spartan({ subsets: ["latin"] }); // $ExpectType FontFace

export default function Nav() {
  return (
    <nav className="sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto max-w-4xl pr-1 pl-1 ">
        <Link href="/" className="flex items-center">
          <h1
            style={inter.style}
            className="glitch self-center text-4xl font-semibold whitespace-nowrap dark:text-white"
          >
            <span style={inter.style} aria-hidden="true">
              mrtnbrjs.dev
            </span>
            mrtnbrjs.dev
            <span style={inter.style} aria-hidden="true">
              mrtnbrjs.dev
            </span>
          </h1>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
