import Image from "next/image";
import Link from "next/link";

export const CircularMenuItem = ({ imgSrc, name }) => {
  return (
    <div className="grid grid-rows-2 justify-center items-center text-center p-1 box-content">
      <Link href={`/collections/${name}`}>
        <div className="m-1 py-1 max-h-12 w-12">
          <Image
            className="rounded-full"
            src={imgSrc}
            width={50}
            height={50}
          ></Image>
          <div className="min-w-max">
            <h6
              className="font-extralight font-mono"
              style={{ fontSize: "0.45rem", lineHeight: "0.35rem" }}
            >
              {name}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const ScrollMenuBar = ({ itemHeight, children }) => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div
        className="flex flex-row self-start overflow-y-hidden w-full m-1 p-1"
        style={{ scrollbarWidth: "none", height: itemHeight }}
      >
        {children}
      </div>
    </div>
  );
};
