export const PromotionItemFlyer = ({ imgSrc, caption, price }) => {
  return (
    <div className="p-1">
      <div className=" w-full h-32 bg-cover flex flex-col text-center font-bold font-serif items-center text-base justify-end text-white" style={{ backgroundImage: imgSrc }}>
        <h6 className="text-xs">{caption}</h6>
        <h2>₦{price}</h2>
      </div>
    </div>
  );
};
