import Link from "next/link";

export const CollectionListItem = ({
  img,
  imgAlt,
  eyebrow,
  title,
  pricing,
  url,
}) => {
  return (
    <article>
      <div className="border">
        <div className="h-full w-full bg-cover">
          <Link href={url}>
            <img className="h-full w-full" src={img} alt={imgAlt} />
          </Link>
        </div>
        <div className="mx-1 mt-2 mb-4">
          <div>
            <div className=" text-sm font-semibold text-gray-700 leading-snug">
              {title}
            </div>
            <div className="text-xs text-gray-600 uppercase font-bold">
              by {eyebrow}
            </div>
            <div className="mt-1 text-sm text-gray-600">{pricing}</div>
          </div>
        </div>
      </div>
    </article>
  );
};
