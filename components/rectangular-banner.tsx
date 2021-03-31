export const RectangularBanner = ({imgSrc, action, heading, subheading}) => {
  return (
    <div className=" bg-white">
      <div
        className="w-screen h-32 bg-cover flex flex-col justify-end"
        style={{
          backgroundImage: imgSrc,
        }}
      >
        <div className=" text-gray-50 hover:bg-gray-50 hover:bg-opacity-50 h-full w-full font-serif font-bold text-sm text-center flex flex-col justify-end items-center">
          <h2 className="text-xl">{heading}</h2>
          <p>{subheading}</p>
          <div className="w-max p-2 m-1 rounded-md bg-yellow-500 font-mono text-white font-thin text-xs">{action}</div>
        </div>
      </div>
    </div>
  );
};
