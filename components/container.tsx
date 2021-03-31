import { Footer } from "./footer";
import { Nav } from "./nav";

export const Container = ({ path, name, children }) => {
  return (
    <div className="grid grid-cols-1 items-center">
      <Nav path={path} name={name}/>
      <main className="bg-gray-50 divide-y-8 ">
        {children}
        <Footer />
      </main>
    </div>
  );
};
