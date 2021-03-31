export const Promotions = ({ name, children }) => {
  return (
    <section className="px-2 py-2">
      <header className="flex items-center leading-3 justify-start">
        <h6 className="font-mono font-thin text-xs">{name}</h6>
      </header>
      <div>{children}</div>
    </section>
  );
};
