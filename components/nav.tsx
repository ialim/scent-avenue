import Link from "next/link";
import { omit } from "lodash";

const SVG = {
  back: (
    <svg
      className="h-6 w-6 px-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  ),
  menu: (
    <svg
      className="h-6 w-6 px-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  search: (
    <svg
      className="h-6 w-6 px-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  whishList: (
    <svg
      className="h-6 w-6 px-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  bag: (
    <svg
      className="h-6 w-6 px-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  ),
};

export const Nav = ({path, name}) => {
  const icon = path === "/" ? SVG.menu : SVG.back;
  const rightMenu = omit(SVG, ["menu", "back"]);
  return (
    <div className="sticky inset-0 z-10 flex flex-row justify-between w-screen p-2 border-gray-200 border-b-2 items-center bg-gray-50">
      <div className="flex flex-row justify-evenly items-center">
          <Link href={path === "/" ? "" : "/"}>
        <div>{icon}</div>
          </Link>
        <Link href={path}>
          <a className=" ml-1 text-xs">{name}</a>
        </Link>
      </div>
      <div className="flex flex-row justify-evenly">
        {Object.entries(rightMenu).map(([key, value]) => (
          <Link key={key} href={`/${key}`}>
            <a>{value}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};
